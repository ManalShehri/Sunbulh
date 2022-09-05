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
        'c2',
        'Rest',
        'image',
        'simpleText',
        'details',
        'aboutCompany'
        )

];