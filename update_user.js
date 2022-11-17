import http from 'k6/http';
import { check } from 'k6';

const params = {
    headers: {
        "content-type": "application/json",
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoici5yYWd1bEB5YXZhci5pbiIsInJvbGUiOiJBRE1JTiIsInZlbmRvcl9pZCI6MSwiaWF0IjoxNjY4Njc1MTg4fQ.rQCJ6w3-rUL18q1JJzAsXMBn1InlSTopmRZpu6y9Wvg"

    }
};

export const options = {
    vus: 1,
    iterations: 2
};

let body = {};

export default function () {
    let body = {
        "first_name": "string",
        "last_name": "string"

    }

    const res = http.put('https://vendorapi.test.codingtown.com/v1/users/2', JSON.stringify(body), params)
    // console.log(JSON.stringify(res))
    check(res, {
        "User has been updated": (r) => {
            return r.status === 200;
        },
    });

}
