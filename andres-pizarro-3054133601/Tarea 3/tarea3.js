function generateRange(start, end) {
    return Array.from({length: end - start + 1 }, (_, i) => start + i);
}

let numbers = generateRange(1, 50);
console.log(numbers);

numbers = generateRange(1, 2000);
console.log(numbers);