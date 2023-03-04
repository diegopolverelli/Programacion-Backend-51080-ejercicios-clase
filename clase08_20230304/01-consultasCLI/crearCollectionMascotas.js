db.mascotas.drop();
db.createCollection('mascotas');
db.mascotas.insertMany([
    {
        nombre: "Felix",
        especie: "gato",
        edad: 4,
        peliculas: [
            {
                titulo: 'peli 1'
            },
            {
                titulo: 'peli 2'
            }
        ]
    },
    {
        nombre: "Huesos",
        especie: "perro",
        edad: 5,
        peliculas: [
            {
                titulo: 'peli 1'
            },
            {
                titulo: 'peli 2',
                espectadores: 2000000
            },
            {
                titulo: 'Homero y el vendedor de espejos',
                espectadores: 1000000
            },
        ]
    },
    {
        nombre: "Rintintin",
        especie: "perro",
        edad: 5
    },
    {
        nombre: "Lassie",
        especie: "perro",
        edad: 4
    },
    {
        nombre: "Correcaminos",
        especie: "correcaminos",
        edad: 5,
        habilidades: ['inteligencia'],
        peliculas: [
            {
                titulo: 'Las aventuras del Correcaminos IV',
                espectadores: 350000
            }
        ],
        enemigos: [
            {
                nombre: 'Coyote',
                especie: 'coyote',
                domicilio: {
                    calle: 'Amapolas',
                    numero: 16300
                }
            },
        ]
    },
    {
        nombre: "Silvestre",
        especie: "gato",
        edad: 5,
        empresa: 'Warner',
        enemigos: [
            {
                nombre: 'Tweety',
                domicilio: {
                    calle: 'Maipu',
                    numero: 1900
                }
            },
        ]
    },
    {
        nombre: "Claudio",
        especie: "gallo",
        edad: 9
    },
    {
        nombre: "Minnie",
        especie: "raton",
        edad: 5,
        empresa: 'Disney'
    },
    {
        nombre: "Jerry",
        especie: "raton",
        edad: 2,
        empresa: 'Warner',
        habilidades: ['humor'],
        enemigos: [
            {
                nombre: 'Tom',
                domicilio: {
                    calle: 'las Bases',
                    numero: 5050
                }
            },
            {
                nombre: 'DonGato',
                domicilio: {
                    calle: 'Soriano',
                    numero: 1457
                }
            }
        ]
    },
    {
        nombre: "Tom",
        especie: "gato",
        edad: 2,
        empresa: 'Warner',
        habilidades: ['humor']
    },
    {
        nombre: "Rocket",
        especie: 'mapache',
        edad: 7,
        empresa: 'Marvel',
        habilidades: ['inteligencia', 'destreza'],
        peliculas: [
            {
                titulo: 'Guardianes de la Galaxia 1',
                espectadores: 1000000
            },
            {
                titulo: 'Guardianes de la Galaxia 2',
                espectadores: 2000000
            },
            {
                titulo: 'EndGame',
                espectadores: 5000000
            },
            {
                titulo: 'Infinity War'
            },
            {
                titulo: 'Thor Love and Thunder'
            },
        ],
        enemigos: [
            {
                nombre: 'Thanos',
                especie: 'extraterrestre',
                domicilio: {
                    calle: 'Azcuenaga',
                    numero: 3274
                }
            },
            {
                nombre: 'Ronan',
                especie: 'extraterrestre',
                domicilio: {
                    calle: 'las Bases',
                    numero: 1890
                }
            },
        ]
    },
    {
        nombre: "Suertudo",
        especie: 'gato',
        edad: 5,
        empresa: null,
        enemigos: [
            {
                nombre: 'Alf',
                especie: 'extraterrestre',
                domicilio: {
                    calle: 'Ortiz de Rosas',
                    numero: 190
                }
            },
        ]
    },
    {
        nombre: "Cerbero",
        especie: 'perro',
        edad: 10000,
    },
    {
        nombre: "Blue",
        especie: 'ave',
        edad: null,
        empresa: 'Pixar'
    },
    {
        nombre: "Gardfield",
        especie: 'gato',
        edad: null,
        empresa: null
    }
]);
