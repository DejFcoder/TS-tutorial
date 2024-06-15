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
  protected _courseCount = 1;

  readonly city: string = "London";
  constructor(
    public email: string,
    public name: string
  ) //private userId: string
  {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count must be greater than 1");
    }
    this.courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 2;
  }
};

const david = new User("david@gmail.com", "david");
//david.name
//david.deleteToken()
