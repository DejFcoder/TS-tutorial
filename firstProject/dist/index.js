"use strict";
/* class User {
  public email: string;
  private name: string;
  readonly city: string = "London";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
} */
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "London";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count must be greater than 1");
        }
        this.courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 2;
    }
}
;
const david = new User("david@gmail.com", "david");
//david.name
//david.deleteToken()
