# Inicialización, Agregado y Subida de Archivos a GitHub con Git

#### Git es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear cambios en el código, colaborar en proyectos y gestionar diferentes versiones del software. GitHub es una plataforma basada en la web que utiliza Git para facilitar la colaboración y el manejo de repositorios.

### Importancia:

1. Control de Versiones: Git permite llevar un registro detallado de todos los cambios realizados en el proyecto, lo que facilita la recuperación de versiones anteriores.

2. Colaboración: GitHub permite a múltiples desarrolladores trabajar en el mismo proyecto simultáneamente, facilitando la colaboración y la revisión de código.

3. Seguridad: Almacenar el código en GitHub proporciona una copia de seguridad en la nube, protegiendo contra la pérdida de datos.

4. Transparencia: Mantiene un historial de cambios y discusiones, lo cual es útil para la auditoría y el seguimiento de decisiones de desarrollo.

5. Despliegue Automatizado: GitHub se integra con herramientas de CI/CD (Integración y Entrega Continuas) para automatizar pruebas y despliegue.

## Tutorial Breve: Inicialización, Agregado y Subida de Archivos a GitHub con Git
### Prerequisitos:
- Tener Git instalado en tu sistema.
- Tener una cuenta en GitHub.

#### Pasos:
1. Inicializar un Repositorio Git:
    ```bash
    #Esto inicializa un nuevo repositorio Git en tu proyecto.
    git init
2. Agregar Archivos al Repositorio:
    ```bash
    #Agrega los archivos al área de preparación
    #El punto . agrega todos los archivos y directorios del proyecto.
    git add .
3. Hacer un Commit:
    ```bash
    #Realiza un commit de los archivos agregados con un mensaje descriptivo
    git commit -m "Mensaje del commit inicial"
4. Crear un Repositorio en GitHub:
    - Ve a GitHub y crea un nuevo repositorio.
    - Copia la URL del repositorio, algo así como https://github.com/tu-usuario/nombre-del-repositorio.git.
5. Enlazar el Repositorio Local con GitHub:
    ```bash
    #Enlaza tu repositorio local con el repositorio remoto en GitHub
    git remote add origin https://github.com/tu-usuario/nombre-del-repositorio.git
6. Subir los Archivos al Repositorio en GitHub
    ```bash
    #Sube los archivos con el siguiente comando
    git push -u origin master
    #El parámetro -u establece origin como el repositorio remoto por defecto para futuras subidas.
## Comandos Clave de Git
Comandos Clave de Git:
- git **init**: Inicializa un nuevo repositorio Git.
- git **add (Archivo)**<archivo>: Agrega archivos específicos al área de preparación.
- git **add .** : Agrega todos los archivos y directorios del proyecto al área de preparación.
- git **commit -m "mensaje"**: Realiza un commit con un mensaje descriptivo.
- git **remote add origin <URL>**: Añade un repositorio remoto.
- git **push -u origin master**: Sube los archivos al repositorio remoto.

[¿Cómo usar GitHub?](https://www.youtube.com/watch?v=44ziZ12rJwU&ab_channel=Developeando)

## Conclusion
#### El manejo de Git y GitHub es esencial para cualquier desarrollador, ya que facilita el control de versiones, la colaboración en equipo y la gestión de proyectos de software de manera eficiente. Estos pasos básicos te ayudarán a comenzar con la inicialización, agregado y subida de archivos a un repositorio en GitHub.
