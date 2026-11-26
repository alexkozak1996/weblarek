import type { IProduct } from '../../types';

/**
 * Модель каталога товаров.
 *
 * Хранит товары каталога и выбранный товар.
 */
export class ProductsCatalog	{
	private items: IProduct[] = [];
	private selectedItem: IProduct | null = null;

	/**
	 * Сохраняет массив товаров каталога.
	 */
	public setItems(items: IProduct[]): void	{
		this.items = [...items];
	}

	/**
	 * Возвращает массив товаров каталога.
	 */
	public getItems(): IProduct[]	{
		return [...this.items];
	}

	/**
	 * Возвращает товар по идентификатору.
	 */
	public getItemById(id: string): IProduct | undefined	{
		return this.items.find((item) => item.id === id);
	}

	/**
	 * Сохраняет выбранный товар.
	 */
	public setSelectedItem(item: IProduct): void	{
		this.selectedItem = item;
	}

	/**
	 * Возвращает выбранный товар.
	 */
	public getSelectedItem(): IProduct | null	{
		return this.selectedItem;
	}

	/**
	 * Очищает каталог.
	 */
	public clear(): void	{
		this.items = [];
		this.selectedItem = null;
	}
}