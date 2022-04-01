/*
 * 組み込み型関数検証
 */

interface Shop {
  name: string;
  location: string;
  color?: string;
}

/* ------------------------------------------------------------------------------------

・Partial                 | ☆☆☆☆  | 実装者向け
・Required                | ☆☆☆☆  | 実装者向け
・Readonly                | ☆☆☆☆☆ | 実装者向け
・Pick                    | ☆☆☆☆☆ | 実装者向け
・Omit                    | ☆☆☆☆☆ | 実装者向け
・Record                  | ☆☆☆   | 実装者向け
・Exclude                 | ☆☆☆☆  | 実装者向け
・Extract                 | ☆☆☆☆  | 実装者向け
・NonNullable             | ☆☆☆☆  | 実装者向け
・Parameters              | ☆☆☆☆  | レビュアー向け?
・ConstructorParameters   | ☆☆☆☆  | レビュアー向け?
・ReturnType              | ☆☆☆☆☆ | レビュアー向け?
・InstanceType            | ☆     | レビュアー向け?
・ThisType                | ☆☆☆☆☆ | 実装者向け

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
