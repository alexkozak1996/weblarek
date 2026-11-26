import {
	IApi,
	IOrder,
	IOrderResponse,
	IProductsResponse,
} from '../types';

/**
 * Класс для работы с API проекта..
 */
export class ApiServer {
	/**
	 * Базовый HTTP-клиент.
	 */
	constructor(private api: IApi) {}

	/**
	 * Получает каталог товаров с сервера.
	 */
	getProducts(): Promise<IProductsResponse> {
		return this.api.get<IProductsResponse>('/product/');
	}

	/**
	 * Отправляет заказ на сервер.
	 */
	createOrder(order: IOrder): Promise<IOrderResponse> {
		return this.api.post<IOrderResponse>('/order/', order);
	}
}