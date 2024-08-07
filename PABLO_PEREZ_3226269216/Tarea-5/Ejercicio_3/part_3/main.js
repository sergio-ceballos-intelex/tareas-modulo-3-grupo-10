//!(!true && (false || false && !!!true || (true && !false))) || false && true
// se cambia de tipo de boleano !
//!(false && (false || false && false || (true && true))) || false && true
console.log(true && true)
//!(false && (false || false && false || true)) || false && true
console.log(false && false)
//!(false && (false || false || true)) || false && true
console.log(false || false)
//!(false && (false || true)) || false && true
console.log(false || true)
//!(false && true) || false && true
console.log(false && true)
//!(false) || false && true
// true || false && true
console.log(false && true)
// true || false 
console.log(true || false )
// true




