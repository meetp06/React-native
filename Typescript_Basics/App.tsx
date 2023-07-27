import { View } from "react-native";

// create a component
const App = () => {

   let name: String = "Meet";

   name = "Meet Patel"
   // console.log(typeof (name));

   let age; // we can define 
   // const firstAlphabet; // values does'nt declare another line only declare same line

   const binaryInformation: number = 1110100101010;
   const details: String = `Hello everyone 
   my name is Meet Patel
   i am flutter developer`
   // console.log(details);

   const buttonIsTaped: boolean = true;

   //Array of method1
   const arr: Array<String> = ['1', '2']
   const arrayOfnumber: Array<number> = [1, 2]
   //method2
   const arr1: String[] = ['1', '2']
   const arrayOfnumber2: number[] = [1, 2]
   // console.log(arr, arr1);

   let Hello;
   // console.log(Hello);

   let n: null = null;

   enum indexOfFruit {
      banana,
      orange,
      kivi,
      lichi
   }
   // console.log(indexOfFruit);
   // console.log(typeof (indexOfFruit));

   type personalInformation = {
      firstName: String
      lastName: []
   }

   const obj: personalInformation = {
      firstName: "Meet",
      lastName: []
   }

   // console.log(obj);

   const arr5: Array<number> = [1, 2, 3, 4, 5, 6]
   // console.log(arr5);

   const object = {
      name: 'meet',
      id: 5
   }
   // console.log(object.name);

   interface User {
      firstName: String,
      lastName: String,
      age: number
   }

   const user: User = {
      firstName: 'Meet',
      lastName: 'undefined',
      age: 0
   }

   // console.log(user.firstName);

   type woodList = {
      nopau: String
      wokano: String,
   }

   const wood: woodList = {
      wokano: '789',
      nopau: 'joi'
   }

   // console.log(typeof (wood.wokano));


   interface User1 {
      name: string;
      id: number;
   }

   interface User2 extends User1 {
      username: number;
   }

   const user1: User2 = {
      username: 996,
      id: 0,
      name: 'ali'
   };



   interface User3 {
      name: string;
      id: number;
   }

   class UserAccount {
      name: string;
      id: number;

      constructor(name: string, id: number) {
         this.name = name;
         this.id = id;
      }
   }

   const user3: User3 = new UserAccount('gregv', 45)
   // console.log(user3);

   type currentMyDeskPosition = true | false
   type WindowStates = "open" | "closed" | "minimized";

   const multiType: [String, number] = ['multi', 456]

   enum Color { ehy5y, yhby = 4, by6h6y }

   let z: Color = Color.yhby + 2;
   console.log(z);
   console.log(Color.by6h6y);
   console.log(Color.ehy5y);

   class Meet {
      first: number;
      second: number;

      constructor(first: number, second: number) {
         this.first = first;
         this.second = second;
      }
   }

   // const variable: unknown = 10;
   // const myFunction = (obj: any): obj is { name: string } => {
   //    return !!obj && 'name' in obj
   // }
   // if (myFunction(variable)) console.log(variable.name);
   // (variable as string).toUpperCase()

   let newVar1;
   newVar1 = 10;
   newVar1 = true;

   let newVar2 = 50;
   // newVar2 = true

   let newVar3: number | string | Array<string>
   newVar3 = 'ojhj'
   console.log(newVar3.includes('o', 0));

   let newVar4: any = 45;
   // newVar4. //*here no suggestion after . if we want so use union

   //*function

   const calculation = (num1: number, num2?: number) => {
      if (num1) {
         return num1
      } else {
         return num2
      }
   }
   calculation(5,)


   //*method 1
   // const Person = (info: { firstName: string, lastname?: string }) => {
   //    console.log(`${info.firstName} ${info.lastname}`);
   // }

   // let p = {
   //    firstName: 'meet',
   //    // lastname: 'Patel'
   // }

   // Person(p)

   //*method2

   interface Person {
      firstName: string,
      lastname?: string
   }
   const PersonFunction = (info: Person) => {
      console.log(`${info.firstName} ${info.lastname}`);
   }
   let p = {
      firstName: 'meet',
      // lastname: 'Patel'
   }
   PersonFunction(p)

   let coordinates: [number, number] = [10, 20]; // a tuple representing x and y coordinates
   let person: [string, number] = ["Alice", 25]; // a tuple representing a person's name and age
   console.log(person);

   let add: (x: number, y: number) => number = (x, y) => x + y; // a function that adds two numbers


   class Person1 {
      name: string;
      age: number;

      constructor(name: string, age: number) {
         this.name = name;
         this.age = age;
      }
   }

   let person1: Person1 = new Person1("Alice", 25); // creating a new Person object

   let someValue: any = "Hello, TypeScript!";
   let strLength: number = (someValue as string).length;
   console.log(strLength);


   let sum = (x: number, y: number): number => {
      return x + y
   }
   console.log(sum(5, 6));

   let sum1 = (x: number, y: number): number => x * y
   console.log(sum1(4, 5));

   //--------------------------------------------
   return (
      <View />
   )
};
export default App;
