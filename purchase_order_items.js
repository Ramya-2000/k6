import http from 'k6/http';
import { check } from 'k6';


const params = {
    headers: {
        "content-type": "application/json",
        "Authorization": " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI1LCJlbWFpbCI6InJhbXlhQHlhdmFyLmluIiwicm9sZSI6IlZFTkRPUiIsInZlbmRvcl9pZCI6MjUzLCJpYXQiOjE2Njg2NzY4OTN9.eZE1ru2xyksA_0s-5ic7Hm_AIL-5ZXeIe6aD6WIRq-Q"

    }
}

export const options = {
    scenarios: {
        per_vu_iterations: {
            executor: 'per-vu-iterations',
            vus: 5,
            iterations: 2,
            startTime: '1s'
        }
    }
}

export default function () {

    const res = http.get('https://vendorapi.test.codingtown.com/v1/purchase_orders/items?po_numbers=4500000468', params)
    console.log(JSON.stringify(res))
    check(res, {
        "Multiple Purchase order items list": (r) => {
            return r.status === 200;
        },
    });
}  
