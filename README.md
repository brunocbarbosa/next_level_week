# Ecoleta
Ecoleta is a platform created in NextLevelWeek course, to help people find seletive collection points.

## Definitions
This platform is created with typescript, the Backend using NodeJs, in Frontend the web using React and mobile ReactNative.
To se complete information about each one of then, see readme in their directory.

## How to work
After clone the repository at `https://github.com/BrunoCBarbosa/ecoleta_next_level_week.git`, don't forget the command `npm install` in each directory, api, web and mobile. 

To run them the api go to /api and run in terminal `npm run dev` or `yarn dev`, to run web or mobile, just go to /web, or go to /mobile and run in terminal `npm start`.

Finally to create the database you have to run two commands, the first is `npm run knex:migrate`, this command will create the database your tables, after that run `npm run knex:seed`, this will create the items in table `Items`.
