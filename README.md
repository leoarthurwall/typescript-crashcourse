# Typescript Crashcourse

Welcome to the typescript Crashcourse. The playground where I get to grips with typescript using vanilla JS. The idea is that once I've developed solid foundation TS skills, I'll apply it to my next react.js project. Watch this space...

## setup

### index.ts

- Create an index.ts file in the root directory

### TS config

- Setup tsc config file:

In the terminal:

```
tsc --init
```

In the tsconfig.json file you've just created

- set target to:

```
"target": "ES6",
```

- uncomment and set the outDir to:

```
"outDir": "./dist"
```

- create dist folder in the root dir
  - the index.js file will now go here when compiled
- create src folder in the root dir
  - put index.ts file inside
- add an index.html file to the dist folder
- write 'doc' to get the boilerplate html
- in the body add a:

```
 <script src="index.js"></script>
```

- NOTE: the browser doesn't read ts files so you need to add the index.js file to the script

## compiling

Every time you want to compile your typescript file to JS you need to run the following in the terminal:

SINGLE COMPILE:

```
tsc
```

AUTO COMPILE

```
tsc --watch
```

## error checking

You can check errors using typescript in the code, as any errors will be highlighted.

Also, you can check for erros in the terminal:

MANUAL CHECK:

```
tsc index
```

run 'tsc index' (file name) in the terminal and you can see any errors within the file

AUTO CHECK:

```
tsc --watch index
```

run 'tsc --watch index' and errors will automatically be updated in terminal

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

By default up will be assigned the value of 0 as it's first in the obect. However you can reassign it's value. e.g. to 1. Now if you console.log(Direction1) it's value will be 1.

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

You can also use ts for functions without a return value. assign the type void to the return value.

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

## Classes

Classes are used to create objects. So we can create multiple objects using a class.

```
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}
```

A constructor is a method ahat is basically a function that runs within the class.

A constructor will run whenever an object is instantiated from that class

NOTE: this.id refers to the id of the function it's written within.

To create a new person, we can instantiate the object and run the constructor outside of the class.

NOTE: to create a new Person object, the keyword 'new' needs to be placed before the class name.

```
const Leo = new Person(1, 'Leo Wall')
const Dave = new Person(2, 'Dave Brown')
console.log(Leo, Dave)
```

## Data Modifiers

**aka (access modifiers)**

The class properties are public by default. They can be changed to private or protected.

**Private** - the property will only be accessible within the class.

**Protected** - the property will only be accessible within the class, and its subclasses.

```
class Individual {
    private id: number
    protected name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
}

const Tom = new Individual(1, 'Tom Jones')
const Joe = new Individual(2, 'Joe Brown')
```

So here we have a class, similar to the one created above. Notice how id is 'private' and name is 'protected'

Now if we run:

```
console.log(Tom.id)
```

You will receive the following error message - Property 'id' is private and only accessible within class 'Individual'.
And if we run

```
console.log(Tom.name)
```

You will receive the following error message - Property 'name' is protected and only accessible within class 'Individual' and its subclasses.

### Register( ) method

There are more methods that can be used within a class. Constructor is one, another is the Register method.

```
class Individual {
     id: number
     name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    register(){
        return `${this.name} is now registered`
    }
}
```

If we console.log the following:

```
console.log(Tom.register())
```

We will get recieve this message in the console: Tom Jones is now registered

## Implementing interface to a class

you can implement an interface to a class with ease.

Here's the interface. Notice how we have applied a type to the register method too.

```
interface IdentityInterface {
    id: number
    name: string
    register(): string
}
```

Here's the class. The syntax is as follows: class 'className' implements 'interfaceName'

That's all there is too it.

Now, in this case the register method needs to return a string otherwise an error will flag.

```
class Identity implements IdentityInterface {
     id: number
     name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    register(){
        return `${this.name} is now registered`
    }
}
```

## Extending a class

maybe we want to create an employee class that uses the properties of id & name, and maybe we want to add a position property too.

As we already have an identy class. We can use the properties set there and add to it by making a sub class:

To add a sub class to a class use the following syntax: class 'subClassName' extends 'className'.

We create a constructor to initialise the properties of the new subClass.

As the id and name properties are already initialised in the Identity class, we don't need to reinitialise them in the sub class. Instead we use the 'super( )' method, and add the pre-initialised properties inside.

We initialise the new position property as normal.

T

```
class Employee extends Identity {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}
```

We create a new variable for employee below the subClass

```
const emp = new Employee(3, "Shawn", "Developer")
console.log(emp)
```

The console.log(emp) will display the following: in the console:

```
Employee {id: 3, name: 'Shawn', position: 'Developer'}
```

We can also run the following combinations for our extended class:

```
console.log(emp.register())
console.log(emp.position)
console.log(emp.name)
console.log(emp.id)
```

## Generics

used to build reusable components.

We have a function that concatinates items of an array and puts them into a new array.

```
function getArray(items: any[]): any[] {
    return new Array().concat(items)
}

let numArray = getArray([1,2,3,4])
let strArray = getArray(['leo', 'dave', 'john'])

numArray.push('hello')
```

This is okay, however it doesn't take into account that we might want a specific type for different arrays it produces.

We can fix this...

```
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['leo', 'dave', 'john'])
```

We add the placeholder < T > in angle brackets after the getArray function name and then change the property type from any to 'T'.

Next we assign the type to the function callback, again in angle brackets.

Now, when the function is called, the type needs to be matched to that particular function call.

For instance, if we run:

```
numArray.push('hello')
```

It will flag an error because the numArray is assigned to the type < number >.
