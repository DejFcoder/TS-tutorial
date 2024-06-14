class User {
  email: string;
  name: string;
  readonly city: string = "London";

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const david = new User("david@gmail.com", "david");
/* david.city = ""; */
