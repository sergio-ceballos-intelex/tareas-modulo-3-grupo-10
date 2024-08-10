
true || true || false && true || false && true && true || false
//                   false               false
//true || true || false || false || false  -------  resp: true  

                    

true && (false || false && (true && (true || false && true))) || false && (true || false)
//                                               false                          true
//                                     ( true  ||   false )          false &&  true
//                         (true     &&       true        )    ||       false
//    true &&  (  false ||  false   &&    true) ||  false
//                    (false ||  false )
 //            true   &&     false    ||    false          -------   resp: false



!(!true && (false || false && !!!true || (true && !false))) || false && true
// !( false && (false || false && false ||  ( true && true ))) || false
// ! ( false && (false || false ||  true) || false
// !    ( false &&  true ) || false
// ! ( false)  || false 
// true || false                             ---------------- resp: true

