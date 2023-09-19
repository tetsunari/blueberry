type User = {
    name: string;
    age: number;
    premiumUser: boolean;
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary SubmitEvent,14,1
`;

const users: User[] = [];
const split = data.split("\n");
for (const v of split) {
    if (v === '') continue;

    const [name, ageString, premiumUserString] = v.split(",");
    const age = Number(ageString);
    const premiumUser = premiumUserString === "1";

    users.push({
        name,
        age,
        premiumUser
    })
}

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age}) is premium user.`);
    } else {
        console.log(`${user.name} (${user.age} is not premium user.)`)
    }
}

/**
uhyo (26) is premium user.
John Smith (17 is not premium user.)
Mary SubmitEvent (14) is premium user.
 */