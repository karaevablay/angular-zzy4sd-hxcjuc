export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  productURL: string;
  imageURL: string;
  rating: string;
}

export const products = [
  {
    id: 1,
    name: 'Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: 799,
    description: 'Отличный смартфон! Отличная камера, мощная батарея .Не пожалела, что купила! Батареи хватает на 2 суток обычного использования, социальные сети, звонки, Ютуб, камера. Если играть, наверное, сядет чуть быстрее. Заряжается за считанные минуты! Звук динамиков отличный, качеством фото просто наслаждаюсь! Большой яркий и сочный дисплей!',
    productURL: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
    imageURL: 'https://resources.cdn-kaspi.kz/medias/sys_master/images/images/h30/hd2/64487157760030/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    rating: '4.8'
  },
  {
    id: 2,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
    price: 699,
    description: 'Смартфон жылдам жұмыс істеп тұр. Экраны үлкен 6.6! Камера, интернет, дыбысы жақсы.',
    productURL: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
    imageURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
    rating: '4.65'
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 13 128Gb черный',
    price: 299,
    description: ' Мощный процессор, быстрая зарядка, ну Айфон есть Айфон!',
    productURL: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
    imageURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    rating: '4.9'
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    price: 299,
    description: 'Маған ұнамады. Өйткені телефонды өзіме емес келіншегіме алып бергем. Өзіме алған болсам ұнаған болар еді.',
    productURL: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
    imageURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h17/h14/31489167425566/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    rating: '4.3'
  },
  {
    id: 5,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
    price: 299,
    description: 'Шикарный телефон, стоит своих денег однозначно. Магазин отличный, консультанты вежливые, заинтересованные, на все вопросы дают четкие ответы. Доставка быстрая)',
    productURL: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    imageURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    rating: '4.5'
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 13 128Gb белый',
    price: 299,
    description: ' Может продержаться без подзарядки 2 дня. И главное кинематографический режим.',
    productURL: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000#!/item',
    imageURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
    rating: '5.0'
  },
  {
    id: 7,
    name: 'Смартфон Apple iPhone 14 128Gb голубой',
    price: 299,
    description: 'Тістелген алма жақсы, ақшаң болып қарызға алмасаң, жақсы, Қарызға алсаң несі жақсы.)',
    productURL: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-goluboi-106363150/?c=750000000#!/item',
    imageURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h41/63073057177630/apple-iphone-14-128gb-goluboj-106363150-1.jpg',
    rating: '4.7'
  },
  {
    id: 8,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ медный',
    price: 299,
    description: 'Цвет приятный.',
    productURL: 'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-mednyi-105772530/?c=750000000#!/item',
    imageURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/hf4/52423971995678/samsung-galaxy-a03-core-2-gb-32-gb-bronzovyj-105772530-1.jpg',
    rating: '4.5'
  },
  {
    id: 9,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ голубой',
    price: 299,
    description: 'Благодаря 6.6-дюймовому экрану Infinity-V на смартфоне Galaxy A13 вы сможете увидеть все, что было скрыто от вашего взгляда. Наслаждайтесь живым четким изображением с технологией FHD+. Galaxy A13 сочетает деликатные цвета и приятную на ощупь текстуру. Благодаря изящным изгибам его удобно держать при работе с экраном. Galaxy A13 оснащен восьмиядерным процессором и оперативной памятью до 4 ГБ для быстрой и эффективной работы. А со встроенной памятью 128 ГБ и картой памяти microSD до 1 ТБ у вас появится еще больше места для хранения. Запечатлейте ценные моменты во всех деталях с основной камерой 50 Мп. Расширьте угол обзора с 5 Мп ультраширокоугольной камерой. 2 Мп камера с датчиком глубины поможет настроить фокус, а 2 Мп макрообъектив — снять всё до мельчайших деталей. Снимайте изумительные селфи с помощью фронтальной камеры 8 Мп на Galaxy A13 и эффекта боке — меньше фона, больше вас! Будьте на шаг впереди с надежным аккумулятором. Делайте что угодно, не беспокоясь о заряде, с аккумулятором 5000 мАч, который способен держать заряд 2 дня.',
    productURL: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-goluboi-104253392/?c=750000000#!/item',
    imageURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/hb5/49613818069022/smartfon-samsung-galaxy-a13-128gb-sm-a135flbkskz-blue-104253392-1.jpg',
    rating: '4.4'
  },
  {
    id: 10,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ зеленый',
    price: 299,
    description: 'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях. Redmi 10C позволяет создавать фотографии профессионального уровня в формате для развлечений. Наслаждайтесь воспоминаниями благодаря камере 50 Мп, которая идеально подходит для съемки незабываемых моментов.   Redmi 10C оснащен невероятным восьмиядерным процессором Snapdragon 680, созданным на основе флагманского техпроцесса 6 нм. Это обеспечивает высокую производительность и энергоэффективность, продлевая время работы Redmi 10C. Redmi 10C оснащен мощным аккумулятором емкостью 5000 мАч, который работает более двух дней, позволяя всегда оставаться на связи.',
    productURL: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-zelenyi-104443164/?c=750000000#!/item',
    imageURL: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hff/51348549861406/xiaomi-redmi-10c-4-gb-128-gb-zelenyi-104443164-1.jpg',
    rating: '4.95'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/