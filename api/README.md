# BACKEND
The API is created using NodeJs.

## TIPS
if any import have problem because the @types, just write the command `npm install @types/"the import name" -D`, the `-D` is because you just have to use it in development ambient, when the project go to production, is converted to `Javascript`, so you don't have this type of problem.

## DEPENDENCES
- Express (using typescipt, dont't forget to run `npm install @types/express -D`, so you can find the dependence)
- ts-node
- ts-node-dev
- typescript
- knex
- sqlite3
- cors
- multer
- celebrate

## TYPESCRIPT
The Typescript package is the first package to install, without it, you'll cannot run Typescript applications, to begin, you need to create a Typescript config file, just write in terminal `npx tsc --init`, to create `tsconfig.json`. 

## TS-NODE
After install Typescript package, you have to install this package, with it you can run NodeJs applications created with Typescript, to install tap `npm install ts-node -D` in terminal, -D is important, it serves for uses the packages only in develop mode. 

To run the application just tap `npx ts-node "index path"`, npx because without it, you'll have to  write all the path.

## TS-NODE-DEV
This package will be observing all your alterations in the API, and will restart it ever you save it, so you don't have to restart manually, to install the dependence write in terminal `npm install ts-node-dev -D`, -D because you only use it in develop mode. 

To start the api just write in terminal `npx ts-node-dev "index path"`.

You can include a script in package.json, to simplify, you don't have to write npx, just like this example:
 
    "scripts": {
        "dev": "ts-node-dev src/server.ts"
    }

With this script write `npm run dev`, and the ts-node-dev going to start. 

## KNEX
Knex is a SQL builder, that you can work with SQL in a unified way. You install it with the command `npm install knex`, after install, don't forget to create the file to configure knex and execute the sql commands, in this project I created `knexfile.ts` in main path. 

After created and configured run the command `npx knex --knexfile "path of configure file" migrate:latest`. If you do right will be created the database file, in this project was created `database.sqlite`. 

With Knex you can start a table with rows, using seed, create a table named seeds the file, don't forget the seed line in `knexfile`, after do all, just write in terminal `knex --knexfile knexfile.ts seed:run`.

A tip is create a script to facilitate and you only have to write `npm run "script name"`, like in the example:

    "scripts": {
        "dev": "ts-node-dev src/server.ts",
        "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
        "knex:seed": "knex --knexfile knexfile.ts seed:run"
    },

## MULTER
Multer is a package to work with images upload, to install it is `npm install multer`.

## CELEBRATE
Celebrate is an express middleware, you use it in a single route, or globally, and will see if your inputs are corrects, to install it write `npm install celebrate --save`. 

Sometimes the intelicense won't get the functions in typescript, so, write this command `npm install @types/hapi__joi -D`. 

To se the documentation access the link `https://github.com/arb/celebrate`.