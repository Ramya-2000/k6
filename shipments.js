"use-strict";
import http from 'k6/http';
import { check } from 'k6';


const params = {
    headers: {
        "content-type": "application/json",
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI1LCJlbWFpbCI6InJhbXlhQHlhdmFyLmluIiwicm9sZSI6IlZFTkRPUiIsInZlbmRvcl9pZCI6MjUzLCJpYXQiOjE2Njg2ODkyMjR9.-n1hqqhYc1m1au_hkSamyDFVFlJ1DNSLHYE3RqJvK3E"

    }
};

export const options = {
    vus: 1,
    iterations: 1
};

let body = {};

export default function () {

    const res = http.post('https://vendorapi.test.codingtown.com/v1/shipments',  params)
    console.log(JSON.stringify(res))
    check(res, {
        "Shipment has been created successfully": (r) => {
            return r.status === 201;
        },
    });

}
