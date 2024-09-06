function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > value) {
          filteredNumbers.push(numbers[i]);
      }
  }
  return filteredNumbers;
}

// Перевірка роботи функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([10, 20, 30, 40, 50], 25)); // [30, 40, 50]
console.log(filterArray([8, 12, 3, 7, 5], 7)); // [8, 12]
console.log(filterArray([100, 200, 300], 150)); // [200, 300]
