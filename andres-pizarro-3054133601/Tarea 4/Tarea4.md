# Tutorial básico Github

## Introducción

El versionado de archivos es fundamental para el desarrollo de software, ya que permite mantener un historial de cambios, colaborar con otros desarrolladores y gestionar diferentes versiones de tu proyecto. Git es una herramienta popular para el control de versiones, y GitHub es una plataforma que facilita la colaboración y el almacenamiento de tus repositorios de Git en la nube. Este tutorial te guiará a través de los pasos básicos para inicializar un repositorio Git, agregar archivos, realizar commits y subir tu proyecto a GitHub.

## 1. Inicializar un Repositorio Git

Para comenzar a utilizar Git, primero necesitas inicializar un repositorio en tu máquina local. Esto se hace con el siguiente comando:

```bash
git init
```

Este comando crea un nuevo directorio `.git` en tu proyecto, donde Git almacenará toda la información del repositorio.

### Ejemplo:
```bash
mkdir mi-proyecto
cd mi-proyecto
git init
```

## 2. Agregar Archivos al Área de Preparación

Una vez que hayas creado o modificado archivos en tu proyecto, necesitas agregarlos al área de preparación (staging area) antes de poder hacer un commit. Utiliza el comando `git add` para esto.

```bash
git add nombre_del_archivo
```

Si quieres agregar todos los archivos modificados y nuevos, puedes usar:

```bash
git add .
```

### Ejemplo:
```bash
echo "Hola, mundo!" > archivo.txt
git add archivo.txt
```

## 3. Realizar un Commit

Después de agregar tus archivos al área de preparación, el siguiente paso es realizar un commit. Un commit guarda los cambios en tu repositorio local y permite añadir un mensaje descriptivo sobre los cambios realizados.

```bash
git commit -m "Descripción de los cambios"
```

### Ejemplo:
```bash
git commit -m "Añadido archivo de saludo"
```

## 4. Vincular el Repositorio Local con GitHub

Para poder subir tus cambios a GitHub, primero debes vincular tu repositorio local con un repositorio remoto en GitHub. Usa el siguiente comando para añadir el repositorio remoto:

```bash
git remote add origin <URL_del_repositorio_en_GitHub>
```

Reemplaza `<URL_del_repositorio_en_GitHub>` con la URL de tu repositorio en GitHub.

### Ejemplo:
```bash
git remote add origin https://github.com/mi-usuario/mi-repositorio.git
```

## 5. Subir los Cambios a GitHub

Finalmente, para subir tus cambios al repositorio remoto en GitHub, utiliza el comando `git push`. La opción `-u` establece una relación de seguimiento entre tu rama local y la rama remota.

```bash
git push -u origin master
```

### Ejemplo:
```bash
git push -u origin master
```

## Recursos Adicionales

- [Documentación Oficial de Git](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)