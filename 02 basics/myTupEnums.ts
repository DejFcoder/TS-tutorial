//const user: (string | number)[] = ["hc", 1];
let user: [string, number, boolean] 
user = ["hc", 1, true];

let rgb: [number, number, number] = [255, 255, 255];

type User = [number, string]
const user1: User = [1, "hc"];
user1[0] = 2;
user1.push();