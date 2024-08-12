# Inicialización, Agregado y Subida de Archivos a GitHub con Git

Versionar archivos en un repositorio es una práctica fundamental en el desarrollo de software. Permite llevar un control detallado de los cambios realizados en los archivos, facilita la colaboración entre múltiples desarrolladores y asegura la integridad y trazabilidad del código a lo largo del tiempo. Este tutorial te guiará a través de los pasos necesarios para inicializar un repositorio, agregar archivos y subirlos a GitHub utilizando Git.

## Pasos para Inicializar un Repositorio y Agregar Archivos

### 1. Inicializar un Repositorio Git

Primero, necesitamos crear un nuevo repositorio de Git en el directorio donde se encuentran nuestros archivos. Abre una terminal y navega al directorio de tu proyecto: 

Para navegar a tu proyecto, usa el comando :`cd /ruta/a/tu/proyecto`.

---

Una vez en el directorio, inicializa el repositorio con el siguiente comando:`git init`

Este comando crea un nuevo subdirectorio .git que contiene todos los archivos necesarios para el repositorio.

--- 

### 2. Verificar el Estado del Repositorio
Después de inicializar el repositorio, es una buena práctica verificar su estado para ver qué archivos no están siendo rastreados por Git:  `git status`

--- 

### 3. Agregar Archivos al Área de Preparación (Staging Area)

Para empezar a rastrear archivos específicos, debemos agregarlos al área de preparación. Si queremos agregar todos los archivos en el directorio actual, usamos: `git add .`

Si solo queremos agregar un archivo o directorio específico, usamos: `git add ruta/al/archivo_o_directorio`

#### Ejemplo
Si tienes un archivo llamado archivo.txt en tu directorio, puedes agregarlo así: `git add archivo.txt`

---

### 4. Realizar un Commit de los Cambios
Una vez que los archivos están en el área de preparación, podemos confirmar estos cambios con un commit. Es importante proporcionar un mensaje descriptivo que explique los cambios realizados:  

`git commit -m "Añadir archivo.txt con contenido inicial`


---

### 5. Conectar con un Repositorio Remoto en GitHub
Para subir nuestros cambios a GitHub, primero necesitamos conectar nuestro repositorio local con un repositorio remoto. Si aún no has creado un repositorio en GitHub, hazlo y luego copia la URL del repositorio. En la terminal, conecta tu repositorio local con el remoto: `git remote add origin https://github.com/tu_usuario/tu_repositorio.git`

---

### 6. Subir los Cambios al Repositorio Remoto
Finalmente, subimos nuestros commits al repositorio remoto en GitHub: `git push -u origin master`

Este comando subirá los cambios a la rama principal (master). Si estás trabajando en otra rama, reemplaza master con el nombre de tu rama.

--- 

### **_Resumen de Comandos_**

1. Inicializar un nuevo repositorio de Git: `git init`
2. Verificar el estado del repositorio: `git status`
3. Agregar archivos al área de preparación: `git add .`
    - Si solo queremos agregar un archivo o directorio específico, usamos: `git add ruta/al/archivo_o_directorio`
4. Realizar un commit:  `git commit -m "Mensaje descriptivo"`
5. Conectar con un repositorio remoto:  `git remote add origin https://github.com/tu_usuario/tu_repositorio.git`
6. Subir los cambios al repositorio remoto: `git push -u origin master`

--- 



### **_Conclusión_**

_Hemos cubierto los pasos básicos para inicializar un repositorio Git, agregar archivos, hacer commits y subir los cambios a un repositorio remoto en GitHub. Practicar estos comandos te ayudará a dominar el flujo de trabajo básico con Git y GitHub. ¡Sigue practicando y no dudes en explorar más comandos y funcionalidades avanzadas de Git!_





