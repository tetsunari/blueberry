type Animal = {
    tag: "animal",
    species: string,
}
type Human = {
    tag: "human",
    name: string,
}
type User = Animal | Human;

const tama: User = {
    tag: "animal",
    species: "Felis silvestris catus",
};
const uhyo: User = {
    tag: "human",
    name: "uhyo",
};
// const alien: User = {
//     // error: Property 'species' is missing in type '{ tag: "animal"; name: string; }' but required in type 'Animal'.
//     tag: "animal",
//     name: "gray",
// };

function getUserName(user: User): string {
    if (user.tag === "human") {
        return user.name;
    } else {
        return "名無し";
    }
}
const tama: User = {
    tag: "animal",
    species: "Felis silvestris catus",
};
const uhyo: User = {
    tag: "human",
    name: "uhyo",
};
console.log(getUserName(tama)); // 名無し
console.log(getUserName(uhyo)); // uhyo
