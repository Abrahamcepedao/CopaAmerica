//onterfaces
import { IGame, ICountry } from "../interfaces/types";

export const lastDate = {
    year: 2024,
    month: 7,
    day: 3
}

export const CAN_SELECT = true

export const countries: ICountry[] = [
    {
        img: '/img/countries/holland.png',
        name: 'Países Bajos'
    },
    {
        img: '/img/countries/england.png',
        name: 'Inglaterra'
    },
    {
        img: '/img/countries/gales.png',
        name: 'Gales'
    },
    {
        img: '/img/countries/polonia.png',
        name: 'Polonia'
    },
    {
        img: '/img/countries/france.png',
        name: 'Francia'
    },
    {
        img: '/img/countries/denmark.png',
        name: 'Dinamarca'
    },
    {
        img: '/img/countries/spain.png',
        name: 'España'
    },
    {
        img: '/img/countries/germany.png',
        name: 'Alemania'
    },
    {
        img: '/img/countries/belgium.png',
        name: 'Bélgica'
    },
    {
        img: '/img/countries/croacia.png',
        name: 'Croacia'
    },
    {
        img: '/img/countries/serbia.png',
        name: 'Serbia'
    },
    {
        img: '/img/countries/suiza.png',
        name: 'Suiza'
    },
    {
        img: '/img/countries/portugal.png',
        name: 'Portugal'
    },
    //new
    {
        img: '/img/countries/turkey.png',
        name: 'Turquía'
    },
    {
        img: '/img/countries/italy.png',
        name: 'Italia'
    },
    {
        img: '/img/countries/ukraine.png',
        name: 'Ucrania'
    },
    {
        img: '/img/countries/austria.png',
        name: 'Austria'
    },
    {
        img: '/img/countries/slovakia.png',
        name: 'Eslovaquia'
    },
    {
        img: '/img/countries/romania.png',
        name: 'Rumania'
    },
    {
        img: '/img/countries/slovenia.png',
        name: 'Eslovenia'
    },
    {
        img: '/img/countries/georgia.png',
        name: 'Georgia'
    },
];

export const games: IGame[] = [
    {
        num: 37,
        country1: 'Alemania',
        country2: 'Dinamarca', //update
        date: 'Sábado 29 de Junio',
        time: '13:00 (CDMX)',
        stadium: 'BVB Stadion Dortmund',
        type: 'round8',
        winner: 0,
    },
    {
        num: 38,
        country1: 'Suiza',
        country2: 'Italia', //update
        date: 'Sábado 29 de Junio',
        time: '10:00 (CDMX)',
        stadium: 'Olympiastadion Berlin',
        type: 'round8',
        winner: 0,
    },
    {
        num: 39,
        country1: 'España',
        country2: 'Georgia', //update
        date: 'Domingo 30 de Junio',
        time: '13:00 (CDMX)',
        stadium: 'Cologne Stadium',
        type: 'round8',
        winner: 0,
    },
    {
        num: 40,
        country1: 'Inglaterra', //update
        country2: 'Eslovaquia', //update
        date: 'Domingo 30 de Junio',
        time: '10:00 (CDMX)',
        stadium: 'Arena AufSchalke',
        type: 'round8',
        winner: 0,
    },
    {
        num: 41,
        country1: 'Portugal',
        country2: 'Eslovenia', //update
        date: 'Lunes 1 de Julio',
        time: '13:00 (CDMX)',
        stadium: 'Deutsche Bank Park',
        type: 'round8',
        winner: 0,
    },
    {
        num: 42,
        country1: 'Francia', //update
        country2: 'Bélgica', //update
        date: 'Lunes 1 de Julio',
        time: '10:00 (CDMX)',
        stadium: 'Dusseldorf Arena',
        type: 'round8',
        winner: 0,
    },
    {
        num: 43,
        country1: 'Rumania', //update
        country2: 'Países Bajos', //update
        date: 'Martes 2 de Julio',
        time: '10:00 (CDMX)',
        stadium: 'Munich Football Arena',
        type: 'round8',
        winner: 0,
    },
    {
        num: 44,
        country1: 'Austria', //update
        country2: 'Turquía', //update
        date: 'Martes 2 de Julio',
        time: '13:00 (CDMX)',
        stadium: 'Leipzig Stadium',
        type: 'round8',
        winner: 0,
    },
    {
        num: 45,
        winner1: 'W39',
        winner2: 'W37',
        country1: '',
        country2: '',
        date: 'Viernes 5 de Julio',
        time: '10:00 (CDMX)',
        stadium: 'Stuttgart Arena',
        type: 'round4',
        winner: 0,
    },
    {
        num: 46,
        winner1: 'W41',
        winner2: 'W42',
        country1: '',
        country2: '',
        date: 'Viernes 5 de Julio',
        time: '13:00 (CDMX)',
        stadium: 'Volksparkstadion Arena',
        type: 'round4',
        winner: 0,
    },
    {
        num: 47,
        winner1: 'W43',
        winner2: 'W44',
        country1: '',
        country2: '',
        date: 'Sábado 6 de Julio',
        time: '10:00 (CDMX)',
        stadium: 'Dusseldorf Arena',
        type: 'round4',
        winner: 0,
    },
    {
        num: 48,
        winner1: 'W40',
        winner2: 'W38',
        country1: '',
        country2: '',
        date: 'Sábado 6 de Julio',
        time: '13:00 (CDMX)',
        stadium: 'Olympiastadion Berlin',
        type: 'round4',
        winner: 0,
    },
    {
        num: 49,
        winner1: 'W45',
        winner2: 'W46',
        country1: '',
        country2: '',
        date: 'Martes 9 de Julio',
        time: '13:00 (CDMX)',
        stadium: 'Munich Footbal Arena',
        type: 'round2',
        winner: 0,
    },
    {
        num: 50,
        winner1: 'W47',
        winner2: 'W48',
        country1: '',
        country2: '',
        date: 'Miércoles 10 de Julio',
        time: '13:00 (CDMX)',
        stadium: 'BVB Stadion Dortmund',
        type: 'round2',
        winner: 0,
    },
    {
        num: 51,
        winner1: 'W49',
        winner2: 'W50',
        country1: '',
        country2: '',
        date: 'Domingo 14 de Julio',
        time: '13:00 (CDMX)',
        stadium: 'Olympiastadion Berlin',
        type: 'final',
        winner: 0,
    },
];

export const VERSION = '1.0.1'