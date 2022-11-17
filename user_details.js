"use-strict";
import http from 'k6/http';
import {check} from 'k6';

const params={
    headers:{
        "content-type": "application/json",
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoici5yYWd1bEB5YXZhci5pbiIsInJvbGUiOiJBRE1JTiIsInZlbmRvcl9pZCI6MSwiaWF0IjoxNjY4NjcwMDI1fQ.LmVZfHX61XgR6FxnYMfU_Mdj431L3XFC65YZWyeMbnY",

        
    }
};

export const options = {
    vus:1,
    iterations:2
};

let body={};

export default function(){
  
const res = http.get('https://vendorapi.test.codingtown.com/v1/users/2', params)
console.log((JSON.stringify(res)))
check(res,{
    "User details": (r) => {
        return r.status === 200;
    },
});

}
