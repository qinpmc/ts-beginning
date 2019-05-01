declare function create(o: object | null): void;

create({ prop: 0 }); // OK
// create(42); // Error


let input = [1, 2];
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f(input);