let str = "aaa@bbb@ccc"
console.log( str.slice(0, 3) + "!" + str.slice(4, 7) + "!" + str.slice(8, 11) );

let trs = "HELLO WORLD";
console.log(trs.slice(0, 1) + trs.slice(1).toLowerCase())

const c = Math.random() * 10
console.log(Math.round(c))


const a = "Lex Luter has a big suit"
console.log(a.charAt(11).toUpperCase() + a.slice(0, 3))
