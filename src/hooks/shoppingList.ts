import { useEffect, useState } from "react";
import { Ingredient, Menu } from "../types/menu";
import { DINNER_MENUS } from "../consts/dinnerMenus";
import { LUNCH_MENUS } from "../consts/lunchMenus";
import { shuffleArray } from "../utils/shuffleArray";
import {
  getFoodCount,
  getWeeklyDinnerMenu,
  getWeeklyLunchMenu,
  setWeeklyDinnerMenu,
  setWeeklyLunchMenu,
} from "../utils/localStorage";

export const useShoppingList = () => {
  const [shoppingList, setShoppingList] = useState<Ingredient[]>([]); // 変更を反映するための布石
  const [lunchMenus, setLunchMenus] = useState<string[]>([]);
  const [dinnerMenus, setDinnerMenus] = useState<string[]>([]);

  useEffect(() => {
    const lunchNames = getWeeklyLunchMenu();
    const dinnerNames = getWeeklyDinnerMenu();
    setLunchMenuFromStorage(lunchNames);
    setDinnerMenuFromStorage(dinnerNames);
    updateShoppingList(
      getMenuIngredients(lunchNames),
      getMenuIngredients(dinnerNames)
    );
  }, []);

  const setLunchMenuFromStorage = (menuNames: string[]) => {
    if (menuNames.length) {
      setLunchMenus(menuNames);
    } else {
      const randomMenus = getRandomMenusIngredients(LUNCH_MENUS).map(
        (v) => v.name
      );
      setLunchMenus(randomMenus);
    }
  };

  const setDinnerMenuFromStorage = (menuNames: string[]) => {
    if (menuNames.length) {
      setDinnerMenus(menuNames);
    } else {
      const randomMenus = getRandomMenusIngredients(DINNER_MENUS).map(
        (v) => v.name
      );
      setDinnerMenus(randomMenus);
    }
  };

  const shuffleMenusToStorage = () => {
    const newLunchIngredients = getRandomMenusIngredients(LUNCH_MENUS);
    const newDinnerIngredients = getRandomMenusIngredients(DINNER_MENUS);
    const newLunchMenus = newLunchIngredients.map((v) => v.name);
    const newDinnerMenus = newDinnerIngredients.map((v) => v.name);
    setLunchMenus(newLunchMenus);
    setDinnerMenus(newDinnerMenus);
    setWeeklyLunchMenu(newLunchMenus);
    setWeeklyDinnerMenu(newDinnerMenus);
    updateShoppingList(newLunchIngredients, newDinnerIngredients);
  };

  const getRandomMenusIngredients = (menu: Menu[]): Menu[] => {
    return shuffleArray(menu).splice(0, 5);
  };

  const getMenuIngredients = (dishes: string[]): Menu[] => {
    const menus = [...LUNCH_MENUS, ...DINNER_MENUS];
    return dishes.map((name) => ({
      name,
      ingredients: menus.find((v) => v.name === name)?.ingredients ?? [],
    }));
  };

  const updateShoppingList = (
    lunchIngredients: Menu[],
    dinnerIngredients: Menu[]
  ) => {
    // コンポーネント初期化時に実行される
    const neededIngredients: Ingredient[] = getNeededIngredient([
      ...lunchIngredients,
      ...dinnerIngredients, //スプレッド演算子で昼夜まとめた配列にした
    ]);
    //ショッピングリストに足りない食材を計算して返す
    const shoppingList = neededIngredients
      .map((v) => {
        const currentCount = getFoodCount(v.name);
        const neededCount = v.count - currentCount;
        if (neededCount <= 0) {
          return;
        } else {
          return { name: v.name, count: neededCount };
        }
      })
      .filter((v) => v) as Ingredient[];
    // 値を更新
    setShoppingList(shoppingList);
  };

  // メニューを作るのに必要な食材を返す
  const getNeededIngredient = (menus: Menu[]): Ingredient[] => {
    const ingredients = [];
    for (const menu of menus) {
      for (const ingredient of menu.ingredients) {
        const targetIndex = ingredients.findIndex(
          (v) => v.name === ingredient.name
        );
        if (targetIndex === -1) {
          ingredients.push({ ...ingredient });
        } else {
          ingredients[targetIndex].count += ingredient.count;
        }
      }
    }
    return ingredients;
  };

  return {
    shoppingList,
    setShoppingList,
    lunchMenus,
    dinnerMenus,
    shuffleMenusToStorage,
  };
};
