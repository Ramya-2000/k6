"use-strict";
import http from 'k6/http';
import { check } from 'k6';

const params = {
    headers: {
        "content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoici5yYWd1bEB5YXZhci5pbiIsInJvbGUiOiJBRE1JTiIsInZlbmRvcl9pZCI6MSwiaWF0IjoxNjY4MTczNTkwfQ.HsKUDUh8J_Ne2C9YSfZOxvrF2BmV91ZmM85PERAwrKI"

    }
};

export const options = {
    vus: 1,
    iterations: 1
};

let body = {};


export default function () {

    const res = http.get('https://vendorapi.test.codingtown.com/v1/vendors', JSON.stringify(body), params)
    console.log(JSON.stringify(res));
    check(res, {
        "vendor list": (r) => {
            return r.status === 200;
        },
    });

}
