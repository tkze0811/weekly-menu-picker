import { FoodName } from "../types/food";

type FoodCount = { name: FoodName; count: number };

/**
 * 第一引数で指定した食材の個数を、第二引数で渡す値に書き換える
 *
 * ex.
 * localStorage内に次のような値が格納されていた時、
 *   '{"foodCounts":[{"name":"牛乳","count":1},{"name":"卵","count":2}]}'
 * setFoodCounts("牛乳", 5) とすることで、localStorageの値が下記のようになる
 *   '{"foodCounts":[{"name":"牛乳","count":5},{"name":"卵","count":2}]}'
 */
export const setFoodCounts = (name: FoodName, count: number) => {
  // localStorageから値を取り出す
  const json = localStorage.getItem("foodCounts");

  if (json === null) {
    const foodCounts = [{ name, count }];
    localStorage.setItem("foodCounts", JSON.stringify(foodCounts));
    return;
  }

  // localStorageはJSONで保存されているので、文字列からオブジェクトに変換
  const foodCounts = JSON.parse(json) as FoodCount[];
  // foodCountsの中からname引数と同名の値を検索して、その位置を取り出す
  const targetIndex = foodCounts.findIndex((v) => v.name === name);

  if (targetIndex === -1) {
    foodCounts.push({ name, count });
  } else {
    foodCounts[targetIndex] = { name, count };
  }

  localStorage.setItem("foodCounts", JSON.stringify(foodCounts));
};

export const getFoodCount = (name: FoodName): number => {
  const json = localStorage.getItem("foodCounts");
  if (json === null) return 0;
  const foodCounts = JSON.parse(json) as FoodCount[];
  const target = foodCounts.find((v) => v.name === name);
  if (!target) {
    return 0;
  } else {
    return target.count;
  }
};
