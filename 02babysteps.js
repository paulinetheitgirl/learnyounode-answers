if (process.argv.length < 3) {
    console.log(0);
} else {
    const numbers = process.argv.slice(2);
    const initialValue = 0;
    const sumWithInitial = numbers.reduce(
        (accumulator, currentValue) => accumulator + (1 * currentValue),
        initialValue
    );
    console.log(sumWithInitial);
}