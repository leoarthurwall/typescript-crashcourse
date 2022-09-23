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


## compiling

Every time you want to compile your typescript file to JS you need to run the following in the terminal:

- SINGLE COMPILE: tsc
- AUTO COMPILE: tsc --watch

## error checking

  You can check errors using typescript in the code, as any errors will be highlighted.

  Also, you can check for erros in the terminal:
- MANUAL CHECK: run 'tsc index' (file name) in the terminal and you can see any errors within the file
- AUTO CHECK:  run 'tsc --watch index' and errors will automatically be updated in terminal


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

