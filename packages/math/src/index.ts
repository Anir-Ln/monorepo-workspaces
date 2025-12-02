export const add = (x: number, y: number) => {
  return x + y;
}

export const multiply = (x: number, y: number) => {
  return x * y;
}

export const sum = (arr: number[]) : number => {
  return arr.reduce((prev, curr) => prev + curr, 0);
}