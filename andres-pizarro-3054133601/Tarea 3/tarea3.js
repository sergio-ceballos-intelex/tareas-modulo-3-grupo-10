function generateRange(start, end) {
    return Array.from({length: end - start + 1 }, (_, i) => start + i);
}

const numbers = generateRange(1, 50);

console.log(numbers);