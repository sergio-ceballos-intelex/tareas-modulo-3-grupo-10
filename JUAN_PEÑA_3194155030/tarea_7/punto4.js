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

//   Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
const promedioMaximo = Math.max(...estudiantes.map((elemento)=> elemento.promedio));
console.log(promedioMaximo)

// Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.

const nombreYEdad=estudiantes.filter((estudiante=>estudiante.promedio===promedioMaximo));
console.log(nombreYEdad)


// Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.

const mayoresDe20=estudiantes.filter((estudiante=>estudiante.edad>20))
// Imprime en la consola la información completa de los estudiantes mayores de 20 años.
console.log(mayoresDe20)


