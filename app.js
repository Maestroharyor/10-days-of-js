//OBJECT ORIENTED PROGRAMMING

const userOne = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isLoggedIn: false,
  posts: [],
  login() {
    this.isLoggedIn = true;
    console.log(`${this.firstName} Logged in`);
  },
  logout: function () {
    this.isLoggedIn = false;
    console.log(`${this.firstName} Logged out`);
  },
  showPosts: function () {
    this.posts.forEach((post) => {
      console.log(post);
    });
  },
};

// Class Constructions and Instances

// class User {
//   constructor(firstName, lastName, age = 18, posts = []) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.posts = posts;
//     this.isLoggedIn = false;
//   }
// }

// const user = new User("John", "Doe", 22, []);
// const userNew = new User("Jane", "Doe", 32, ["Post 1", "Post 2"]);
// console.log(user);
// console.log(userNew);

// New Keyword
// const date = new Date();
// 1. It creates a new empty object{}
// 2. It binds the value of ‘this’ to the new empty object
//3. It calls the constructor function to ‘build’ the object

// Class Methods and Method Chaining
class User {
  constructor(firstName, lastName, age = 18, posts = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.posts = posts;
    this.isLoggedIn = false;
    this.level = 0;
  }
  login() {
    this.isLoggedIn = true;
    console.log(`${this.firstName} Logged in`);
    return this;
  }
  logout() {
    this.isLoggedIn = false;
    console.log(`${this.firstName} Logged out`);
    return this;
  }
  showPosts() {
    this.posts.forEach((post) => {
      console.log(post);
    });
    return this;
  }

  increaseLevel() {
    this.level++;
    return this;
  }
}

// const user = new User("John", "Doe", 22, ["Post 1", "Post 2", "Post 3"]);

// console.log(user);
// user
//   .login()
//   .increaseLevel()
//   .increaseLevel()
//   .increaseLevel()
//   .increaseLevel()
//   .showPosts();
// console.log(user);

// Class Inheritance
// class Admin extends User {
//   constructor() {
//     this.isAdmin = true;
//     this.userRole = "admin";
//   }
//   removePost(postId) {
//     console.log(`Post with post id: ${postId} removed`);
//   }
// }

// const adminUser = new Admin("John", "Doe", 22, ["Post 1", "Post 2", "Post 3"]);
// adminUser.removePost("Post 1");
// console.log(adminUser);

// Super
// class Admin extends User {
//   constructor(firstName, lastName, age, posts, adminNiceName) {
//     super(firstName, lastName, age, posts);
//     this.isAdmin = true;
//     this.userRole = "admin";
//     this.adminNiceName = adminNiceName;
//   }
//   removePost(postId) {
//     console.log(`Post with post id: ${postId} removed`);
//   }
// }

// const normalUser = new User("John", "Doe", 22, ["Post 1", "Post 2", "Post 3"]);
// normalUser.increaseLevel();
// const adminUser = new Admin(
//   "John",
//   "Doe",
//   22,
//   ["Post 1", "Post 2", "Post 3"],
//   "JohnD"
// );
// // adminUser.removePost("Post 1");
// console.log(normalUser);
// console.log(adminUser);

// Polymorphism
// class Admin extends User {
//   constructor(firstName, lastName, age, posts, adminNiceName) {
//     super(firstName, lastName, age, posts);
//     this.isAdmin = true;
//     this.userRole = "admin";
//     this.adminNiceName = adminNiceName;
//   }
//   removePost(postId) {
//     console.log(`Post with post id: ${postId} removed`);
//   }
//   increaseLevel() {
//     console.log("DO something different");
//     this.level++;
//     return this;
//   }
// }

// const adminUser = new Admin(
//   "John",
//   "Doe",
//   22,
//   ["Post 1", "Post 2", "Post 3"],
//   "JohnD"
// );
// adminUser.increaseLevel();
// console.log(adminUser);
