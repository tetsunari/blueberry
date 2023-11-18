class User {
    readonly name: string
    readonly age: number

    constructor(name: string, age: number) {
        if (name === '') {
            throw new Error('名前を空にはできません！')
        }
        this.name = name
        this.age = age
    }

    getMessage(message: string): string {
        return `${this.name} (${this.age}) 「${message}」`
    }
}

const uhyo = new User('uhyo', 30);
console.log(uhyo.getMessage('こんにちは！'));

function createUser(name: string, age: number) {
    return (message: string) => {
        return `${name} (${age}) 「${message}」`
    }
}
const getMessage = createUser('uhyo', 30);
console.log(getMessage('こんにちは！'));
