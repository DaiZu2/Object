let userObject = {
    username: "Johny Bravo",
    age: 25,
    email: "lol@gmail.com"
  };

  userObject.getUserInfo = function() {
    return `Username: ${this.username}, Age: ${this.age}, Email: ${this.email}`;
  };
  
  userObject.getUserFriends = function() {
    return this.friends || [];
  };
  userObject.getUserMate = function() {
    return this.mate;
  };
  console.log(userObject.getUserInfo());
  console.log(userObject.getUserFriends());
  console.log(userObject.getUserMate());
  