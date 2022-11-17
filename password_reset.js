import http from 'k6/http';
import {check} from 'k6';

const params ={
    headers :{
        "content-type":"application/json",
        
    }   
}

export const options={
    scenarios:{
        per_vu_iterations:{ 
            executor:'per-vu-iterations',
            vus:5,
            iterations:5,
            startTime:'2s'

        }
    }  
} 

export default function(){
    let body={
        email:"ramya@yavar.in",

    }
    const res = http.post('https://vendorapi.test.codingtown.com/v1/passwords/reset',JSON.stringify(body), params)
    check(res,{
        "succesfully have been reset succesfully": (r) =>{
            return r.status == 200;
        }
    });
     
}










