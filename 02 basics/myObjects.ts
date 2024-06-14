/* const User = {
    name: "John",
    age: 30,
    isAdmin: true
} */

/* function createUser({name: string, isAdmin: boolean}) {} */

/* let newUser = {name: "Mimi", isAdmin: false, email: "d@gmail.com"}
createUser(newUser);

function createCourse(): {name: string, price: number}{
    return {name: "David", price: 1000}
}


type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return {name: user.name, email: user.email, isActive: user.isActive}
}
createUser({name: "John", email: "d@gmail.com", isActive: true}); */

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "123",
  name: "David",
  email: "d@gmail.com",
  isActive: true,
};

myUser.email = "da@gmail.com";

type cardNumber = {
    cardnumber: number;
}

type cardDate ={
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
};
