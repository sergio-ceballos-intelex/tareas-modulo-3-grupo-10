const isLogged = true;

const selecciones = [
  {
    id: 1,
    nombre: 'Colombia',
    codigoPais: 'COL'
  },
  {
    id: 2,
    nombre: 'Argentina',
    codigoPais: 'ARG'
  },
  {
    id: 3,
    nombre: 'Uruguay',
    codigoPais: 'URU'
  },
  {
    id: 4,
    nombre: 'Brasil',
    codigoPais: 'BRA'
  },
];

const jugadores = [
  {
    id: 10,
    nombre: 'James',
    apellido: 'Rodriguez',
    codigoPais: 'COL'
  },
  {
    id: 11,
    nombre: 'Luis',
    apellido: 'Díaz',
    codigoPais: 'COL'
  },
  {
    id: 12,
    nombre: 'Richard',
    apellido: 'Ríos',
    codigoPais: 'COL'
  },
  {
    id: 13,
    nombre: 'Lionel',
    apellido: 'Messi',
    codigoPais: 'ARG'
  },
  {
    id: 14,
    nombre: 'Lautaro',
    apellido: 'Martínez',
    codigoPais: 'ARG'
  },
  {
    id: 15,
    nombre: 'Federico',
    apellido: 'Valverde',
    codigoPais: 'URU'
  },
  {
    id: 16,
    nombre: 'Darwin',
    apellido: 'Nuñez',
    codigoPais: 'URU'
  },
  {
    id: 17,
    nombre: 'Vinicius',
    apellido: 'Jr',
    codigoPais: 'BRA'
  },
  {
    id: 18,
    nombre: 'Rodrygo',
    apellido: 'Goes',
    codigoPais: 'BRA'
  },
];

function apigetTeams(){
    return selecciones;
}

function apigetTeamPlayers(codigoPais){

    const playersByTeam = jugadores.filter(ply => ply.codigoPais===codigoPais);

    const playersName = playersByTeam.map(player=>{
        return `${player.nombre} ${player.apellido}`;
    });

    const team = {};

    team[codigoPais] = playersName;

    return team;

}

function obtenerSelecciones() {
  return new Promise((resolve, reject) => {

    if (isLogged) {
        setTimeout(() => {
            resolve(apigetTeams());
        }, 2000);
    } else {
        reject('No estas logueado dentro de la app');
    }   


  });
}

function obtenerJugadoresPorSeleccion(codigoPais) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(apigetTeamPlayers(codigoPais));
    }, 5000);
  });
}

obtenerSelecciones()
    .then((teams) => {

        console.log('Equipos:', teams);

        const teamPlayersPromise = teams.map(team => obtenerJugadoresPorSeleccion(team.codigoPais));

        return Promise.all(teamPlayersPromise);
    })
    .then((allPlayersTeam) => {
        console.log('Jugadores por Equipo:', allPlayersTeam);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


