import http from 'k6/http';
import { check } from 'k6';
import { SharedArray } from "k6/data";


const params = {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoici5yYWd1bEB5YXZhci5pbiIsInJvbGUiOiJBRE1JTiIsInZlbmRvcl9pZCI6MSwiaWF0IjoxNjY3NjU2MTAwfQ.CI3WIaLYNN34AHNlfC93KPHhDkl8k4LHNnumQRi1fFk"

    }
}

export const options = {
    vus:1,
    iterations:1
}

export default function () {
    let body = {
        email: "r.ragul@yavar.in",
        password: "12345678"
    }
    const res = http.del('https://vendorapi.test.codingtown.com/v1/logout', JSON.stringify(body), params)
    // console.log(res)
    check(res, {
        "Succesfully logged out": (r) => {
            return r.status == 200;
        }
    });

}
