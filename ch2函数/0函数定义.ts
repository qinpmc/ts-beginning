function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}

function getNumber({ first }: { first: number }): number {
  return first;
}

const total = add({ first: 1, second: 2 });
const num = getNumber({ first: 3 });

console.log(total);
console.log(num);

function multiply(x: number, y: number): number {
  return x * y;
}
console.log(multiply(9, 9));
