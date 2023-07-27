// const customLogType = (variable: unknown): void => {
//   console.log('====================================');
//   console.log(variable, '=>', typeof variable);
//   console.log('====================================');
// };

// let message: string = 'Hello!!';
// message = 123 as any;

// let sales: number = 123;
// // sales= "123"

// let bool = true; // implicit type inference to boolean
// customLogType(bool);

// let me; // typescript assumes type as any

// let myvariable: any;
// customLogType(myvariable);
// myvariable = 'Qaisar';
// customLogType(myvariable);
// myvariable = 1 as any;
// customLogType(myvariable);

// // in unknown we cannot access property of variable declared as type unknown like property of string before specifying type
// const myFunc = (oneVar: unknown) => {
//   if (typeof oneVar === 'string') console.log(oneVar.length);
//   if (typeof oneVar === 'number') oneVar * 2;
// };

// // in any it will allow accessing the property of variable
// const myFunc2 = (oneVar: any): void => {
//   console.log(oneVar.length);
// };

// // let x: never = 'Bad'

// //* type assertion
// let v: any = 'ShortCut';
// console.log('====================================');
// console.log((v as string).length);
// console.log('====================================');

// let names: string[] = [];
// // names.push(1); // gives error because it is string array
// names.push('Qaisar'); // no error

// let numbers = [1, 2, '3', true, [1, 2, '3']];

// let readArr: readonly string[] = [
//   'qaisar',
//   'khyati',
//   'nishi',
//   'jigar',
//   'meet',
//   'harsh',
//   'vijay',
//   'ami',
//   'niyanta',
//   'darshan',
//   'ronak',
// ];

// // readArr.push('newone') // error because it is read only
// // readArr[5] = '' // error

// let myTuple: [number, string];
// myTuple = [1, 'JSR'];

// type VoidF = (v: string) => void;
// function calculationFunction(x: number, b: number): VoidF {
//   // let c = 1; // declared but never used
//   //   if (x < 10) return x;
//   //   else return x + '';
//   // return x * b;
//   return customLogType;
// }

// for (let i: number = 0; i < 5; i++) {
//   console.log('====================================');
//   console.log(typeof i);
//   console.log('====================================');
// }

// // let myName: string = 'Qaisar';
// // myName = 1;

//////// Day 1 TS Advance

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
