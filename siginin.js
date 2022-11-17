import http from 'k6/http';
import { check } from 'k6';
import { SharedArray } from "k6/data";
import file from "k6/x/file";

// const users= new SharedArray("users", () =>{
//     const data = JSON.parse(open("./user.json"));
//     return data;
// });

const params = {
    headers: {
        "content-type": "application/json",
        "Authorization": "string"
    }
};

export const options = {
    vus: 1,
    iterations: 1
};

let body = {};

export default function () {
    body = {
        // email:"r.ragul@yavar.in",
        // password:"12345678",
        email: "ramya@yavar.in",
        password: "Ramya@123"
    }
    const res = http.post('https://vendorapi.test.codingtown.com/v1/login', JSON.stringify(body), params)
    // console.log(res)
    check(res, {
        "Successfully logged in": (r) => {
            return r.status === 200;
        },
    });
    file.appendString("tokens.txt", `${res.headers.Authorization}\n`);

}
