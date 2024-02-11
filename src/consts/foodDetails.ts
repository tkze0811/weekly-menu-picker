import { Food, FoodName } from "../types/food";

export const FOOD_DETAILS: Details[] = [
  { name: "卵", explanation: "Mサイズ×1" },
  { name: "牛乳", explanation: "100ml×1" },
  { name: "バター", explanation: "10g×1" },
  { name: "チーズ", explanation: "スライスチーズ×1枚" },
  { name: "油", explanation: "100ml×1" },
  { name: "豚肉", explanation: "100g×1" },
  { name: "鶏もも肉", explanation: "100g×1" },
  { name: "鶏むね肉", explanation: "1枚×1" },
  { name: "ひき肉", explanation: "100g×1" },
  { name: "豚ロース", explanation: "一枚×1" },
  { name: "玉ねぎ", explanation: "1玉×1" },
  { name: "にんにく", explanation: "ひとかけ×1" },
  { name: "生姜", explanation: "ひとかけ×1" },
  { name: "じゃがいも", explanation: "1個×1" },
  { name: "人参", explanation: "1本×1" },
  { name: "トマト", explanation: "1個×1" },
  { name: "キャベツ", explanation: "2枚×1" },
  { name: "パン", explanation: "1個×1" },
  { name: "パスタ", explanation: "1人前×1" },
  { name: "ラーメン", explanation: "1人前×1" },
  { name: "うどん", explanation: "1人前×1" },
  { name: "納豆", explanation: "1パック×1" },
];

export type Details = {
  name: FoodName;
  explanation: string;
};
