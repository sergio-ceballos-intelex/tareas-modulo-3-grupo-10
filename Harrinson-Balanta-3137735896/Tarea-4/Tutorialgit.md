# Tutorial Inicialización, Agregado y Subida de Archivos a GitHub con Git
## Introduccion
---
Imagen git y github
![alt text](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHGvOVFGJGfqFs7oDhpX4ls5Q3h_WycAw18g&s)
---
Versionar archivos en un repositorio es fundamental por varias razones clave:

Control de cambios: Permite registrar y documentar cada modificación realizada en los archivos a lo largo del tiempo. Esto facilita la revisión de cambios, la identificación de quién realizó cada cambio y la reversión a versiones anteriores si es necesario. Es crucial para mantener un historial detallado de la evolución del proyecto.

Colaboración eficiente: Facilita el trabajo colaborativo entre múltiples desarrolladores. Cada cambio se registra y se puede integrar de manera controlada en el código base, evitando conflictos entre diferentes versiones del mismo archivo.

Seguimiento de errores: Ayuda a identificar cuándo y cómo se introdujeron errores específicos. Al poder retroceder a versiones anteriores donde el código funcionaba correctamente, se simplifica la tarea de encontrar la causa raíz de los problemas.

Experimentación segura: Permite crear ramas (branches) para trabajar en nuevas funcionalidades o experimentos sin afectar el código principal. Esto posibilita probar cambios sin comprometer la estabilidad del proyecto principal.

Auditoría y cumplimiento: Proporciona un registro detallado de todos los cambios realizados, lo cual es esencial para auditorías de seguridad, cumplimiento de regulaciones y revisiones de calidad del software.

Recuperación y restauración: En caso de pérdida de datos o errores catastróficos, tener versiones anteriores almacenadas en el repositorio permite restaurar el estado funcional del proyecto rápidamente.
---
### crear un repositorio en El github
---
1. estando en github pulsamos en new
2. colocamos en nombre del repositorio en Repository name y Description (optional) y si sera Public o Private
3. si deseamos Initialize this repository with: con un archivo 
Add a README file
4. se se crear el repositorio con un archivo readme abremos terminado la creacion del repositorio remoto
5 si se crea el repositorio sin el archivo readme debemos seguir los siguientes pasos que nos indicara el mismos github 
## Ejemplo
or create a new repository on the command line
echo "# prueba" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/harrybalanta/prueba.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/harrybalanta/prueba.git
git branch -M main
git push -u origin main
---
##  paso a paso cómo inicializar un repositorio Git local

1. en tu tu visual studio code crea una carpeta de proyecto en la que quieres crear un repositorio. Primero deberás establecer el directorio de la carpeta raíz del proyecto con el comando cd y luego ejecutar 
# Git init
2. Para iniciar el proyecto
## Procedmeos con la creacion del proyecto ya sea creando un archivo html, css o js
---
3. una vez realziados cambios en los archivos creados el visual tiene una ayuda que con la cual podemos ver el numero de cambios realziados como se muestra en la siguiente imagen

<!-- Imamagen de ayuda de visual para ver cambios -->
![another alt text](cambios_realizados)
4. Para ver los cambios realizado podemos utilizar el comando **git status**
# Los cambios estaran a nivel de maquina
5. cómo agregar archivos al área de preparación (staging area) utilizando el comando **git add** y nombre del archivo
6. para subir todos los archivos podemos utilizar el comando
**git add .**
7. Luego procedmeos a realizar un commit con el siguiente comando
8. **git commit -m "mensaje explicativo de lo que se hizo"**
# vincular tu repositorio local con un repositorio remoto en GitHub
## ** git remote add origin <URL_del_repositorio_en_GitHub> **

9. subir los cambios a GitHub
## utilizando el comando git push -u origin main
---
en este caso mein es la rama en la cual estamos

9. comandos en consola para inicializar un repositorio git visual en studio code
<!-- CODIGO -->
```javascript
Git init
git status
subir archivo especifico
git add 
subir todos los archivos
 git add .

git commit -m "mensaje explicativo de lo que se hizo"
git push -u origin main
```

## En este enlace puedes consultar mas informacion sobre *git init*

<!-- LINKS -->
[git init](https://www.atlassian.com/es/git/tutorials/setting-up-a-repository/git-init "git init")

### conclusion
---
Es de suma importancia conocer y practicar los diferentes comando que nos ayudan a trabajar los proyecto, de forma ordenada con git, ya que esto nos permitira realziar nuestras actividades de una manera muho mas comoda y eficiente.

### Autor
| Nombre | Modulo |  Bootcamp |
| -------- | ------ | -------- |
| Harrinson Balanta   |Javascript Avanzado   | Kambcode        |
|01     | Julio  | 2024       |