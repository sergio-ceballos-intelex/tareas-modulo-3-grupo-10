
# "Inicializacion, agregado y subida de archivos a GitHub con Git" 
## Introduccion

- La **gran cantidad de información** que se genera y consulta hoy en día en todo tipo de formatos ha generado muchos problemas para las organizaciones: una de las posibles soluciones a esta cuestión es la creación de un **repositorio**. 
- La principal ventaja de estos **repositorios** es que actuan como un almacen centralizado de archivos y recursos relacionados con un proyecto especifico.
estos pueden contener codigos fuente, documentos, imagenes, archivos de configuracion y mas. 
- La gestion de un repositorio se realiza a travez de sistemas de control de versiones que permiten realizar un seguimiento a los cambios a los archivos a lo largo del tiempo.

## Inicializar un repositorio

El comando `git init` crea un nuevo repositorio de Git. 
> Puede utilizarse para convertir un proyecto existente y sin versión en un repositorio de Git, o para inicializar un nuevo repositorio vacío.  
> 
Al ejecutar `git init`, se crea un subdirectorio de `.git` en el directorio de trabajo actual, que contiene todos los metadatos de Git necesarios para el nuevo repositorio.

## Agregando archivos con Git

El comando `git add` consiste en pasar un cambio pendiente del directorio de trabajo hacia el area de `git staging` . De este modo, indica a Git que quieres incluir actualizaciones en un archivo concreto en la próxima confirmación. Sin embargo, `git add` no afecta al repositorio.
> Puedes añadir estos cambios con:
`git add . `   para todos los archivos pendientes.
`git add <file>`  para uno en particular.

El comando `git commit` es quien se encarga de confirmar el estado de un proyecto en un determinado momento y brinda las siguientes opciones:
  
`git commit`  confirma la instantanea y abre un editor de texto que te pedira un mensaje.

`git commit -a` confirma la instantanea incluyendo solo los archivos añadidos con `git add`en el historial.

`git commit -m <mensaje>` se confirma la instantanea sin abrir el editor de texto y añade el mensaje directamente.

#### como vincular un repositorio local con uno remoto en GitHub
Una practica fundamental en el desarrollo de software es la vinculacion de un repositorio local con uno remoto en GitHub siguiendo los siguientes pasos:
- Inicia sesion en GitHub y crea un repositorio
- Copia la URL del repositorio 
- Abre la terminal y navega hacia tu proyecto local 
- Añade el repositorio remoto usando el comando `git remote add origin` seguido de la URL que copiaste de GitHub
- Verifica que el remoto se añadio correctamente con el comando `git remote  -v`

## Subiendo archivos a GitHub con Git
 
Finalmente para subir los cambios locales a un repositorio remoto en GitHub se utiliza el comando `git push`

- Si estas trabajando en la rama principal el comando a usar seria `git push -u origin main` 
- Si estas trabajando en otra rama seria `git push -u origin <nombre de la rama>`
- La opcion `-u` le indica a Git que el repositorio remoto `(origin)` y la rama `(<nombre de la rama>)` que especificas en el comando seran los destinos predeterminados en el futuro y la proxima vez que subas cambios solo sera suficiente el comando `git push` .
 

| Repositorio existente         |        Repositorio nuevo |
|                 -             |              -           |    
|`git clone URL`                |                `git init`|
|`git add .`                    |               `git add .`|
|`git commit -m`                |           `git commit -m`|
|`git push -u origin main`      |  `git push -u origin main`|
|`Pull Request` rama distinta a la principal | `Pull Request`|
|`git pull` sincronizar rama con la principal |   `git pull` |

  
- Enlaces usados:
   - [atlassian](https://www.atlassian.com/es/git/tutorials/syncing/git-pull)
   - [freeCodeCamp](https://www.freecodecamp.org/espanol/news/git-pull-explicado/)
   - [git](https://git-scm.com/docs/git-pull)
   - [W3Shools](https://www.w3schools.com/git/git_pull_from_remote.asp?remote=github)

---
>**En resumen**, GitHub es una plataforma poderosa que va más allá de ser un simple repositorio de código. 
>Es una herramienta integral que apoya la colaboración, el control de versiones, la seguridad, la automatización, y la participación comunitaria. 
>Su uso es fundamental para desarrollar software de alta calidad de manera eficiente y colaborativa.


---