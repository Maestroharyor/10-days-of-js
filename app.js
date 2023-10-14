// Object Literals
// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

//Accessing Object Values
// const key = "firstName";
// console.log(user[key]);
// console.log(user.lastName);
// console.log(user.age);

// Add, Change or remove items in objects
// user.firstName = "Jane";
// user.lastName = "Uzumaki";
// user.isLoggedIn = false;

// delete user.age;
// console.log(user);

// Object Destructuring
// const { age, ...userWithoutAge } = user;
// console.log(userWithoutAge);

// Shorthand Property Assignment
// const userWithAgeOnly = { age };
// console.log(userWithAgeOnly);

// Looping through an object
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (const [key, value] of Object.entries(user)) {
//   console.log(`${key}: ${value}`);
// }

// for (const key of Object.keys(user)) {
//   console.log(key, user[key]);
// }

// for (const key in user) {
//   console.log(key, user[key]);
// }

// Methods
// const posts = [
//   {
//     title: "Post 1",
//     content: "This is post 1",
//   },
//   {
//     title: "Post 2",
//     content: "This is post 2",
//   },
// ];
// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   isLoggedIn: false,
//   posts,
//   login() {
//     this.isLoggedIn = true;
//     console.log("User Logged IN");
//   },
//   logout: function () {
//     this.isLoggedIn = false;
//     console.log("User Logged OUT");
//   },
//   showPosts: function () {
//     this.posts.forEach((post) => {
//       console.log(post);
//     });
//   },
// };

// console.log(user);
// user.login();
// user.showPosts();
// console.log(user);

//Built in JavaScript Objects
//Date Object
// const date = new Date();
// console.log(Date());
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);

//Math Object
// console.log(Math.PI);
// console.log(Math.abs(-10));
// console.log(Math.round(3.4));
// console.log(Math.ceil(2.2));
// console.log(Math.min(20, 1, 58));
// console.log(Math.random());

// const generateRandomNumber = () => Math.ceil(Math.random() * 100);

// for (let i = 0; i < 100; i++) {
//   console.log(generateRandomNumber());
// }
