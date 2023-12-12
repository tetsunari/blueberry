type Human = {
    name: string;
    age: number;
}
function getOneUserName(user1?: Human, user2?: Human): string|undefined {
    if (user1 === undefined && user2 === undefined) {
        return undefined;
    }
    if (user1 !== undefined) {
        return user1.name;
    }
    return user2!.name;
}

function showOneUserName(user1?: Human, user2?: Human): string|undefined {
    if (user1 === undefined && user2 === undefined) {
        return undefined;
    }
    if (user1 !== undefined) {
        return user1.name;
    }
    return (user2 as Human).name;
}

function showOneUserName1(user1?: Human, user2?: Human): string|undefined {
    return user1?.name ?? user2?.name;
}
