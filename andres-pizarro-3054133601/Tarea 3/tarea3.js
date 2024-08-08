function generateRange(start, end) {
    return Array.from({length: end - start + 1 }, (_, i) => start + i);
}

function filterNumbersStartingWith2(numbers) {
    return numbers.filter(num => num.toString().startsWith('2'));
}

let numbers = generateRange(1, 50);
console.log(numbers);

numbers = generateRange(1, 2000);
console.log(numbers);



numbers = generateRange(1, 2000);
const filteredNumbers = filterNumbersStartingWith2(numbers);

console.log(filteredNumbers);