export type Animal = {
    species: string;
    age: number;
};

type Animal2 = {
    species: string;
    age: number;
};
const tama: Animal2 = {
    species: 'Felis silvestris catus',
    age: 3,
};
export { Animal2, tama };
