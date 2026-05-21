// how the native or industry standard strings are used
let str1 = "hello world"

// simple concatination

let str2 = "hello"

let newd = str1 + " " + str2

console.log(newd) // this will print "hello world hello"

// we can also use template literals for concatination
// string interpolation is a feature of template literals that allows us to embed expressions inside a string

let newd2 = `Hello  there this i how we can use template literals for concatination ${str1} ${str2}`

console.log(newd2) // this will print "Hello  there this i how we can use template literals for concatination hello world hello"

// even a better way of doing this all is to use the built in method of strings called new

const mystr = new String("hello world")

console.log(mystr) // this will print "hello world" 

