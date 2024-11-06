{
    //Type assertion ==> if I know better than typescript then it would be assertion
    let anything:any;

    anything = 'next level developer';
    anything = 444;
    ( anything as number).toExponential


    const kgToGm = (value: number | string |undefined) =>{
        if(typeof value === "string"){
            const convertedM = parseFloat(value) * 1000;
            return `the converted value is : ${convertedM}`
        }
        if(typeof value === 'number'){
            return value *1000;
        }
    }

    const result = kgToGm(1000) as number;


    type CustomError = {
        message: string;
    }
    try {

    }catch(error){
        console.log((error as CustomError ).message);
    };

}