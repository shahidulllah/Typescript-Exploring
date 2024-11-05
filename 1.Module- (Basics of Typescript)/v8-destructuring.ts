{

    //object destructuring
    const user = {
        id: 122,
        name: {
            firstName: "Md",
            middleName: "Komol",
            lastName: "Hasan"
        },
        age: 25,
        description: 'This is very interesting'
    }

    const {age, name:{firstName: st}} = user;


    //array destructuring
    const friends = ['monica', 'recheal', 'ross', 'mokbul', 'abdul']

    const [,,,mon, ...re] = friends;

    console.log(mon, re);
}