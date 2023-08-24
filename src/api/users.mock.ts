import {IUser} from './IUser';
import {Sex} from './sex.enum';

export const mockUsers: IUser[] = [
    {
        name: 'Dima',
        age: 20,
        sex: Sex.Male,
    },
    {
        name: 'Zhenya',
        age: 21,
        sex: Sex.Male,
    },
    {
        name: 'Vanya',
        age: 35,
        sex: Sex.Male,
    },
    {
        name: 'Katya',
        age: 19,
        sex: Sex.Female,
    },
    {
        name: 'Irina',
        age: 24,
        sex: Sex.Female,
    },
];
