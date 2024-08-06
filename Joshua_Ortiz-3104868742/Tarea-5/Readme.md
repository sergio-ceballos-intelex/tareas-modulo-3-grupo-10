# INICIALIZACIÓN, AGREGADO Y SUBIDA DE ARCHIVOS A GITHUB CON GIT


Realizar versiones a los repositorios es una práctica esencial para el trabajo en equipo en el desarrollo de un proyecto. Permite al equipo poder rastrear el historial de cambios, colaborar de manera eficiente y mantener un registro de versiones de su código. Git, un sistema de control de versiones Local, y GitHub, una plataforma de almacenamiento de repositorios Git, son herramientas comunes para manejar estas tareas. A continuación, explicaré paso a paso a cómo inicializar un repositorio local, agregar archivos y subirlos a un repositorio en GitHub.

## PASOS BÁSICOS, para la versionar los archivos

### 1. Inicialización del Repositorio Local

Para comenzar, debes tener Git instalado en tu computador. Puedes verificar si Git está instalado ejecutando `git --version` en tu terminal (CMD). Si no está instalado, puedes descargarlo e instalarlo desde [git-scm.com](https://git-scm.com/).

Una vez que Git esté instalado, sigue estos pasos:

1. Abre tu terminal.
2. Navega al directorio donde quieres crear tu proyecto.
3. Ejecuta el siguiente comando para inicializar un nuevo repositorio de Git:

    ```sh
    git init
    ```

   Esto creará un nuevo subdirectorio `.git` en tu proyecto, que contiene todos los archivos necesarios de tu repositorio local.

### 2. Agregar Archivos al Repositorio

Después de inicializar el repositorio, el siguiente paso es agregar archivos al área de preparación (staging area):

1. Crea o copia los archivos que quieres agregar al repositorio en el directorio del proyecto.
2. Utiliza el comando `git add` para agregar los archivos. Puedes agregar un solo archivo, múltiples archivos o todos los archivos del directorio:

    ```sh
    git add nombre-del-archivo
    ```

    O para agregar todos los archivos:

    ```sh
    git add .
    ```

### 3. Confirmar los Cambios

Una vez que los archivos están en el área de preparación, puedes confirmar los cambios:

```sh
git commit -m "Mensaje descriptivo de lo que se ha hecho"
```

El mensaje entre comillas debe describir claramente los cambios que has realizado en el commit.


### 4. Cargar los Cambios realizados a GitHub

Para subir tus archivos a GitHub, primero debes tener un repositorio creado en GitHub. Una vez que tienes el repositorio, sigue estos pasos:

1. Contencta tu repositorio local con GitHub:


  ```sh
    git remote add origin https://github.com/tu-usuario/tu-repositorio.git
  ```

2. Sube los cambios a tu repositorio
  ```sh
    git push -u origin master
  ```

Este comando subirá tus commits locales al repositorio remoto en la rama master. Si estás trabajando en una rama diferente, reemplaza master con el nombre de tu rama.


## SI NO ESTA VINCULADO EL REPOSITORIO, TE EXPLICO COMO VINCULARLO

### Vincular tu Repositorio Local con un Repositorio Remoto en GitHub

Una vez que has inicializado tu repositorio local y agregado archivos, el siguiente paso es vincular este repositorio local con un repositorio remoto en GitHub. Esto te permitirá subir (El push) tus cambios locales a GitHub y compartir tu proyecto con otros:

### Crear un Repositorio en GitHub

1. **Inicia sesión en GitHub**:
   Abre tu navegador web y dirígete a [GitHub](https://github.com/). Inicia sesión con tu cuenta. Si no tienes una cuenta, regístrate para crear una.

2. **Crea un nuevo repositorio**:
   - Haz clic en el botón `New` o en el icono de `+` en la esquina superior derecha y selecciona `New repository`.
   - Asigna un nombre a tu repositorio.
   - (Opcionalmente), puedes agregar una descripción, elegir si el repositorio será público o privado, y añadir un archivo README.
   - Haz clic en `Create repository`.

### Vincular el Repositorio Local con el Repositorio Remoto

Una vez que tienes el repositorio remoto creado en GitHub, debes vincularlo con tu repositorio local. Sigue estos pasos:

1. **Copia la URL del repositorio remoto**:
   - En la página del nuevo repositorio en GitHub, copia la URL del repositorio. Debería verse algo como `https://github.com/tu-usuario/tu-repositorio.git`.

2. **Añade el repositorio remoto en tu repositorio local**:
   - Abre tu terminal y navega al directorio de tu proyecto local donde desees duplicarlo.
   - Utiliza el siguiente comando para añadir el repositorio remoto. Reemplaza `<URL_del_repositorio_en_GitHub>` con la URL que copiaste.

    ```sh
    git remote add origin <URL_del_repositorio_en_GitHub>
    ```

    Por ejemplo:

    ```sh
    git remote add origin https://github.com/tu-usuario/tu-repositorio.git
    ```

### Verificar la Configuración del Repositorio Remoto

Puedes verificar que tu repositorio local está correctamente vinculado con el remoto utilizando el comando `git remote -v`:

```sh
git remote -v
```