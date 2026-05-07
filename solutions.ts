
//problem -1
const filterEvenNumbers = (input:number[]) : number[] =>{
    return input.filter((n)=> n%2===0 );
}


//problem - 2
const reverseString = (input:string) : string =>{
     
    return [...input].reverse().join("");
}



//problem - 3
type StringOrNumber =  string|number;
const checkType = (input: StringOrNumber):string => {
    
    if(typeof input === "string"){
        return "String";
    } 
        return "Number"    
}



//Problem - 4

const getProperty = <T,K extends keyof T>(object:T , key:K ):T[K] =>{
     return object[key];
}



//problem - 5
interface Book{
  title: string;
  author: string;
  publishedYear: number;
  
}

type BookIsRead =  Book & {
    isRead:boolean
};
const toggleReadStatus = (input:Book) : BookIsRead =>{
   return {
     ...input,
     isRead: true
   }
}



//problem - 6
class Person{
    name:string;
    age:number;
    constructor(name:string , age:number){
       this.name = name;
       this.age = age;
    }
}

class Student extends Person{
    grade:string;
    constructor(name:string , age:number ,grade:string ){
        super(name,age);
        this.grade = grade;
    }
    getDetails():string{
       return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}




// problem-7

const getIntersection = (input1:number[] , input2:number[]):number[] =>{
     
    const result : number[] = input1.filter((val)=>input2.includes(val));
    return [... new Set(result)];
}
