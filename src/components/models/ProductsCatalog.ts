import type { IProduct } from '../../types';
import type { IEvents } from '../base/Events';

/**
 * Модель каталога товаров.
 *
 * Хранит товары каталога и выбранный товар.
 */
export class ProductsCatalog {
	private items: IProduct[] = [];
	private selectedItem: IProduct | null = null;

	constructor(private readonly events: IEvents) {}

	/**
	 * Сохраняет массив товаров каталога.
	 */
	public setItems(items: IProduct[]): void {
		this.items = [...items];

		this.events.emit('catalog:changed');
	}

	/**
	 * Возвращает массив товаров каталога.
	 */
	public getItems(): IProduct[] {
		return [...this.items];
	}

	/**
	 * Возвращает товар по идентификатору.
	 */
	public getItemById(id: string): IProduct | undefined {
		return this.items.find((item) => item.id === id);
	}

	/**
	 * Сохраняет выбранный товар.
	 */
	public setSelectedItem(item: IProduct): void {
		this.selectedItem = item;

		this.events.emit('preview:changed');
	}

	/**
	 * Возвращает выбранный товар.
	 */
	public getSelectedItem(): IProduct | null {
		return this.selectedItem;
	}

	/**
	 * Очищает каталог.
	 */
	public clear(): void {
		this.items = [];
		this.selectedItem = null;

		this.events.emit('catalog:changed');
	}
}