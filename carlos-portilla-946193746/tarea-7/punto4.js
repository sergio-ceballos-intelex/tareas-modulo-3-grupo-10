// Punto 4: Búsqueda y Filtrado de Datos:

const estudiantes = [
    {
      nombre: "Ana",
      edad: 20,
      promedio: 85,
      genero: "Femenino",
      carrera: "Ingeniería Civil",
      ciudad: "Bogotá",
    },
    {
      nombre: "Juan",
      edad: 22,
      promedio: 78,
      genero: "Masculino",
      carrera: "Medicina",
      ciudad: "Medellín",
    },
    {
      nombre: "María",
      edad: 21,
      promedio: 90,
      genero: "Femenino",
      carrera: "Administración de Empresas",
      ciudad: "Cali",
    },
    {
      nombre: "Pedro",
      edad: 23,
      promedio: 82,
      genero: "Masculino",
      carrera: "Derecho",
      ciudad: "Barranquilla",
    },
    {
      nombre: "Laura",
      edad: 24,
      promedio: 88,
      genero: "Femenino",
      carrera: "Arquitectura",
      ciudad: "Cartagena",
    },
    {
      nombre: "Carlos",
      edad: 20,
      promedio: 75,
      genero: "Masculino",
      carrera: "Ingeniería de Sistemas",
      ciudad: "Santa Marta",
    },
    {
      nombre: "Sofía",
      edad: 22,
      promedio: 95,
      genero: "Femenino",
      carrera: "Psicología",
      ciudad: "Pereira",
    },
  ];

  // Utiliza filter para encontrar al estudiante con el promedio más alto en el array.
 
  let maxPromedio = 0;

  estudiantes.forEach(estudiante => {
    if (estudiante.promedio > maxPromedio) {
      maxPromedio = estudiante.promedio;
    }
  });
    const estudianteConMaxPromedio = estudiantes.filter(estudiante => estudiante.promedio === maxPromedio);

  // Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.

  estudianteConMaxPromedio.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Edad: ${estudiante.edad}`);
  });

  // Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores 
  
  const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
    
  // Imprime en la consola la información completa de los estudiantes mayores de 20 años.

  console.log(estudiantesMayores);
  


   