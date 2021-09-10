interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClubs?: string[],
}

const messy: Player = {
    name: 'messi',
    club: 'psg',
    salary: 12000,
    wife: 'Nosimon'
}

const hannan: Player = {
    name: 'Abdul Hannan',
    club: 'Bcs',
    salary: 12000,
}

interface employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Developer extends employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const zeku: Developer = {
    name: 'Zukerberg',
    salary: 1100,
    age: 31,
    designation: 'Facebooker',
    language: 'js',
    codeEditor: 'VS Code',
    typingSpeed: 65
}