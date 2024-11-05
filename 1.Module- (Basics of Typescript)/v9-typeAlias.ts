{
    //Type alias in object
    type Student = {
        name: string;
        age: number;
        fatherName: string;
        motherName: string;
        isMarried: boolean;
        add(num1:number, num2:number):number
    }

    const student: Student = {
        name: 'Alom',
        age: 25,
        fatherName: 'Kolom',
        motherName: 'Halama',
        isMarried: true,
        add(num1, num2) {
            return num1 + num2
        } 
        
    }



}