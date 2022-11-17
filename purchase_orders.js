import http from 'k6/http';
import { check } from 'k6';


const params = {
    headers: {
        "content-type": "application/json",
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImVtYWlsIjoicmFteWFAeWF2YXIuaW4iLCJyb2xlIjoiVkVORE9SIiwidmVuZG9yX2lkIjoyNTMsImlhdCI6MTY2NzgxOTI2Nn0.4L02JFHPNvxeNZv7Sa5ojSScKb8wahzKWOC0c7vmH_I"
    }
}

export const options = {
    scenarios: {
        per_vu_iterations: {
            executor:'per-vu-iterations',
            vus: 5,
            iterations: 5,
            startTime: '1s'
        }
    }
}

export default function () {

    const res = http.get('https://vendorapi.test.codingtown.com/v1/purchase_orders', params)
    check(res, {
        "Purchase order list": (r) => {
            return r.status === 200;
        },
    });
}  
