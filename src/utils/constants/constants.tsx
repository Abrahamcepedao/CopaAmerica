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
        img: '/img/countries/argentina.png',
        name: 'Argentina',
    },
    {
        img: '/img/countries/brasil.png',
        name: 'Brasil',
    },
    {
        img: '/img/countries/canada.png',
        name: 'Canadá',
    },
    {
        img: '/img/countries/costa_rica.png',
        name: 'Costa Rica',
    },
    {
        img: '/img/countries/ecuador.png',
        name: 'Ecuador',
    },
    {
        img: '/img/countries/jamaica.png',
        name: 'Jamaica',
    },
    {
        img: '/img/countries/mexico.png',
        name: 'México',
    },
    {
        img: '/img/countries/uruguay.png',
        name: 'Uruguay',
    },
    {
        img: '/img/countries/us.png',
        name: 'Estados Unidos',
    },
    {
        img: '/img/countries/venezuela.png',
        name: 'Venezuela',
    },
];

export const games: IGame[] = [
    {
        num: 25,
        winner1: 'W39',
        winner2: 'W37',
        country1: 'Argentina',
        country2: 'Ecuador',
        date: 'Jueves 4 de Julio',
        time: '20:00 (CDMX)',
        stadium: 'NRG Stadium - Houston, TX',
        type: 'round4',
        winner: 0,
    },
    {
        num: 26,
        winner1: 'W41',
        winner2: 'W42',
        country1: 'Venenzuela',
        country2: 'Canadá',
        date: 'Viernes 5 de Julio',
        time: '20:00 (CDMX)',
        stadium: 'AT&T Stadium - Arlington, TX',
        type: 'round4',
        winner: 0,
    },
    {
        num: 27,
        winner1: 'W43',
        winner2: 'W44',
        country1: 'Uruguay',
        country2: 'Brasil',
        date: 'Sábado 6 de Julio',
        time: '18:00 (CDMX)',
        stadium: 'Allegiant Stadium - Las Vegas, NV',
        type: 'round4',
        winner: 0,
    },
    {
        num: 28,
        winner1: 'W40',
        winner2: 'W38',
        country1: 'Colombia',
        country2: 'Estados Unidos',
        date: 'Sábado 6 de Julio',
        time: '15:00 (CDMX)',
        stadium: 'State Farm Stadium - Glendale, AZ',
        type: 'round4',
        winner: 0,
    },
    {
        num: 29,
        winner1: 'W25',
        winner2: 'W26',
        country1: '',
        country2: '',
        date: 'Martes 9 de Julio',
        time: '20:00 (CDMX)',
        stadium: 'MetLife Stadium - East Rutherford, NJ',
        type: 'round2',
        winner: 0,
    },
    {
        num: 30,
        winner1: 'W27',
        winner2: 'W28',
        country1: '',
        country2: '',
        date: 'Miércoles 10 de Julio',
        time: '20:00 (CDMX)',
        stadium: 'Bank of America Stadium - Charlotte, NC',
        type: 'round2',
        winner: 0,
    },
    {
        num: 31,
        winner1: 'L29',
        winner2: 'L30',
        country1: '',
        country2: '',
        date: 'Miércoles 10 de Julio',
        time: '20:00 (CDMX)',
        stadium: 'Bank of America Stadium - Charlotte, NC',
        type: 'third',
        winner: 0,
    },
    {
        num: 32,
        winner1: 'W29',
        winner2: 'W30',
        country1: '',
        country2: '',
        date: 'Domingo 14 de Julio',
        time: '13:00 (CDMX)',
        stadium: 'Hard Rock Stadium - Miami, FL',
        type: 'final',
        winner: 0,
    },
];

export const VERSION = '1.0.1'