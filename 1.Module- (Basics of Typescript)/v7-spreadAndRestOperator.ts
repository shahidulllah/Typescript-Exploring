{

    //Spread Operator
    const poorUser:string[] = ['adi', 'mono', 'shihab']
    
    const richUser:string[] = ['biplop', 'shopon', 'ontor']
    

    poorUser.push(...richUser)

    //object
    const devs1 = {
        front: 'ROton',
        beck: "samir",
        full: 'monjur'
    }
    const devs2 = {
        telanted: 'asif sheikh',
        weak: "shahidullah",
        mid: 'rafi'
    }

    const devs = {
        ...devs1,
        ...devs2
    }



    //Rest Operator
    const meetFriend = (f1:string, f2:string, f3:string) => {
        console.log(`hi, this is my friends ${f1} ${f2} ${f3}`)
    }
    meetFriend('rabbil', "habib", 'monoj')

    
    const greetFriend = (...f1:string[]) => {
        f1.forEach((f:string) => console.log(`hi, this is my friends ${f1}`))  
    }
    greetFriend('boltu',"montu", 'bablu')

}