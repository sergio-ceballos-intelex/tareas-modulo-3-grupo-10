# _Inicialización, Agregado y Subida de Archivos a GitHub con Git_

## Introducción
El versionado de archivos es una práctica esencial en el desarrollo de software. Permite a los desarrolladores mantener un historial de cambios, colaborar de manera efectiva y gestionar diferentes versiones de un proyecto. En este tutorial, te guiaré a través del proceso de inicializar un repositorio de Git, agregar archivos y subirlos a GitHub.

## Requisitos Previos
- Tener Git instalado en tu computadora.
- Contar con una cuenta activa en GitHub.

## 1. Inicialización de un Repositorio

Para empezar, abre tu terminal y navega hasta el directorio donde deseas crear tu nuevo proyecto. Luego, ejecuta el siguiente comando:

```bash
git init
```

## 2. Agregar Archivos

Después de crear o mover archivos a tu directorio, puedes agregarlos al repositorio con el siguiente comando:

```
git add nombre_del_archivo
git add .
```

## 3. Hacer un Commit

Una vez que hayas agregado los archivos, es crucial hacer un commit para guardar tus cambios en el historial:

```
git commit -m "Descripción de los cambios realizados"
```
## 4. Crear un Repositorio en GitHub

* Accede a GitHub e inicia sesión.
* Haz clic en el botón New para crear un nuevo repositorio.
* Asigna un nombre a tu repositorio y selecciona Create repository.

## 5. Conectar tu Repositorio Local con GitHub

Para enlazar tu repositorio local con el repositorio en GitHub, ejecuta el siguiente comando:

```
git remote add origin https://github.com/tu_usuario/nombre_del_repositorio.git
```

## 6. Subir Archivos a Github

Finalmente, para enviar tus cambios al repositorio en Github, utiliza: 

```
git push -u origin master
```

# Resumen y Práctica

## Puntos Clave

1. **Abrir la Terminal**: Accede a la terminal de tu sistema operativo.

2. **Navegar al Directorio**: Usa el comando `cd` para llegar a la carpeta donde deseas crear tu repositorio.

3. **Inicializar el Repositorio**: Ejecuta `git init` para crear un nuevo repositorio Git en tu directorio.

4. **Verificar la Inicialización**: Usa `ls -a` para confirmar que la carpeta `.git` se ha creado.

5. **Comenzar a Usar Git**: Crea archivos, agrégales al repositorio con `git add`, y guarda tus cambios con `git commit`.

## ¡Practica!

Ahora que conoces los pasos básicos para inicializar un repositorio Git, te animo a que practiques estos comandos por tu cuenta. Crea un nuevo proyecto, experimenta con diferentes archivos y realiza cambios. Cuanto más practiques, más cómodo te sentirás utilizando Git y gestionando tus proyectos.

Recuerda que la práctica es clave para dominar cualquier herramienta. ¡Diviértete explorando Git!
:D

#### _Recursos Adicionales_

- [Documentación de Git](https://git-scm.com/docs)
- [Guía de Introducción a Git](https://git-scm.com/book/es/v2)
- [Tutorial de Github para Principiantes](https://docs.github.com/es/get-started/start-your-journey/hello-world)
- [Tutorial sobre el uso e Git y Github](https://www.youtube.com/watch?v=ANF1X42_ae4&list=PLU8oAlHdN5BlyaPFiNQcV0xDqy0eR35aU)