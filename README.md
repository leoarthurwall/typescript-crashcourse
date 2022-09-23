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

  ## error checking

  You can check errors using typescript in the code, as any errors will be highlighted.

  Also, you can check for erros in the terminal:
- MANUAL CHECK: run 'tsc index' (file name) in the terminal and you can see any errors within the file
- AUTO CHECK:  run 'tsc --watch index' and errors will automatically be updated in terminal
