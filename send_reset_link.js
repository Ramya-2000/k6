import http from 'k6/http';
import {check} from 'k6';

const params={
    headers:{
        "content-type":"application/json",
    }
}

export const options={
    scenarios:{
        per_vu_iterations:{
            executor:"per-vu-iterations",
            iterations:3,
            startTime:'3s',
            stages: [
                { duration: '20s', target: 10 },
                { duration: '10s', target: 0 },
              ],        
        }

    }
}


export default function(){
    let body={
        email:"ramya@yavar.in"
    }
    const res = http.post('https://vendorapi.test.codingtown.com/v1/passwords/send_reset_password_link',JSON.stringify(body), params)
    check(res,{
        "Reset password instructions have been sent to your email account": (r) =>{
            return r.status == 200;
        }
    });
     
}