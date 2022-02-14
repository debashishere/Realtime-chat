# Realtime-chat

1.  Clone the Repo
    run:- git clone <Repo-url>

2.  Install Packages
    run:- npm install
    (ps:- make sure u are at root dir)

3.  run the project
    run:- npm run start

4.  Acess the server
    Goto:- http://localhost:3000/

Dev steeps :-

1. Install nestjs/cli as dev dependency
2. genarte a new nest project
   run:- nest new backend

3. cd into newly genaretd peoject (backend)

4. Install dependencies
   run: npm install

5. Generate a new Websocker Resource
   run: nest g resource chat

6. Restructure project with tests

7. Add migration script
   To run a migration
   run:- npm run typeorm:migration:run

8. Add migration scripts to package.json

   - "pretypeorm": "(rm ormconfig.json || :) && ts-node -r tsconfig-paths/register src/scripts/write-type-orm-config.ts",
   - "typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js",
   - "typeorm:migration:generate": "npm run typeorm -- migration:generate -n",
   - "typeorm:migration:run": "npm run typeorm -- migration:run"

   TO CREATE A MIGRATION
   run:- npm run typeorm:migration:generate -- my_init

   TO RUN A MIGRATION
   run:- npm run typeorm:migration:run

9. Add Auto Run migration for staging/production
   Set ENV_VARIABLE to control if the migration should be auto run or not
   RUN_MIGRATIONS=<0|1>

10. USER AUTHENTICATION AND AUTHORIZATION
    a. Generate a user module
    b. Add a custom repository by extending typeorm repository
    c. Add CRUD operation on user
    d. Integrate with FIREBASE AUTHENTICATION

11. Add Seed Script
