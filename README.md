# Ecoleta
Ecoleta is a platform created in NextLevelWeek course, to help people garbage collection points.

## Definitions
This platform is created with typescript.

--------

## BACKEND
The API is created using NodeJs.

## DEPENDENCES
- Express (using typescipt, dont't forget to run `npm install @types/express -D`, so you can find the dependence)
- ts-node
- ts-node-dev
- typescript

## TYPESCRIPT
The Typescript package is the first package to install, without it, you'll cannot run Typescript applications, to begin, you need to create a Typescript config file, just write in terminal `npx tsc --init`, to create `tsconfig.json`. 

## TS-NODE
After install Typescript package, you have to install this package, with it you can run NodeJs applications created with Typescript, to install tap `npm install ts-node -D` in terminal, -D is important, it serves for uses the packages only in develop mode. To run the application just tap `npx ts-node "index path"`, npx because without it, you'll have to  write all the path.

## TS-NODE-DEV
This package will be observing all your alterations in the API, and will restart it ever you save it, so you don't have to restart manually, to install the dependence write in terminal `npm install ts-node-dev -D`, -D because you only use it in develop mode. To start the api just write in terminal `npx ts-node-dev "index path"`.
You can include a script in package.json, to simplify, you don't have to write npx, just like this example:
 
    "scripts": {
        "dev": "ts-node-dev src/server.ts"
    }

With this script write `npm run dev`, and the ts-node-dev going to start. 

--------

# WEB
The web application is created with React, to create a project using Typescript write in terminal `npx create-react-app web --template=typescript`, don't forget the `--template=typescript`. 

