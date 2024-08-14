# Inicialización, Agregado y Subida de Archivos a GitHub con Git

## Introducción

La importancia que tiene versionar archivos es un repositorio es sumamente importante para mantener un historial claro y prolijo de los cambios que se han efectuado en cada uno de los proyectos.

>En este tutorial aprenderas como inicializar, agregar archivos y subirlos a hitHub desde git.

## Como inicializar un repositorio ya clonado.

Para inicializar un repositorio se utiliza el comando *git init* en el directorio actual ya que este crea un nuevo repositorio de Git. También puede utilizarse para convertir un proyecto existente y sin versión en un repositorio de Git.

## Como agregar archivos al área de preparación

Para agregar archivos se utiliza el comando *git add .* ya que este es el que se encarga de mover los cambios del directorio de trabajo al área del entorno de ensayo.

Este comando permite agregar un archivo en especifico o agregar todos los de el directorio.

### Las dos maneras de utilizar git add

- git add nombre_del_archivo_en_especifico
- git add .

## Realiza un commit

Primeramente el comando git commit define el final de una transacción ejecutada con éxito y este se escribe así: *git commit -m "Descripción de los cambios realizados"*

## Cómo vincular tu repositorio local con un repositorio remoto en GitHub

Para vincular un repositorio local al remoto en gitHub se utiliza el comando *git remote add origin <URL_del_repositorio_en_GitHub>* el cual se ejecuta en la terminal del repositorio local.

## Cómo subir los cambios a GitHub

Para subir los cambios del repositorio local al remoto se utiliza el comando *git push -u origin nombre_de_la_rama.* el cual se ejecuta en el repositorio local.

## Paso a paso
1. Inicializar en la terminal del repositorio local con el comando *git init*
2. Despues de generar cambios se pueden guardar con el comando *git add* si los cambios se ejecutaron solo en un archivo el recomendable ejecutar el *git add con_nombre_del_archivo* de lo contrario es mejor guardar con *git add .* ya que este guarda genralmente.
3. Después de guardar todos los cambios se ejecuta el comando *git commit - m "Junto con las descripción de los cambios que se realizaron"*
4. Posteriormente de commit si se desea vinvular el repositorio remoto con el repositorio local lo que se hace es ejecutar el siguiente comando teniendo en cuenta que se necesita tener la URL de repositorio remoto en GitHub *git remote add origin <URL_del_repositorio_en_GitHub>*.
5. Finalmente para subir los cambios al repositorio remoto se utiliza el comando *git push -u origin master* desde el repositorio local al ejecutar este se debe tener en cuenta que si en el trancurso del cambios se creo una rama se debe poner la rama creada en lugar de la master o la main.
6. Si durante el transcurso de estos cambios quieres estar segur@ de si se han presentado cambios utiliza el comando *git status* y para ubicarte en que rama estas se utiliza el comando *git branch* la que aparece en verde es en la que estás...
[Esta img muestra como se ejecuta **git branch**](https://desarrolloweb.com/archivoimg/general/3980.png)
