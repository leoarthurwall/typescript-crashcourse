# Typescript Crashcourse

Welcome to the typescript Crashcourse. The playground where I get to grips with typescript using vanilla JS. The idea is that once I've developed solid foundation TS skills, I'll apply it to my next react.js project. Watch this space...

## setup

- create an index.ts file
- SETUP TSC CONFIG: tsc --init
  - set target to 'es6'
  - uncomment and set  "outDir": "./dist" 
- create dist folder
  - the index.js file will go here when compiled
- create src folder
  - put index.ts file inside
- add an index.html file to the dist folder
 - write 'doc' to get the boilerplate html
 - in the body add a <script src="index.js"></script>
 - NOTE: the browser doesn't read ts files so you need to add the index.js file to the script

---

## compiling

Every time you want to compile your typescript file to JS you need to run the following in the terminal:

- SINGLE COMPILE: tsc
- AUTO COMPILE: tsc --watch

## error checking

  You can check errors using typescript in the code, as any errors will be highlighted.

  Also, you can check for erros in the terminal:
- MANUAL CHECK: run 'tsc index' (file name) in the terminal and you can see any errors within the file
- AUTO CHECK:  run 'tsc --watch index' and errors will automatically be updated in terminal

---

## initialising variables

### basic types

**Number**
e.g.
```
let age: number = 5
```
all variables can also also be initialised like:
```
let age: number
number = 5
```
**String**
```
let firstName: string = 'Leo'
```
**Boolean**
```
let isMale: boolean = true
```
**Any**
any: can be assigned anything and will not throw an error

```
let x: any = 'hello' 
x = 8
```
---

## Arrays

you can assign a type to an array like so:

```
let ids: number[] = [1, 2 ,3 , 4, 5]
```
you could push the following to the array and it would be fine as you are pushing a number
```
ids.push(8)
```
However, if you pushed a different type then you'd get an error
```
ids.push('eight')
```

It's worth noting, that despite getting an error, the incorrectly pushed value will still be pushed to the array
```
console.log(ids)
```
```
[1, 2, 3, 4, 5, 8, 'eight']
```

### Tuple

You can set the multiple types for the array. However, the order must followed what's been predifined:

Good:
```
let person: [number, string, boolean] = [1, 'brad', true]
```
Bad:
```
let people: [number, string, boolean] = [2, 'brad', 'dave']
```

### Array Tuple

You can also have an array of tuples (similar to an array of arrays).

```
let employee: [number, string][]

employee = [
    [1, 'brad'],
    [2, 'John'],
    [3, 'dave'],
]
```
---

## Unions & Enums

### Unions

a union is where a particular variable can hold more than one type

```
let pid: string | number
pid = '22'

```
### enumerated typed (enum)

By default up will be assigned the value of 0 as it's  first in the obect. However you can reassign it's value. e.g. to 1. Now if you console.log(Direction1) it's value will be 1. 

```
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
```
Also, all the subsequent values will adjust correspondingly. So if you ran the following:

```
console.log(Direction1.Right)
```
Right would now be the value of 3 rather than the default value of 2.

You can also assign the enum members other type values such as strings.

---

## Objects

You can set up the object as normal and then set up a seperate object type. then you can addign the type to the object. as follows

```
type User = {
    id: number
    name: string
}

const user: User = {
    id:1,
    name: 'John'
}
```
 ---

## Type Assertion
Type assestions explicitly tell the compiler that we want to treat the entity as a different type

e.g.
```
let cid: any = 1
```
Currently the cid variable has a type set to any, but we've given it a number

We can now type assert in 2 ways. Like so:
```
let customerId = <number>cid
```
Alternatively:
```
let customerId = cid as number
```

Both type assertions will assign the customerId the type of number

If you console.log(customerId), you'll get 1, as customerId has been assigned the value of cid:


However, iof you try reassigning the type to customerId, you'll now get an **error**. e.g.:
```
customerId = 'true'
```

## Functions

### Functions with a return value
you can give a type to both the parameters and the return value in a function.

```
function addNum(x: number, y: number): number {
    return x + y;
}
```
now if you run the following, you'll receive 3
```
console.log(addNum(1, 2))
```

### Functions without a return value
You can also use ts for functions without a return value.  assign the type void to the return value.

```
function log(message: string | number): void {
    console.log(message)
}

log('hello')
```
You can try logging a type which isn't a string or a number and you'll receive an error message.

---

## Interfaces

### Object Interface

An interface is simular to a custom type - it's usually used to give types to objects.

An interface is called 'interface' rather than 'type'

- The ? after age means that the age property is optional, and if age isn't used in the object, no error will flag.
- Also the readonly property prefix before surname means that the property cannot be reassigned a value

```
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
```

### Function Interface

Interfaces can also be used with functions.

```
interface MathFunc {
    (x: number, y: number): number
}
```
You then assign the interface to the function and it will flag an error if the types do not match.

```
const add: MathFunc = (x: number, y: number): number => x + y
console.log(add(1, 2))

const subtract: MathFunc = (x: number, y: number): number => x - y
console.log(subtract(1, 2))
```




