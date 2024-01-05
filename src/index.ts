import { Animal, tama } from "./animal.js";

// 'tama' cannot be used as a value because it was exported using 'export type'.
// const Cat: Animal = tama;

const myCat: typeof tama = {
    species: 'nora',
    age: 3,
};
