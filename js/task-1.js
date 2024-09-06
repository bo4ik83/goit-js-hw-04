function slugify(title) {
  // Перетворюємо заголовок на нижній регістр, розбиваємо на слова та об'єднуємо з тире
  return title.toLowerCase().split(' ').join('-');
}

// Перевірка роботи функції
console.log(slugify("JavaScript Is Awesome")); // "javascript-is-awesome"
console.log(slugify("Learning to Code")); // "learning-to-code"
console.log(slugify("Hello World")); // "hello-world"
console.log(slugify("Make Your Own Slug")); // "make-your-own-slug"
