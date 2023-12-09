type Animal = {
    tag: "animal";
    species: string;
}
type Human = {
    tag: "human";
    name: string;
}
type User = Animal|Human;

function getUserName(user: User): string {
    switch (user.tag) {
        case "human":
            return user.name;
        case "animal":
            return "名無し";
    }
}

type Robot = {
    tag: "robot",
    name: string;
}
type User2 = Animal|Human|Robot;

function getUserName2(user: User2): string {
    switch (user.tag) {
        case "human":
            return user.name;
        case "animal":
            return "名無し";
        case "robot":
            return user.name;
    }
}
