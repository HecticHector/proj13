proj12

npm init
npm i chai dotenv express mocha mockgoose moment mongoose nodemon supertest concurrently
npx create-react-app client
rm -rf client/.git

heroku login
git config --list
git remote add origin https://github.com/jojoweirl/


curl -X GET http://localhost:3000/api/v1/notes                   
curl -X POST -H "Content-Type: application/json" --request POST http://localhost:5000/api/v1/notes/ --data '{"name":"note curl 6"}' ; echo


 ! Works but load twice in server.js le console.log par exemple

mkdir /Users/apple/ws/proj13 && cd $_
mkdir ./{controllers,db,models,routes,test}
cp /Users/apple/ws/proj12/{.gitignore,README.md,app.js,config.env,server.js} /Users/apple/ws/proj13/
cp /Users/apple/ws/proj12/controllers/noteController.js  /Users/apple/ws/proj13/controllers/noteController.js
cp /Users/apple/ws/proj12/db/index.js /Users/apple/ws/proj13/db/index.js                                    
cp /Users/apple/ws/proj12/models/noteModel.js /Users/apple/ws/proj13/models/noteModel.js 
cp /Users/apple/ws/proj12/routes/noteRoutes.js /Users/apple/ws/proj13/routes/noteRoutes.js 
npm init -y
npm i chai dotenv express mocha mockgoose moment mongoose nodemon supertest concurrently 
npx create-react-app client


