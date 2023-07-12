# Quiz-Maker

This is a web-based application to facilitate the procedure to conduct online exams. One can make, edit and delete questions and quizzes alike
using this website for assessment. All users are required to register with this site in order to use the application. All users can attempt
quizzes but only users with an `admin` role can edit or make quizzes. There is also a dashboard that tells the score accumulated after 
finishing attempting a quiz.

I first started off by making the front end of the project using [antd](https://ant.design/) elements and [
CSS](https://en.wikipedia.org/wiki/CSS). I developed the home screen, the login screen, and the registration screen. 
Then, I made a server using [Node.js](https://en.wikipedia.org/wiki/Node.js) and established a connection using 
[MongoDB](https://www.mongodb.com/). Then, I worked on the login and registration page backend, making 
[APIs](https://en.wikipedia.org/wiki/API) and integrating the APIs. Then, I worked on creating functionalities like adding exams, editing and
deleting exams, adding questions to an exam, and deleting questions from an exam. Then I worked on the process of giving an exam on the 
platform. Finally, I worked on calculating and displaying the result of a quiz attempt to the user.

# Features
1. **Login and Registration**: A new user can register on the platform while an existing user has to `log-in` to the platform, and can `log-out` of the platform.
2. **Role allocation**: There are two roles: `admin` and `normal-user` which decide whether a user can create quizzes or not.
3. **Adding, Editing, and Deleting a Quiz**: An `admin` can modify a quiz according to his wish.
4. **Adding, Editing, and Deleting a question**: An `admin` can modify a question according to his wish.
5. **Attempting a quiz**: A `normal-user` can attempt any available quiz, which is a timed quiz, where he can assess his score laterwards.

# Dependencies 
1. [Node.js](https://nodejs.org/en)
2. [React](https://react.dev/)
3. [antd](https://ant.design/)
4. [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
5. [Express](https://expressjs.com/)
6. [nodemon](https://www.npmjs.com/package/nodemon)
7. [dotenv](https://www.npmjs.com/package/dotenv)
8. [MongoDB](https://www.mongodb.com/)
9. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
10. [Redux](https://redux.js.org/)

# Working
1. The application can be installed locally using `git clone https://github.com/g-s01/quizMaker` on the command line.
2. Install the above dependencies.
3. To run the server, go to the `client` folder and execute `npm start`.
4. After this, start the database by running `npx nodemon server` in the `server` folder.
5. The application is online and can be accessed by going to the `localhost:3000` webpage.

   
<img width="586" alt="Screenshot 2023-07-12 at 2 19 08 PM" src="https://github.com/g-s01/quizMaker/assets/95131287/13deaf8d-14b8-43ea-9939-f184a024bc4d">

<img width="502" alt="Screenshot 2023-07-12 at 2 19 52 PM" src="https://github.com/g-s01/quizMaker/assets/95131287/f3977bd5-0854-4c44-a8ec-d2849ae5ccf7">

<img width="1432" alt="Screenshot 2023-07-12 at 2 22 12 PM" src="https://github.com/g-s01/quizMaker/assets/95131287/191f9c3c-ab17-4819-9f8d-a78ec038cf48">

<img width="823" alt="Screenshot 2023-07-12 at 2 25 29 PM" src="https://github.com/g-s01/quizMaker/assets/95131287/f4be85b2-8ea8-43b2-b173-7cffc2d4c027">

<img width="543" alt="Screenshot 2023-07-12 at 2 26 04 PM" src="https://github.com/g-s01/quizMaker/assets/95131287/683f111e-44f1-45ce-882b-9a48ba8a0d65">

<img width="630" alt="Screenshot 2023-07-12 at 2 26 20 PM" src="https://github.com/g-s01/quizMaker/assets/95131287/823f8127-383b-42fb-9c15-5d0b6f1aad5a">

<img width="710" alt="Screenshot 2023-07-12 at 2 26 34 PM" src="https://github.com/g-s01/quizMaker/assets/95131287/5e4bb793-ebf7-47bb-b7d9-1f1429f7cf83">

<img width="1228" alt="Screenshot 2023-07-12 at 2 26 46 PM" src="https://github.com/g-s01/quizMaker/assets/95131287/c6fa2222-36e8-4aac-9448-ded62e3721f8">

# Credits

This project was created by [Gautam Sharma](https://github.com/g-s01)
