export type Ingredient = {
  name: string;
  count: number;
};
export type Menu = {
  name: string;
  ingredients: Ingredient[];
};
