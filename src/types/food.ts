export type FoodName =
  | "卵"
  | "牛乳"
  | "バター"
  | "チーズ"
  | "油"
  | "豚肉"
  | "鶏肉"
  | "ひき肉"
  | "豚ロース"
  | "玉ねぎ"
  | "じゃがいも"
  | "人参"
  | "トマト"
  | "パン"
  | "パスタ"
  | "ラーメン"
  | "うどん"
  | "納豆";
export type Food = {
  name: FoodName;
  src: string;
};
