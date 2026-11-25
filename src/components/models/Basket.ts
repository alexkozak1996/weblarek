import type { IProduct } from '../../types';
import type { IEvents } from '../base/Events';

/**
 * Модель корзины.
 *
 * Хранит товары, выбранные пользователем.
 */
export class Basket {
	private items: IProduct[] = [];

	constructor(private readonly events: IEvents) {}

	/**
	 * Возвращает товары из корзины.
	 */
	public getItems(): IProduct[] {
		return [...this.items];
	}

	/**
	 * Добавляет товар в корзину.
	 */
	public addItem(item: IProduct): void {
		if (this.hasItem(item.id)) {
			return;
		}

		this.items.push(item);

		this.events.emit('basket:changed');
	}

	/**
	 * Удаляет товар из корзины.
	 */
	public removeItem(item: IProduct): void {
		const oldCount = this.items.length;

		this.items = this.items.filter(
			(basketItem) => basketItem.id !== item.id
		);

		if (this.items.length !== oldCount) {
			this.events.emit('basket:changed');
		}
	}

	/**
	 * Очищает корзину.
	 */
	public clear(): void {
		if (this.items.length === 0) {
			return;
		}

		this.items = [];

		this.events.emit('basket:changed');
	}

	/**
	 * Возвращает общую стоимость товаров.
	 */
	public getTotal(): number {
		return this.items.reduce(
			(total, item) => total + (item.price ?? 0),
			0
		);
	}

	/**
	 * Возвращает количество товаров.
	 */
	public getCount(): number {
		return this.items.length;
	}

	/**
	 * Проверяет наличие товара в корзине.
	 */
	public hasItem(id: string): boolean {
		return this.items.some(
			(item) => item.id === id
		);
	}
}