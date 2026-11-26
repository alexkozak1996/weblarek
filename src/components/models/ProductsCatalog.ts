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
	setItems(items: IProduct[]): void	{
		this.items = [...items];
	}

	/**
	 * Возвращает массив товаров каталога.
	 */
	getItems(): IProduct[]	{
		return [...this.items];
	}

	/**
	 * Возвращает товар по идентификатору.
	 */
	getItemById(id: string): IProduct | undefined	{
		return this.items.find((item) => item.id === id);
	}

	/**
	 * Сохраняет выбранный товар.
	 */
	setSelectedItem(item: IProduct): void	{
		this.selectedItem = item;
	}

	/**
	 * Возвращает выбранный товар.
	 */
	getSelectedItem(): IProduct | null	{
		return this.selectedItem;
	}
}