//VARIABLES

// Basic Types
let id: number = 5
// console.log('ID:', id)
let firstName: string = 'Leo'
let isMale: boolean = true

let x: any = 'hello' // any: can be assigned anything
x = 8

let age: number
age = 30

//ARRAYS

let ids: number[] = [1, 2 ,3 , 4, 5]
ids.push(8)
// ids.push('eight')
console.log(ids)

let arr: any[] = [1, true, 'hello']

// tuple - can set the type. Must be in the predifined order however
let person: [number, string, boolean] = [1, 'brad', true]
// let people: [number, string, boolean] = [2, 'brad', 'dave']

// tuple array - you can specify the varible type and order of an array of arrays
let employee: [number, string][]

employee = [
    [1, 'brad'],
    [2, 'John'],
    [3, 'dave'],
]
console.log(employee)

//Union - variable can hold more than one type
let pid: string | number
pid = '22'

//Enum

enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction1.Up)
//by default Up = 0
//however you can addign Up a different number, e.g. 1

console.log(Direction1.Right)
//now right will have a value of 4 rather than the default 3

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}
console.log(Direction2.Left)

// OBJECTS  
// you can set up the object as normal and then set up a seperate object type. then you can addign the type to the object. as follows

type User = {
    id: number
    name: string
}

const user: User = {
    id:1,
    name: 'John'
}

// TYPE ASSERTION
//explicitly telling the compiler that we want to treat the entity as a different type

let cid: any = 1
let customerId = <number>cid
// let customerId = cid as number
console.log(customerId)

//FUNCTIONS
// you can give a type to both the parameters and the return value in a function

function addNum(x: number, y: number): number {
    return x + y;
}
console.log(addNum(1, 2))

function log(message: string | number): void {
    console.log(message)
}

log('hello')

//INTERFACES
// similar to a custom type - usually used with objects

interface UserInterface {
    id: number
    name: string
    age?: number
    readonly surname: string
}

const user1: UserInterface = {
    id:1,
    name: 'John',
    surname: 'doe'
}

// can also be used with functions

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
console.log(add(1, 2))

const subtract: MathFunc = (x: number, y: number): number => x - y
console.log(subtract(1, 2))
