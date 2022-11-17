"use-strict";
import http from 'k6/http';
import { check } from 'k6';
// import { json } from 'express/lib/response';

const params = {
    headers: {
        "content-type": "application/json",
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoici5yYWd1bEB5YXZhci5pbiIsInJvbGUiOiJBRE1JTiIsInZlbmRvcl9pZCI6MSwiaWF0IjoxNjY4NjY5MzI5fQ.eXNauzyS0D-JhETHDpRHC88YfzGYKQM90RBFGsjPNfM"

    }
};

export const options = {
    vus: 1,
    iterations: 1
};

let body = {};

export default function () {
    body = {
        "first_name": "string",
        "last_name": "string",
        "email": 'ramya@yavar.in',
        "vendor_id": 5
    }
    const res = http.post('https://vendorapi.test.codingtown.com/v1/users', JSON.stringify(body), params)
    console.log(JSON.stringify(res))
    check(res, {
        "User has been created successfully": (r) => {
            return r.status === 201;
        },
    });

}
