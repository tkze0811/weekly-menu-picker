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
    setLunchMenuFromStorage();
    setDinnerMenuFromStorage();
    updateShoppingList();
  }, []);

  const setLunchMenuFromStorage = () => {
    const menus = getWeeklyLunchMenu();
    if (menus.length) setLunchMenus(menus);
  };

  const setDinnerMenuFromStorage = () => {
    const menus = getWeeklyDinnerMenu();
    if (menus.length) setDinnerMenus(menus);
  };

  const shuffleMenusToStorage = () => {
    const newLunchMenus = getRandomMenusOfWeek(LUNCH_MENUS);
    const newDinnerMenus = getRandomMenusOfWeek(DINNER_MENUS);
    setLunchMenus(newLunchMenus);
    setDinnerMenus(newDinnerMenus);
    setWeeklyLunchMenu(newLunchMenus);
    setWeeklyDinnerMenu(newDinnerMenus);
  };

  const getRandomMenusOfWeek = (menu: Menu[]): string[] => {
    return shuffleArray(menu)
      .splice(0, 5)
      .map((v) => v.name);
  };

  const updateShoppingList = () => {
    const lunchIngredients = shuffleArray(LUNCH_MENUS).splice(0, 5);
    const dinnerIngredients = shuffleArray(DINNER_MENUS).splice(0, 5);
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
