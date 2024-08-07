// true || true || false && true || false && true && true || false
// resolvemos primero los &&.
console.log(false && true)
// true || true || false || false && true && true || false
console.log(false && true)
// true || true || false || false && true || false
console.log(false && true)
// true || true || false || false || false
// vamos con los OR
console.log(true || true )
// true || false || false || false
console.log(true || false )
// true || false || false
console.log(true || false )
// true || false 
console.log(true || false )
// true