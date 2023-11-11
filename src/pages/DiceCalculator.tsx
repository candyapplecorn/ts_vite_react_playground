import { PageInterface } from "./interface";
import styles from "./dice-calculator.module.less";

type DiceCalculatorProps = object;
const NUMERICAL_SYMBOLS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const pageInterface: PageInterface<DiceCalculatorProps> = {
  component: DiceCalculator,
  title: "Dice Calculator",
};

function countDiceSymbols(numbers: number[]): Map<number, number> {
  const symbolCounts = new Map<number, number>();

  for (const number of numbers) {
    let current = number;
    while (current > 0) {
      const digit = current % 10;
      current = Math.floor(current / 10);

      const currentCount = symbolCounts.get(digit) || 0;
      symbolCounts.set(digit, currentCount + 1);
    }
  }

  return symbolCounts;
}

function getDiceSides(sides): number[] {
  return [...new Array(sides)].map((_, index) => index + 1);
}

export default function DiceCalculator() {
  const d4 = getDiceSides(4);
  const d6 = getDiceSides(6);
  const d8 = getDiceSides(8);
  const d10 = getDiceSides(10);
  const d12 = getDiceSides(12);
  const d20 = getDiceSides(20);

  const symbolCounts = {
    d4: countDiceSymbols(d4),
    d6: countDiceSymbols(d6),
    d8: countDiceSymbols(d8),
    d10: countDiceSymbols(d10),
    d12: countDiceSymbols(d12),
    d20: countDiceSymbols(d20),
  };

  return (
    <section className={styles.diceCalculator}>
      <table>
        <thead>
          <tr>
            <th>Dice</th>
            <th colSpan={10}>Occurrence of Symbol</th>
          </tr>
          <tr>
            <th></th>
            {NUMERICAL_SYMBOLS.map((digit) => (
              <th key={digit}>{digit}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(symbolCounts).map(
            ([nameOfDice, symbolMap]: [string, Map<number, number>]) => (
              <tr key={nameOfDice}>
                <td>{nameOfDice}</td>
                {NUMERICAL_SYMBOLS.map((digit) => (
                  <td key={digit}>{symbolMap.get(digit) || 0}</td>
                ))}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </section>
  );
}
