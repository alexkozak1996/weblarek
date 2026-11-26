import './scss/styles.scss';

import { Api } from './components/base/Api';

import { ProductsCatalog } from './components/models/ProductsCatalog';
import { Basket } from './components/models/Basket';
import { Buyer } from './components/models/Buyer';
import { apiProducts } from "./utils/data";

import { ApiServer } from './components/ApiServer';

import { API_URL } from './utils/constants';

/**
 * Модели приложения.
 */
const productsCatalog = new ProductsCatalog();
const basket = new Basket();
const buyer = new Buyer();

/**
 * Проверка каталога
 */
productsCatalog.setItems(apiProducts.items);
console.log("Массив товаров из каталога", productsCatalog.getItems());
console.log("Поиск товара по id", productsCatalog.getItemById("c101ab44-ed99-4a54-990d-47aa2bb4e7d9"),
);

const productTest = apiProducts.items[1];
const productTestTwo = apiProducts.items[0];

console.log("Возвращаем выбранный товар", productsCatalog.getSelectedItem());

productsCatalog.setSelectedItem(productTest);

console.log("Сохраняем товар, получаем новое значение");
console.log("Возвращаем выбранный товар", productsCatalog.getSelectedItem());

/**
 * Проверка корзины
 */
console.log("Проверяем товары в корзине методом getItems", basket.getItems());
console.log("Добавляем товары в корзину методом addItem");
basket.addItem(productTest);
basket.addItem(productTestTwo);
console.log("Проверяем добавленные товары в корзине", basket.getItems());
console.log("Удаляем товар методом removeItem");
basket.removeItem(productTest);
console.log("Проверяем метод удаления", basket.getItems());
console.log("Возвращаем удаленный товар методом addItem");
basket.addItem(productTest);
console.log("Проверяем корзину", basket.getItems());
console.log("Проверяем метод очистки корзины clear");
basket.clear();
console.log("Проверяем корзину", basket.getItems());
console.log("Добавляем товары в корзину");
basket.addItem(productTest);
basket.addItem(productTestTwo);
console.log("Общая сумма", basket.getTotal());
console.log("Количество товаров в корзине", basket.getCount());
console.log("Проверяем наличие товара в корзине", basket.hasItem(productTest.id));

/**
 * Проверка покупателя
 */
buyer.setData( {
  payment: "cash",
  email: "qwerty@qwwerty.com",
  phone: "+7 999 999 99 99",
  address: "г. Москва",
});

console.log("Информация о покупателе", buyer.getData());
console.log("Проверяем метод clear");
buyer.clear();
console.log("Выводим пустые данные о покупателе", buyer.getData());
console.log("Проверяем метод validate с пустыми полями", buyer.validate());
console.log("Вводим новые данные покупателя методом setData");
buyer.setData( {
  payment: "card",
  email: "",
  phone: "+7 999 123 45 67",
  address: "г. Санкт-Петербург",
});
console.log("Информация о покупателе", buyer.getData());
console.log("Проверяем метод validate по отдельному ключу", buyer.validate());

/**
 * API-клиент.
 */
const api = new Api(API_URL);
const apiServer = new ApiServer(api);

apiServer
  .getProducts()
  .then((data) => {
    productsCatalog.setItems(data.items);
    console.log("Каталог из сервера", productsCatalog.getItems());
    console.log("Поиск товара по id на сервере", productsCatalog.getItemById("90973ae5-285c-4b6f-a6d0-65d1d760b102"));
  })
  .catch((e) => {
    console.error("Ошибка получения", e);
  })
