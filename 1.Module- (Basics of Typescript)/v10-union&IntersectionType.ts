{
    //Union Type
    type goodStudent = "graduate" | "honest"
    type badStudent = "noneGraduate" | "disHonest"

    type Student = goodStudent | badStudent;

    const student1: Student = 'noneGraduate'

    type User = {
        name : string;
        email: string;
        gender: "Male" | "female";
        bloodGroup: "A+" | "O+";
    }

    const user: User = {
        name: "Babul",
        email: 'e@gmail.com',
        gender: 'Male',
        bloodGroup: 'A+'
    }

    //Intersection Type
    type User2 = {
        gender: string[];
        bloodGroup1: "A+" 
    }
    type User3 = {
        gender: string[]; 
        bloodGroup2: "O+" 
    }

    type UserPro = User2 & User3;

    const cUser: UserPro = {
        gender:['Male', 'Femle'],
        bloodGroup1: 'A+', 
        bloodGroup2: 'O+', 
    }
}