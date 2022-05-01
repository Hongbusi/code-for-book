const book = {
  title: 'JavaScript 高级程序设计',
  authors: ['Nicholas C. Zakas', 'Matt Frisbie'],
  edition: 4,
  year: 2017
}

const jsonText = JSON.stringify(book, ['title', 'edition'])
console.log(jsonText) // {"title":"JavaScript 高级程序设计","edition":4}
