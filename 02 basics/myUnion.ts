let score: number | string = 33
score = 44
score = "55"

type User = {
    name: string;
    id: number;
}

type Admin = {
    userName: string;
    id: number;
}

let Tomas: User | Admin = {name: "Tomas", id: 1}
Tomas = {userName: "dmmfd", id: 554}
/* 
function getDbId(id: number | string) {
    console.log(`Db id is: ${id}`)
} */
/* 
getDbId(3)
getDbId("3") */


function getDbId(id: number | string) {
    if(typeof id === "string") {
        id.toLocaleLowerCase()
    }
}

//array
const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number)[] = ["1", "2", 3]

/* let pi:3.14 = 3.14 */
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
//seatAllotment = "crew"