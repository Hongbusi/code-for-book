const book = {
  title: 'JavaScript 高级程序设计',
  authors: ['Nicholas C. Zakas', 'Matt Frisbie'],
  edition: 4,
  year: 2017
}

const jsonText1 = JSON.stringify(book, ['title', 'edition'])
console.log(jsonText1)

const jsonText2 = JSON.stringify(book, (key, value) => {
  switch (key) {
    case 'authors':
      return value.join(', ')
    case 'year':
      return 2022
    case 'edition':
      return undefined
    default:
      return value
  }
})

console.log(jsonText2)
