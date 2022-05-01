const book = {
  title: 'JavaScript 高级程序设计',
  authors: ['Nicholas C. Zakas', 'Matt Frisbie'],
  edition: 4,
  year: 2017,
  releaseDate: new Date()
}

const jsonText = JSON.stringify(book)
const bookCopy = JSON.parse(jsonText, (key, value) => key === 'releaseDate' ? new Date(value) : value)
console.log(bookCopy.releaseDate.getFullYear()) // 2022
