import { FoodName } from "./food";

export type Ingredient = {
  name: FoodName;
  count: number;
};
export type Menu = {
  name: string;
  ingredients: Ingredient[];
  src?: string;
};
