import { add, multiply } from "@anir-ln/math";
import { greet, formatResult } from "@anir-ln/utils";

async function main() {
  console.log(greet("Anir"));

  console.log("Waiting 1 second...");
  const result = multiply(add(100, 50), 10);

  // Ensure the delay resolves so execution continues.
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Done!");
  const formatted = formatResult('addition', result);
  console.log(formatted);
}

main().catch((err) => {
  console.error("Crash in main:", err);
  process.exit(1);
});
