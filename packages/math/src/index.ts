export const add = (x: number, y: number) => {
  return x + y;
}

export const multiply = (x: number, y: number) => {
  console.log("multiply called");
  return x * y;
}

export const sum = (arr: number[]) : number => {
  console.log("sum called");
  return arr.reduce((prev, curr) => prev + curr, 0);
}