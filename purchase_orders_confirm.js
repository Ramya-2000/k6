import http from 'k6/http';
import { check } from 'k6';


const params = {
    headers: {
        "content-type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI1LCJlbWFpbCI6InJhbXlhQHlhdmFyLmluIiwicm9sZSI6IlZFTkRPUiIsInZlbmRvcl9pZCI6MjUzLCJpYXQiOjE2Njg2ODY3Njd9.p1pLaDo_LbR7c4Iar1jndVOZxA-P-2-oeC65PRtLEJ8"
    }
}

export const options = {
    scenarios: {
        per_vu_iterations: {
            executor: 'per-vu-iterations',
            vus: 2,
            iterations: 3,
            startTime: '1s'
        }
    }
}

export default function () {

    const res = http.post('https://vendorapi.test.codingtown.com/v1/purchase_orders/confirm', params)
    console.log(JSON.stringify(res))
    check(res, {
        "Purchase order conform": (r) => {
            return r.status === 201;
        },
    });
}  
