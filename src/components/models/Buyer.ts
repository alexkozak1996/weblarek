import type {
	IBuyer,
	TBuyerErrors,
	TPayment,
} from '../../types';

import type { IEvents } from '../base/Events';

/**
 * Модель данных покупателя.
 *
 * Хранит способ оплаты, адрес,
 * электронную почту и телефон.
 */
export class Buyer {
	private payment: TPayment | '' = '';
	private email = '';
	private phone = '';
	private address = '';

	constructor(private readonly events: IEvents) {}

	/**
	 * Частично обновляет данные покупателя.
	 */
	public setData(data: Partial<IBuyer>): void {
		if (data.payment !== undefined) {
			this.payment = data.payment;
		}

		if (data.email !== undefined) {
			this.email = data.email;
		}

		if (data.phone !== undefined) {
			this.phone = data.phone;
		}

		if (data.address !== undefined) {
			this.address = data.address;
		}

		this.events.emit('buyer:changed');
	}

	/**
	 * Возвращает данные покупателя.
	 */
	public getData(): IBuyer {
		return {
			payment: this.payment,
			email: this.email,
			phone: this.phone,
			address: this.address,
		};
	}

	/**
	 * Очищает данные покупателя.
	 */
	public clear(): void {
		this.payment = '';
		this.email = '';
		this.phone = '';
		this.address = '';

		this.events.emit('buyer:changed');
	}

	/**
	 * Проверяет данные покупателя.
	 */
	public validate(): TBuyerErrors {
		const errors: TBuyerErrors = {};

		if (!this.payment) {
			errors.payment = 'Не выбран способ оплаты';
		}

		if (!this.address.trim()) {
			errors.address = 'Укажите адрес доставки';
		}

		if (!this.email.trim()) {
			errors.email = 'Укажите электронную почту';
		}

		if (!this.phone.trim()) {
			errors.phone = 'Укажите номер телефона';
		}

		return errors;
	}
}