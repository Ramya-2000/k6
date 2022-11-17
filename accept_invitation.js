import http from 'k6/http';
import { check } from 'k6';
import { SharedArray } from "k6/data";


const params = {
    headers: {
        "content-type": "application/json",
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIyLCJlbWFpbCI6InJhbXlhQHlhdmFyLmluIiwicm9sZSI6IlZFTkRPUiIsInR5cGUiOiJpbnZpdGVfdXNlciIsImlhdCI6MTY2ODY2OTQ5OX0.esW9eONIXkB2-Y4TnG--0b1xXaSVopsvMF0AqNw4BaA"
    }
}

export const options = {
    vus: 1,
    iterations: 1
}

export default function () {
    let body = {
        "password": "Ramya@2211",
        "password_confirmation": "Ramya@2211",
    }

    const res = http.post('https://vendorapi.test.codingtown.com/v1/accept_invitation', JSON.stringify(body), params)
    console.log(JSON.stringify(res))
    check(res, {
        "Succesfully verified email": (r) => {
            return r.status == 200;
        }
    });
}
