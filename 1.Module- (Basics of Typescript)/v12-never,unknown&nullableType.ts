{
    //nullable type
    const searchName = (value: string | null) => {
        if (value) {
            console.log("searching");
        } else {
            console.log("nothing to search");
        }
    }

    searchName(null)

    //Unknown Type
    const getSpeed = (value: unknown) => {
        if (typeof value === 'number') {
            const convertedNum = (value * 1000) / 3600;
            console.log(`The speed is ${convertedNum}`);
        }
        else if (typeof value === 'string') {
            const [val, unit] = value.split(' ');
            const convertedNum = (parseFloat(val) * 1000) / 3600;
            console.log(`The speed is ${convertedNum} ${unit}`);
        }
        else {
            console.log("wrong input");
        }
    }

    getSpeed("45 ms")


    //Never type ===> It's never returns any type forever.
    const throwError = (msg:string) =>{
        throw new Error(msg);
    }

    throwError('Galti se Mistake hogaya')

}