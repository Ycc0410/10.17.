export class Rational {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero");
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }

    public normalize(): Rational {
        const gcd = this.gcd(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }

    private gcd(a: number, b: number): number {
        return b === 0 ? Math.abs(a) : this.gcd(b, a % b);
    }

    public static parseRational(input: string | string[], denChars?: string[]): Rational {
        if (typeof input === 'string') {
            const [numerator, denominator] = input.split("/").map(Number);
            return new Rational(numerator, denominator);
        } else {
            const numerator = Number(input.join(''));
            const denominator = Number(denChars!.join(''));
            return new Rational(numerator, denominator);
        }
    }

    public equals(r: Rational): boolean {
        return this.numerator === r.numerator && this.denominator === r.denominator;
    }

    public toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }

    public isWhole(): boolean {
        return this.denominator === 1;
    }

    public isDecimal(): boolean {
        return this.denominator !== 1;
    }
}

