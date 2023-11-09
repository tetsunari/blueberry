type HasName = {
    name: string;
}

class User implements HasName {
    name: string;
    #age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.#age = age;
    }

    public isAdult(): boolean {
        return this.#age >= 20;
    }
}


type HasNameError = {
    name: string;
}

// Error: Property '#age' is missing in type 'UserError' but required in type 'User'.
class UserError implements HasNameError {
    #age: number;

    constructor(age: number) {
        this.#age = age;
    }

    public isAdult(): boolean {
        return this.#age >= 20;
    }
}
