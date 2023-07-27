import { useState } from 'react';
import { Text, View } from 'react-native';

namespace MyNamespace {
  export const myVariable: number = 42;

  export function myFunction(): void {
    console.log('Hello from MyNamespace! ' + myVariable);
  }

  export class PersonClass {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello(): void {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    }
  }
}

const NewHome = () => {
  const numberVar: number = 18;
  const stringVar: string = 'Hello';
  const booleanVar: boolean = true;
  const arrayVar: Array<string> = ['a', 'b', 'c', 'd'];
  const numberArray: number[] = [1, 2, 3, 4, 5];
  const tupleVar: [number, string, boolean] = [18, 'Cool', true];
  enum Color {
    Red,
    Green,
    Blue,
  }
  //   console.log(Color);

  enum HTTPMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
  }
  //   axios.request({
  //     url: '/users',
  //     method: HTTPMethod.GET,
  //   });

  type ObjectType = {
    id: number;
    name: string;
  };

  let unionVar: object | number = 10;
  unionVar = {
    id: 10,
    name: 'Div',
  };
  //   unionVar.id;
  //   unionVar = 'String';

  let objectVar: object = { id: 10 };

  let unionObj: ObjectType | null = null;
  unionObj = {
    id: 18,
    name: 'Cool',
  };
  const nameVar = unionObj.name;
  const [user, setUser] = useState<ObjectType | null>(null);
  const stateName = user?.id;

  type Person = {
    id: number;
    name: string;
    message?(): void;
    address?: {
      street: string;
      city: string;
    };
  };
  const person: Person = {
    id: 1,
    name: 'John Doe',
    message: (): void => {
      console.log('first');
    },
  };
  const cityName = person.address?.city;

  const myFunc = (): void => {
    console.log('function');
  };

  //   const neverVar: never = '18';
  type Fruit = 'apple' | 'banana' | 'orange';

  function getFruitColor(fruit: Fruit): string {
    switch (fruit) {
      case 'apple':
        return 'red';
      case 'banana':
        return 'yellow';
      case 'orange':
        return 'orange';
      default:
        const exhaustiveCheck: never = fruit;
        throw new Error(`Unhandled fruit: ${exhaustiveCheck}`);
    }
  }
  //   getFruitColor('hello');

  let myObj = {
    id: 18,
    name: 'Div',
  };
  //   myObj = 10;

  type UserBasics = {
    firstname: string;
    lastname: string;
  };

  type UserAdvance = {
    age: number;
    phone: number;
  };

  type User = UserBasics | UserAdvance;

  const userObj: User = {
    firstname: 'Div',
    lastname: 'Rajput',
    age: 20,
    phone: 9686655555,
  };

  console.log('====================================');
  console.log(userObj);
  console.log('====================================');

  type MathOperation = (x: number, y: number) => number;
  const add: MathOperation = (x, y) => x + y;
  add(5, 6);

  type Colors =
    | 'Red'
    | 'Green'
    | 'Blue'
    | null
    | undefined
    | ('Blue' & {
        id: number;
      });
  const userColor: Colors = null;

  type AnimalType = {
    color: string;
    behaviour: 'Good' | 'Bad';
  };

  const myAnimal:
    | AnimalType
    | {
        name: string;
      } = {
    // name: 'Tiger',
    color: 'Orange',
    behaviour: 'Good',
  };
  //   myAnimal.behaviour;
  //   myAnimal.behaviour;

  interface PersonType {
    name: string;
    age: number;
    greet(): void;
  }

  interface PersonType {
    salary: number;
    company: string;
  }

  interface Employee extends PersonType {
    role: string;
  }

  const employee: Employee = {
    name: 'ABC',
    age: 20,
    company: 'Simform',
    salary: 20000,
    greet: () => console.log('Employee'),
    role: 'Developer',
  };

  type MappedType<T> = {
    [K in keyof T]: T[K] extends string ? string : number;
  };

  interface MappedObj {
    name: string;
    age: number;
    city: string;
  }

  type StringPropertiesOnly = MappedType<MappedObj>;

  const mapObj: StringPropertiesOnly = {
    age: 10,
    city: 'city',
    name: '10',
  };

  const x: unknown = 'hello';
  (x as string).length;

  type PartialType = {
    id: number;
    name: string;
    age: number;
  };

  const partialObj: Partial<PartialType> = {
    id: 10,
  };

  type RequiredType = {
    id: number;
    name?: string;
    age?: number;
  };

  const requiredObj: Required<RequiredType> = {
    id: 18,
    name: 'Div',
    age: 20,
  };
  requiredObj.id = 20;

  type ReadonlyType = {
    id: number;
    name: string;
  };

  const readObj: Readonly<ReadonlyType> = {
    id: 18,
    name: 'Div',
  };
  //   readObj.id = 20;

  type RecordType = {
    age: number;
    name: string;
  };
  type RecordKeys = '1' | '2' | '3';

  const recordObj: Record<RecordKeys, RecordType> = {
    1: { age: 10, name: 'aaa' },
    2: { age: 15, name: 'bbb' },
    3: { age: 20, name: 'ccc' },
  };

  type PickType = {
    title: string;
    description: string;
    completed: boolean;
  };

  type PickTodo = Pick<PickType, 'title' | 'completed'>;

  const todoPick: PickTodo = {
    title: 'abc',
    completed: false,
    // description: 'hello',
  };

  type OmitType = {
    title: string;
    description: string;
    completed: boolean;
  };

  type OmitTodo = Omit<OmitType, 'title' | 'completed'>;

  const todoOmit: OmitTodo = {
    // title: 'abc',
    // completed: false,
    description: 'hello',
  };

  type KeyofType = {
    id: number;
    name: string;
    age: number;
    phone: number;
  };
  type KeysType = keyof KeyofType;
  const keyName: KeysType = 'name';

  let myNullVar: number | null = null;

  const objFunc = (
    id: number = 10,
    name: string
  ): { id?: number; name: string } => {
    return { id: id, name: name };
  };
  const obj = objFunc(undefined, 'Ronak');

  const callbackFunc = (
    func: (id: number) => number
  ): ((id: number) => number) => {
    return func;
  };
  const returnFunc = callbackFunc((num) => num);
  const numFuncValue = returnFunc(18);

  function processInput(input: string): void;
  function processInput(input: number): number;
  function processInput(input: any): any {
    return input;
  }

  const restFunc = (a: number, ...rest: number[]) => {
    // console.log(a, ...rest);
  };
  restFunc(1, 2, 3, 4, 5, 6);
  interface NumList {
    [index: number]: string;
    arr?: number[];
  }
  const arrNum: NumList = { arr: [1, 2, 3] };
  // [];
  // {arr: [1, 2, 3], 0: '1', 1: '2', 2: '3'};
  // console.log(arrNum);

  interface UserInterface {
    id: number;
    name: string;
  }

  interface UserInterface {
    id: number;
    name: string;
    age: number;
  }

  const UserInterfaceObj: UserInterface = {
    id: 18,
    name: 'Ronak',
    age: 20,
  };

  MyNamespace.myFunction();
  const personObj = new MyNamespace.PersonClass('John', 25);
  personObj.sayHello();

  abstract class Animal {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
    abstract makeSound(): void;
  }

  class Dog extends Animal {
    makeSound(): void {
      console.log('Make sound', this.name);
    }
  }

  const dog = new Dog('Max');
  dog.makeSound();

  interface PersonInterface {
    name: string;
    display: () => void;
  }

  interface EmployeeInterface {
    empCode: number;
  }

  class EmployeeClass implements PersonInterface, EmployeeInterface {
    empCode: number;
    name: string;

    constructor(empcode: number, name: string) {
      this.empCode = empcode;
      this.name = name;
    }

    display(): void {
      console.log('Name = ' + this.name + ', Employee Code = ' + this.empCode);
    }
  }

  const per: PersonInterface = new EmployeeClass(100, 'Bill');
  per.display();

  interface IEmployee {
    readonly empCode: number;
    empName: string;
  }

  const empObj: IEmployee = {
    empCode: 1,
    empName: 'Steve',
  };

  // empObj.empCode = 100;
  empObj.empName = 'Ronak';

  class Circle {
    static pi: number = 3.14;
    static display(): void {
      console.log('PI value is : ', this.pi);
    }
  }
  Circle.display();

  return (
    <View>
      <Text>NewHome</Text>
    </View>
  );
};

export default NewHome;
/*
 
*/
