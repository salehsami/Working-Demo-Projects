Thanks to Traversery Media for this beautiful and helpfull tutorial
for guidance: 
part 1: https://www.youtube.com/watch?v=-0exw-9YJBo&list=RDCMUC29ju8bIPH5as8OGnQzwJyA&index=3
https://github.com/bradtraversy/mern-tutorial

install dependencies in main folder by npm i
express
cors
mongoose
colors
dotenv
-D nodemon
mongodb

Add .gitignore files and add
node_modules
.env

run server by: npm run server



complete the backend now come to front end

on the root do
where frontend is name and redux template  is added cuz we use redux for our state mnagement instead of context

npx create-react-app frontend --template redux
or
npx create-react-app@latest frontend --template redux

after it    
cd frontend
npm start

npm i react-icons
npm i react-router-dom


now
we want to run our project with a single command both frontend and backend
so we do
in root 
npm i -D concurrently
and add it in pacjage.json
"dev":"concurrently \"npm run server\" \"npm run client\""
now we can run using a single command 
npm run dev

in frontend also add
npm i axios react-toastify