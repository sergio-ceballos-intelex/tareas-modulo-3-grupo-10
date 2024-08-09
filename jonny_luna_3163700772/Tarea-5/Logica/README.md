


## PUNTO 3 EJERCICIOS DE LÓGICA

#### Resolver los siguientes ejercicios:

1. true || true || false && true || false && true && true || false

###### Solución:

Se resuelven las expresiones que contienen AND quedadndo así:

false && true = __false__, false && true && true = __false__


true || true || __false__ || __false__ || false

teniendo en cuenta que en OR con un solo true da como resultado __true__ pero para mayor explicación se agrupa de a dos:

(true || true ) || (false || false) || false

se resuelven los parentesis.

(true) || (false) || false

nuevamente agrupo de a dos expresiones

(true || false) || false,  se resuelve

(true) || false, finalmente

true

Conclusón la respuesta es __true__


2. true && (false || false && (true && (true || false && true))) || false && (true || false)

###### Solución:

Inicialmente se resuelven los parentesis mas internos

true && (false || false && (true && __(true || false && true)__)) || false && __(true || false)__, los que aparecen en negrita.

se observa que el primer paréntesis a resolver tiene un AND, por lo tanto se prioriza dando como resultado false && true = __false__, en el segundo paréntesis simplemente se resuelve.

true && (false || false && (true && (true || __false__))) || false && __(true)__.

ahora se reuelve el paréntesis mas interno dando true || false = __true__.

true && (false || false && (true && __true__)) || false && __(true)__.

Continuamos con el segundo paréntesis mas interno dando true && true = __true__ y la última expresión que contiene AND dando false && true = __false__. quedando así:

true && (false || false && true) || false

Se resuelve el AND del ultimo paréntesis. dando false && true = __false__, quedadndo así:

true && (false || false) || false

Se resuelve el paréntesis dando false || false = __false__ quedadando asi:

true && __false__ || false

se resuelve el AND dando true && false = __false__ quedadndo asi:

false || false

finalmente el resultado de false || false = __false__

conclusión el resultado final es __false__

3. !(!true && (false || false && !!!true || (true && !false))) || false && true

###### Solución:

Se comienza resolviendo los NOT 
!(__false__ && (false || false && __false__ || (true && __true__))) || false && true

Se resuelve el paréntesis mas interno donde encontramos un ADN dando como resultado true && true = __true__ 

!(false && (false || false && false || (__true__))) || false && true

Se resuelve en el segundo parentesis mas interno el AND dando como resultado false && false = __false__ quedando asi:

!(false && (false || __false__ || true)) || false && true

luego se resuelve en el mismo paréntesis la expresión false || false = __false__ quedando así:

!(false && (__false__ || true)) || false && true

finalmente se resuelve en ese paréntesis la expresión 
false || true = __true__ quedando así:

!(false && __true__) || false && true

se resuelve el último paréntesi que queda la expresión

false && true = __false__ quedando así:

!(__false__) || false && true

las expresiones reultantes tiene como resultado:

!(false) = __true__ y false && true = __false__ quedando la expresión asi:

true || false  cuyo resultado es __true__

conclusión la respuesta es __true__



