/*
 * 組み込み型関数検証
 * https://www.typescriptlang.org/play?#code/PQKgUABCGCK+j+DIHvi6Gj1QRamAdTQOJaB4oyJhhgCWAdgC4CmATgGYCGAxhRAMoAWA9gA4QDekEEnQC2FAFwQAzmSqkA5gG4BAGw4M6ZIhxITpskooEMOqqgH5dM+UoC+hUBAC0zl67fuPnr95+-3hQG+GAAU6Kk06ZWgIaJjYuIAfCEAwMhSk6MTAfO1AUYjAUADARBVARQYwAIAlCgBHAFciKgoAEyi4pvTk1Jbs-KLSijo67WUAT0bmhNa2zNzC4qCiBgBrYZHmxNSUiAnO4oB5YSIyRaXR1bSNqe7jKjrDkZW19smugFEADwZlSrqKA8Pbu9On54yRj7a5HNrrCAdM4AOW00MqymUdAARsovqDfmkIVCuiEqCIKJQqJJvk1MS1ADcMgGWGQCnDIAihkAPwyFMzFADC2j0lQYZA4VDxBKJkhi5Ih1PpTIKLO6ZEqVBIABUBlx0RixmtEmLGczigBJEjSOgkJiK5WqrHCiCaiVS+VsIiSE0q0EQ47Yh6EaKAIeVAMABgHDTQB0zgI2GQyFxJGJgMBVHIAHRcNRzOgxrTAABWdGA8ekkmAZCVFEkDFkXDIjmR1WUmhIjjzyscNEqRs0HII0WDofDkYA7j2YzReQwiEnjMJgKiOHJgAAGKcAJgAzAB2Rcx4PCZT2YBOPw73d7-eefD2cBQCB48Ib0+SUhMCAAN1nMYAjAA-PAQQBZ2oBK-wkgAtFQBmDIAdgzIIA6wyALcMgCLDIAYwyAMUMgBJDIAVQwgYA7QyAOcMgBTDIA1wyAB4MgCQmoA28bvoAFK6ACgJEiAJ5OgDWDIAuAaACIMgAmDIA0gyAFYMtGAEAMgCrDIAlQwMoABwyAKaKgDZSoAJAqUYAO-qABoMgD6DIAhuaAG9ygBgSoACTqAYA4k6AC4KgDmDIA-vKAGIMgAWDIxgD4-3gBBgLWzDsNw55DsoEAALxnqEF4ADxWVwAB8ShgJGECPFQVC8j5W7GPqZAQAAMnQXaSNoEjuQ5fDBTEQiiBIABEYEMoAvQyAM8M6UADTJTY3m+VsADSyWhdIkXRbFOisJwXA2REiX8L50SpeIECZTl+VFb5JWbtuB6jWN42uMe75lFUNT1O+15GswD4xgAHG+p7fn+QGgZBsGAUhaFYXBgAmaYA3crEWREBUXRTGsZxPECSJ4nSfJylqVpemGSZUBmRZjXcDN1S1FcjlA3NdRuU1XnDf5gVUFVHLhVFMVxQDXDgyDbXJZ1BIZVleWFTjECqOozYNelgCDKoAu7pEx1ED08YpgZZIcwDKilQUHTW5DclE38wLu5TaeZS9P0AwLTey2Pq+75bRAAHAeB0EwZRtRiyQgxwYAv-GAAVKl0SB+6CACEMgCUVoACmmUaggDECYAmgyANEMuHoIB2SUYAnvqANNegCGDIAugy6aZhD-e5ot9JrAyJSH4tQ9wMPJXDQW+dVyN1Wjwc9KHgzY-TXX4313MxKTGhaBTNP50Nvko-VMZdYl6WAN0MgBrDLlgAlDBSTfpaVW4VYjYUQAAYiIRCDAAss58VNVnW642lPUcYAhQyAPsMgBXDAygB7DAygATDPn0SF+TGWlwNPNKL5A+7CPznVwStfzwvq8d8NguP0--g+Se0AzPMktLfeMsbdA8vIHlIxQAkQzlUooAZX1-yAHsGQAfgz22VvtOAcFAA5RoAWQZABryoAYwYpKAAbTQA6gy0WQHBb8bEEEwUALAqmlABsSoAQv0DYQCfDOAApIAGBVAAAcsBTSgAhBntoAUf1ACBkYAGQZWKAH0rQAvwEuyyO7b2fs2LvkAIcMgAjhgkIAFMJABwfxAHYewA7mXzOjD+cxEoGOjlwAqPUurpQhOlJmvJ0qx18vHBGicka1VRg1dyBjJ4pTxj1Am-ViY2KoCzNmHMuaHxiPTXexd9603CbzXyz9ElP2FtALRZAv63jvPOGMABWP+n4fwQEASAsBkDYHwL2vBE6gA0TTwbgghRCSFkMobQg2CjlEQHUWeWYcwdFByamkxKaSTFmOsSYWx9ityOJ7jVSuqcBm7HCo5dqU9BA+N6oTcJ0RAnBPZu8MJxMoloyprE4qncRpJMuWNFJEAygXDqBk6Wz58kAPlMxMh5U4KAEBjeiFJADNDAyQAkwxEMADrygAEIzwTA22bEAAUZgACU9CGJ6UAMkM7SJCHQwphQAtFEfkAEEMgAI20ABIM9sWS-UDnotO9yI4UHuS5OYFABgcBoOjMxJBKjCGRNQSZfkAoJxCi4uZ7imp3N5KDJK2d1l+O3iTNQRdjkHzOcNbuzje5CvHoDWlYqvHT26owrZMQdkMINUchqT44nnKuVa0aNyXhvA+BQR5P81ovMKYAwRyAACqlFADHcvxQA98piO4YAGIZAAODCQCgd5qB+00sxAoYbAFwUACvx0LkDULoaeUiEhABnDIAaYYEK5WQIBGpgBZkxBZRbSJL0WdI0S8IE3I+l6PZCQKNJAiAUCWiwHktRa7SqsTfFe68t5WMbi3Nu+Vzkqq3P9Ztrb22du7RQO17xPiwgjYlZdDqXLE1nR2+dTAu28goAa9lnLqDJRhr5Gd2g50doPYuzdnwWp2Uco+ig276a7rbXeigh7agGvSgOtem90oXuPtOptN690-r-Uu14K6KAAEFEQbvg1undUHv0LqPQavQ8gwMP2tURnctrAT4gbVeKWzr1pyzdfKD13q-WBpDaGwBMa41hojVGqgybU3pvoXmgtRbAArDIAYYZAD1DHSUTIEy0VqraeJRqja1oc+DosqlVr0tug9h2odbyNkDXcwV9ZHgTbuiF+-dv7F1FWiHhgwYAYaadvTpuD9ayDPtQ25szEALMweswIQDi9B0gYc0oJz2n71Hr08CZDL6-Ime5N53zLmbOCA5VyhGPLiPZZ8Dctd8JEQojRE6laNHNp0ZAeyxE+lGyfBoKQeocF0GACiGE6tEpJEJTfQqryhACMUYATu0yFwWqbbat9XKzUAwJpQAsomAHQlEBgBABh66dM6DtmKAEsGNTW4cs7Y8Dc-kohBQleybLcrEgMCAMAoAVH1nZEMAP0MIFML6Twf+QAvUaAC-FehGBrvoDgg9p7L3AC7SoAaSNKLfhe4AeQZg32x0UnCA-YOCJRhaQT4zwJCnoy2Yu8EROaWH0HIeFEg7wcCIKDDyfAhr-QRwdoUjkDuEmoJIFyFlmXw44BwGGcOEeslUOuxyMKYyC9CHIcMbOOA08J-eEnZOKdKG57zigMLzU9UAN4MgAlBnSvCy1u2dfOBuc2zk3JeT06O5R7+WTnm0YkJdv5uVACdDBvQAlwzibuz94Cf3Htfedjdj3AP-wg7B1+SH0Pq0m8Z4BW3Dvnd3cABJOsOXF93Z4lN4dBJBCn4NspGVAuTduRyQVH6P0vUCxzj7qdmCcU7AJTvRifxehBELTnzWec-G-r4dxnzP8ys9r1l3XOubllBlHKR0JXHxlf-oUi78pAKAG4jZrwl3ddczVdb7Sb5-AXj73OQhJ3LQivvzyQTUNVcEl+Xhy5PD-cEvqIMLlKRWEllAqPRYMH-D-zJ35UrPt9kF3wSXvfedsbk9QDQloR8zdMkx9XVrdp9I8ncXdAI18F9OtRtl8JBABlBmDVonth+iPDADh1typFzWTyRDTySkzzCmzyNyoBhXhUr2r1NAINzU0ltkSmALIENGNHfxZxZUYP-wAOyxuVtHtDAOgEWggJjHnCgIgDIDtEkHd3lH0gdjQP0kEU0lQXtnIkACjrZiZAGFGFNAdATSKBViRFVA6Q2QwCWhOCQAODNAAuT0ABC3SiQAGQjdJlDVD1CdFSAiR6BbxEMyC1kZ5y9bBiByBqAfDmAAAhfwtgCgREDgGgonaXYI3yDgZEVMYCKBCI7hZrBbVI1MQAUMVNJAIZD7QMjEN9I7DHDABwYw-AdjwJcTyIkCiIADIIAhCHR39ENydlkgxYjVAaD-DyDYo0QYxowYUAADAACT6I4DMQABJeASjJBr8KAbBxitcBBohfJqB4Y2iWAFx5wABOCQIIQKZUMIcOAAchIA4DIBeHtDIEkEuIgD6ALEEFuIgAoGeAeIgG0GkL0UuMQ0uJjE2IgGqhMAoFGInAmOmLiPmMWNkOrluPuOzDWI2OiBsCKiGjyNXBmJoKUCAA
 */

interface Shop {
  name: string;
  location: string;
  color?: string;
}

/* ------------------------------------------------------------------------------------

・Partial*                | ☆☆☆☆  | 実装者向け
・Required*               | ☆☆☆☆  | 実装者向け
・Readonly*               | ☆☆☆☆☆ | 実装者向け
・Pick*                   | ☆☆☆☆☆ | 実装者向け
・Omit*                   | ☆☆☆☆☆ | 実装者向け
・Record                  | ☆☆☆   | 実装者向け
・Exclude*                | ☆☆☆☆  | 実装者向け
・Extract*                | ☆☆☆☆  | 実装者向け
・NonNullable*            | ☆☆☆☆  | 実装者向け
・Parameters*             | ☆☆☆☆  | レビュアー向け?
・ConstructorParameters   | ☆☆☆☆  | レビュアー向け?
・ReturnType*             | ☆☆☆☆☆ | レビュアー向け?
・InstanceType            | ☆     | レビュアー向け?
・ThisType*               | ☆☆☆☆☆ | 実装者向け

  参考文献
  https://log.pocka.io/ja/posts/typescript-builtin-type-functions/
  https://www.forcia.com/blog/002377.html

// ------------------------------------------------------------------------------------*/

/*
 * Partial
 * since v2.1~
 * 定義: 全ての型プロパティをオプショナルへ変換
 * 用途: 特に思いつかない。フォーム入力値に応じた条件分岐の片側で使うとか？
 */

type ShopPartial = Partial<Shop>;

// Error
// const Lawson: Shop = {
//   name: "ローソン",
// };

// OK
// const Lawson: ShopPartial = {
//   name: "ローソン",
// };

// ------------------------------------------------------------------------------------

/*
 * Required
 * since v2.8~
 * 定義: 全ての型プロパティのオプショナルを除去
 * 用途: 特に思いつかない。フォーム入力値に応じた条件分岐の片側で使うとか？
 */

type ShopRequired = Required<Shop>;

// Error
// const Lawson: ShopRequired = {
//   name: "ローソン",
//   location: "品川",
//   //   color: "skyblue",
// };

// ------------------------------------------------------------------------------------

/*
 * Readonly
 * since v2.1~
 * 定義: 全ての型プロパティにreadonlyを追加
 * 用途: 定数や権限に関連する変数の実装に役立ちそう
 */

type ShopReadonly = Readonly<Shop>;

// Error
// const Lawson: ShopReadonly = {
//   name: "ローソン",
//   location: "品川",
// };
// Lawson.name = "セブンイレブン";

// OK
// const FamilyMart: Shop = {
//   name: "ファミリーマート",
//   location: "品川",
// };
// FamilyMart.name = "ファミマ";

// ------------------------------------------------------------------------------------

/*
 * Pick
 * since v2.1~
 * 定義: 型TからKに当てはまるプロパティのみを抜き取った新しい型を定義。プロパティ名で制御
 * 用途: 100%同一の型である必要がない機能の実装に役立ちそう。
 * メモ: ↔︎ Omit
 */

type ShopPick = Pick<Shop, "name" | "color">;

// Error
// const Lawson: ShopPick = {
//   name: "ローソン",
//   color: "skyblue",
//   //   location: "品川",
// };

// ------------------------------------------------------------------------------------

/*
 * Omit
 * since v3.5~
 * 定義: 型TからKに当てはまるプロパティを除外した新しい型を定義。プロパティ名で制御
 * 用途:
 * メモ: ↔︎ Pick
 */

type ShopOmit = Omit<Shop, "color">;

// Error
// const Lawson: ShopOmit = {
//   name: "ローソン",
//   color: "skyblue",
//   location: "品川",
// };

// ------------------------------------------------------------------------------------

/*
 * Record
 * since v2.1~
 * 定義: 型TなプロパティKを持つレコード型を作成します。(?)
 * 用途: いつ使うん
 * メモ: オプショナル設定も消える?
 */

type ShopRecord = Record<keyof Shop, number>;

// Error
// const Lawson: ShopRecord = {
//   name: "ローソン",
//   location: "品川",
// };

// OK
// const Lawson: ShopRecord = {
//   name: 10,
//     color: 1,
//   location: 1,
// };

// ------------------------------------------------------------------------------------

/*
 * Exclude
 * since v2.8~
 * 定義: 型Tが型Uに代入可能であればneverそうでなければ型Tを返す。型で制御
 * 用途: ユニオン型の除外操作に使える
 * メモ: ↔︎ Extract
 */

type ConvenienceStore = "ローソン" | "ファミリーマート" | "セブンイレブン";

// OK
// type ConvenienceStoreExcludeNone = Exclude<
//   ConvenienceStore,
//   number
// >;
// type ConvenienceStoreExcludePartial = Exclude<
//   ConvenienceStore,
//   "ファミリーマート"
// >;
// type ConvenienceStoreExcludeAll = Exclude<
//   ConvenienceStore,
//   string
// >;

// ------------------------------------------------------------------------------------

/*
 * Extract
 * since v2.8~
 * 定義: 型Tが型Uに代入可能であれば型Tそうでなければneverを返す。型で制御
 * 用途: ユニオン型のピックアップ操作に使える
 * メモ: ↔︎ Exclude
 */

// OK
type ConvenienceStoreExtractNone = Extract<
  ConvenienceStore,
  string
>;
type ConvenienceStoreExtractPartial = Extract<
  ConvenienceStore,
  "ファミリーマート"
>;
type ConvenienceStoreExtractAll = Extract<
  ConvenienceStore,
  number
>;

// ------------------------------------------------------------------------------------

/*
 * NonNullable
 * since v2.8~
 * 定義: 型Tからnullとundefinedを取り除いた型を返す
 * 用途: null許容プロパティを外す
 * メモ: filter関数で配列から、nullを除去するなど
 */

// ------------------------------------------------------------------------------------

/*
 * Parameters
 * since v3.1~
 * 定義: 関数型Tの引数の型をタプルとして抽出
 * 用途: 関数の引数をタプルとして勝手に定義してくれる
 */

const foo = (index: number, value: string): void => {};
type fooParams = Parameters<typeof foo>;
const fooClone = (...args: fooParams): void => {};
fooClone(1, "ほげ");

// ------------------------------------------------------------------------------------

/*
 * ConstructorParameters
 * since v3.1~
 * 定義: 型Tのコンストラクタの引数の型をタプル
 * 用途: 関数の引数をタプルとして勝手に定義してくれる
 * メモ: Parametersのコンストラクタ版
 */

const Foo = class {
  constructor(index: number, value: string) {}
};
type FooParams = ConstructorParameters<typeof Foo>;

// ------------------------------------------------------------------------------------

/*
 * ReturnType
 * since v2.8~
 * 定義: 関数型Tの戻り値の型を返す
 * 用途: 関数の返り値の型
 */

const getShopName = (shop: Shop): string => shop.name;
type ShopReturnType = ReturnType<typeof getShopName>;

// ------------------------------------------------------------------------------------

/*
 * InstanceType
 * since v2.8~
 * 定義: 型Tのコンストラクタの返り値の型を返す
 * 用途: これいる？
 */

const コンビニ = class {
  constructor() {}
};
type コンビニです = InstanceType<typeof コンビニ>;

// ------------------------------------------------------------------------------------

/*
 * ThisType
 * since v2.3~
 * 定義: thisの型をTとすることができる特殊な型((型関数ではない)
 * 用途: thisの制御を明示的に行うことができる
 */

interface A {
  name: string;
}
interface B {
  hello(): void;
}
// objの型はBであり、obj内でのthisの型はAと明示的に指定する
const obj: B & ThisType<A> = {
  hello() {
    console.log(`Hello, ${this.name}`);
    // error TS2339: Property 'notExists' does not exist on type 'A'.
    console.log(`Hello, ${this.notExists}`);
  },
};
obj.hello();
