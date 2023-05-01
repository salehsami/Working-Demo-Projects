creating a react project named public with
npx create-react-app public

creating anothe directory named server and jump into that
mkdir server
cd server

then create npm packages in it with default options
npm init --yes

now installing in server directory
npm i express nodemon bcrypt jsonwebtoken cookie-parser cors

add some libraries using 
yarn add react-router-dom axios react-cookie react-toastify mongoose

run public(react) using 
npm start

run server(backend in express) using after adding start script as "start"= "nodemon index.js"

npm start 