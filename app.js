const {readFileSync , writeFileSync} = require ("fs");

const content = readFileSync("text.txt",'utf8')
writeFileSync("text.txt",'   Added via write func', {flag:'a'})
console.log(content)