const book = {
  title: 'JavaScript 高级程序设计',
  authors: ['Nicholas C. Zakas', 'Matt Frisbie'],
  edition: 4,
  year: 2017,
  toJSON() {
    return {
      title: this.title
    }
  }
}

const jsonText = JSON.stringify(book, (key, value) => {
  console.log(key, value)
  return value
}, '----') // "JavaScript 高级程序设计"
console.log(jsonText)
