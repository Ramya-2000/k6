import http from 'k6/http';
import { check } from 'k6';


const params = {
    headers: {
        "content-type": "application/json",
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjI1LCJlbWFpbCI6InJhbXlhQHlhdmFyLmluIiwicm9sZSI6IlZFTkRPUiIsInZlbmRvcl9pZCI6MjUzLCJpYXQiOjE2Njg2ODI0NzF9.d9n0roeHG16udVLF8mba1ppgTQjBaUcoL9zytYOM6Fw"
    }
}

export const options = {
    scenarios: {
        constant_vus: {
            executor:'constant-vus',
            vus: 3,
            // iterations: 5,
            duration: '10s'
        }
    }
}

export default function () {
    const res = http.get('https://vendorapi.test.codingtown.com/v1/purchase_orders?po_number=4500000468', params)
    console.log(JSON.stringify(res))
    check(res, {
        "Purchase order details": (r) => {
            return r.status === 200;
        },
    });
}  
