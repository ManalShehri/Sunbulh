import Category from '../models/Category';
import Offer from '../models/Offer';



export const CATEGORIES = [
  new Category('c1', 'Online', 'laptop-outline'),
  new Category('c2', 'Restaurants', 'restaurant'),
  new Category('c3', 'Cafe', 'cafe'),
  new Category('c4', 'Fitness', 'fitness'),
  new Category('c5', 'Cars', 'car'),
  new Category('c6', 'House', 'home'),
  new Category('c7', 'Travel', 'airplane'),
  new Category('c1', 'Online', 'laptop-outline'),
  new Category('c2', 'Restaurants', 'restaurant'),
  new Category('c3', 'Cafe', 'cafe'),
  new Category('c4', 'Fitness', 'fitness'),
  new Category('c5', 'Cars', 'car'),
  new Category('c6', 'House', 'home'),
  new Category('c7', 'Travel', 'airplane'),
];

export const OFFERS = [
  
  new Offer(
    'o1',
    ['c2'],
    'Spaghetti',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    ],
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  ),

  new Offer(
    'o2',
    ['c2'],
    'Toast Hawaii',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    ],
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  ),
  new Offer(
    'o3',
    ['c2'],
    'Spaghetti',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    ],
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  ),
  new Offer(
    'o4',
    ['c2'],
    'Pancakes',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    ],
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  ),
  new Offer(
    'o5',
    ['c2'],
    'Delicious Orange Mousse',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    ],
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  ),
  new Offer(
    'o6',
    ['c2'],
    'Pancakes',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    ],
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  ),
  new Offer(
    'o7',
    ['c2'],
    'Salad with Smoked Salmon',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    ],
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  ),
  new Offer(
    'o8',
    ['c2'],
    'Wiener Schnitzel',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    ],
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
  ),

];
