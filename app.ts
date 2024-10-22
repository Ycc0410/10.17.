import { Rational } from "./Rational"; // 确保路径正确

const main = (): void => {
    const R1: Rational = new Rational(6, 4);
    const R2: Rational = R1.normalize();
    const R3: Rational = new Rational(12, 4);
    const R4: Rational = Rational.parseRational(["1", "3"], ["4", "1"]);
    const R5: Rational = Rational.parseRational("43/23"); // 使用新的解析方法

    // 打印对象
    console.log(`R1: ${R1.toString()}`);
    console.log(`R2: ${R2.toString()}`);
    console.log(`R3: ${R3.toString()}`);
    console.log(`R4: ${R4.toString()}`);
    console.log(`R5: ${R5.toString()}`);
    console.log();

    // 检测相等
    console.log(`R1 equals R2: ${R1.equals(R2)}`);

    // 检测是否是整数或小数
    console.log(`R1 is whole: ${R1.isWhole()}`);
    console.log(`R1 is decimal: ${R1.isDecimal()}`);
};

main();

