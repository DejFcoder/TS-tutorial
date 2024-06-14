function addTwo(num: number): number {
  return num + 2;
}

let myValue = addTwo(5);

function getUpper(value: string) {
  return value.toUpperCase();
}

getUpper("hello");

function signUser(name: string, email: string, isPaid: boolean) {
  console.log(name);
  console.log(email);
  console.log(isPaid);
}

signUser("John", "email", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("John", "email");

/* function getValue(myVal: number) {
    if (myVal > 5) {
        return true;
    }
    return "200K"
} */

const getHello = (s: string): string => {
  return "";
};

const heros = ["Superman", "Batman", "Wonder Woman"];
//const heros = [1, 2, 3];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
    console.log(errMsg);
}

function handleError(errMsg: string): never {
    throw new Error(errMsg);
}