"use-strict";
import http from 'k6/http';
import { check } from 'k6';

const params = {
    headers: {
        "content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoici5yYWd1bEB5YXZhci5pbiIsInJvbGUiOiJBRE1JTiIsInZlbmRvcl9pZCI6MSwiaWF0IjoxNjY4Njg0MDIyfQ.uUQ_zT2iTMrlS2gQ4UgzIGy-QwvmNNzQns8knhrCvE4"

    }

};

export const options = {
    scenarios: {
        ramping_vus: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '5s', target: 5 },
                { duration: '5s', target: 0 },
            ],
        }
    }
};

export default function () {

    const res = http.del('https://vendorapi.test.codingtown.com/v1/users/13', params)
    console.log(JSON.stringify(res));
    check(res, {
        "User has been deleted": (r) => {
            return r.status === 200;
        },
    });

}
