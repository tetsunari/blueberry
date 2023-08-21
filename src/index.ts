type HasName = {
    name: string;
};
type Family<Parent extends HasName, Child extends HasName> = {
    mother: Parent;
    father: Parent;
    child: Child;
};
// type T = Family<number, string>; // error

type Animal = {
    name: string;
};
type Human = {
    name: string;
    age: number;
};
type T1 = Family<Animal, Human>;

type Family1<Parent extends HasName, Child extends Parent> = {
    mother: Parent;
    father: Parent;
    child: Child;
};
type S = Family1<Animal, Human>;
// type T2 = Family1<Human, Animal>; // error