import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.find((dish: Dish) => dish.id == id))
      .pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.find((dish: Dish) => dish.featured))
      .pipe(delay(2000));
  }

  getDishIds(): Observable<string[]> {
    return of(DISHES.map(dish => dish.id));
  }
}
