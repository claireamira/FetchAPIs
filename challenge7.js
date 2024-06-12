class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    updatePassword(newPassword) {
      if (typeof newPassword === 'string' && newPassword.length > 0) {
        this.password = newPassword;
        console.log('Password updated successfully.');
      } else {
        console.log('Invalid password. Please enter a valid string.');
      }
    }
  
    checkPassword(password) {
      return this.password === password;
    }
  }
  
  
  const user1 = new User('johndoe', 'password123');
  console.log(user1.checkPassword('password123')); 
  user1.updatePassword('newpassword456');
  console.log(user1.checkPassword('password123'));  
  console.log(user1.checkPassword('newpassword4 56'));
  