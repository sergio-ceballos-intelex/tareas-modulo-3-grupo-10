### Un repositorio o repo, es un tipo de almacenamiento digital centralizado que los desarrolladores utilizan para realizar y administrar cambios en el código fuente  de una aplicación. Los desarrolladores tienen que almacenar y compartir carpetas, archivos de texto y otros tipos de documentos al desarrollar software.


## pasos:
### 1. Abre la terminal:
Para empezar, abre la terminal en tu maquina. En windows puedes usar Git Bash o la terminal de comandos. En macOS o linux, puedes usar la aplicación terminal. 

### 2. Navega al directorio de tu proyecto: 
Usa el comando **cd** para navegar al directorio donde quieres inicializar el repositorio Git.

### 3. Inicializa el repositorio Git:
Una vez en el directorio correcto, ejecuta el siguiente comando para inicializar un nuevo repositorio: **git init**
Este comando crea un subdirectorio llamado **git** que contiene todos los archivos necesarios para el control de versiones.

### 4. Agregar archivos al repositorio:
Puedes agregar archivos especificos o todos los archivos del directorio al area de preparación (staging area) usando el comando "git add" para agregar todos los archivos:
**git add .**
O si deseas agrgar archivos especificos:
**git add nombre_del_archivo**

### 5. Confirma (commit) los archivos:
Despues de agregar los archivos al área de preparación, confirma los cambios con un mensaje descriptivo.
**git -m "Mensaje de confirmación"** 

### 6. Verifica el estado del repositorio:
Puedes verificar el estado de tu repositorio en cualquier momento usando el comando 
**git status**
Esto mostrara información sobre los archivos que han sido modificados y los que estan en el area de preparación.

### 7. configura tu información de usuario (opcional):
Si es la primera vez que usa Git es recomendable configurar tu nombre de usuario y correo electronico:

- git config --global User.name "Tu nombre"
- git config --global User.email "tuemail@ejemplo.com"

Esto se utilizará en los mensajes de confirmación para identificar al autor de los cambios.

¡Listo! Ahora has inicializado un repositorio Git en tu maquina local y estas listo para comenzar a utilizar Git para el control de versiones de tu proyecto.

#### Ahora vamos aconectar el repositorio local con el repositorio remoto en GitHub utilizando el comando "git remote add origin <Url_del_repositorio_en_GitHub>"

Finalmente para subir todos los cambios en el repositorio remoto utilizamos:
**git push -u origin main**

[aquí puedes mirar el paso a paso](https://youtu.be/eQMcIGVc8N0?si=-wMHeGByeNoLeBAx)

