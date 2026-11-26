/**
 * Методы HTTP-запросов, поддерживаемые API-клиентом.
 */
export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

/**
 * Базовый интерфейс HTTP-клиента.
 */
export interface IApi	{
	get<T extends object>(uri: string): Promise<T>;

	post<T extends object>(
		uri: string,
		data: object,
		method?: ApiPostMethods
	): Promise<T>;
}

/**
 * Интерфейс товара.
 */
export interface IProduct	{
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number | null;
}

/**
 * Способы оплаты заказа.
 */
export type TPayment = 'card' | 'cash';

/**
 * Данные клиента.
 */
export interface IBuyer	{
	payment: TPayment | '';
	email: string;
	phone: string;
	address: string;
}

/**
 * Поля данных клиента.
 */
export type TBuyerField = keyof IBuyer;

/**
 * Ошибки заполнения данных клиента.
 */
export type TBuyerErrors = Partial<Record<TBuyerField, string>>;

/**
 * Ответ сервера при получении каталога.
 */
export interface IProductsResponse	{
	total: number;
	items: IProduct[];
}

/**
 * Данные заказа.
 */
export interface IOrder extends IBuyer	{
	total: number;
	items: string[];
}

/**
 * Ответ сервера после оформления заказа.
 */
export interface IOrderResponse	{
	id: string;
	total: number;
}