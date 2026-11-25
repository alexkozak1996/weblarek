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
	private api: IApi;

	constructor(api: IApi) {
		this.api = api;
	}

	/**
	 * Получает каталог товаров с сервера.
	 */
	public getProducts(): Promise<IProductsResponse> {
		return this.api.get<IProductsResponse>('/product/');
	}

	/**
	 * Отправляет заказ на сервер.
	 */
	public createOrder(order: IOrder): Promise<IOrderResponse> {
		return this.api.post<IOrderResponse>('/order/', order);
	}
}