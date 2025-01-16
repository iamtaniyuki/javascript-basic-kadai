// 変数の宣言
let bodyWeight; // 体重 (kg)
let height; // 身長 (m)
let bodyMassIndex;// BMI

// 値の代入
bodyWeight = 68; // 体重を 68kg に設定
height = 1.7; // 身長を 1.7m に設定

// BMIを計算　[体重(kg)]÷[身長(m)×身長(m)]
bodymassIndex = bodyWeight / (height * height)

// コンソールへの出力
console.log(bodymassIndex);