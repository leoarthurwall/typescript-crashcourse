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
ids.push('eight')
console.log(ids)

let arr: any[] = [1, true, 'hello']

// tuple - can set the type. Must be in the predifined order however
let person: [number, string, boolean] = [1, 'brad', true]
let people: [number, string, boolean] = [2, 'brad', 'dave']

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
