{
    //Ternary operator
    const age = 20;
    const isAdult = age >= 18 ? "Adult" : "Child";

    // console.log(isAdult);


    //Nullish Coaliscing operator
    //null / undefined ==> decision making
    const isAuth = undefined;
    const res = isAuth ?? "Special";
    const res2 = isAuth ? isAuth : "Guest"
    // console.log({ res }, { res2 });


    //Optional Chaining
    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAdress: string;
            permanentAdress: string;
        }
    }
const user: User = {
    name: 'golam',
    address: {
        city: "Nai",
        road: "344",
        presentAdress: 'Mymensingh',
        permanentAdress: 'Jamalpur'
    }
}

const pmAddress = user?.address?.presentAdress ?? "no perment address";

console.log({pmAddress});

}