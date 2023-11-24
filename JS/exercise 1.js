let user = {};
user.name = "Damian";
user.surname = "Piotr";
user.name = "Mati";
delete user.name;



function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }