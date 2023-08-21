type Animal = {
    name: string;
};
type Family<Parent = Animal, Child = Animal> = {
    mother: Parent;
    father: Parent;
    child: Child;
};
type S = Family<string, string>
type T = Family;
type U = Family<string>;

type Family1<Parent, Child = Animal> = {
    mother: Parent;
    father: Parent;
    child: Child;
};

type HasName = {
    name: string;
};
type Family2<Parent extends HasName, Child extends HasName = Animal> = {
    mother: Parent;
    father: Parent;
    child: Child;
};