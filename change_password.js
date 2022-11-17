"use strict";
import http from "k6/http";
import { check } from "k6";
import { getToken } from "k6";


const params = {
  headers: {
    "content-type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsImVtYWlsIjoicmFteWFAeWF2YXIuaW4iLCJyb2xlIjoiVkVORE9SIiwidmVuZG9yX2lkIjoyNTMsImlhdCI6MTY2ODY2NzMwOX0.7L_L-XlAgOF8-GfFFXtGZAjT--2iuyBf8usyGuPOpsY"

  },
};

export default () => {
  // params.headers.Authorization = getToken(tokens);
  // console.log(JSON.stringify(Authorization))
  const req1 = {
    method: 'POST',
    url: 'https://vendorapi.test.codingtown.com/v1/login',
    body: JSON.stringify({
      email: "ramya@yavar.in",
      password: "Yavar@123"
    }),
    params
  }

  const req2 = {
    method: 'POST',
    url: 'https://vendorapi.test.codingtown.com/v1/passwords/change',
    body: JSON.stringify({
      current_password: "Ramya@123",
      password: "Yavar@123",
      password_confirmation: "Yavar@123",
    }),
    params
  }

  const response = http.batch([req2])
  console.log(JSON.stringify(response[0]))
  // console.log(JSON.stringify(response[0]))
  check(response[0], {
    "Password has been changed successfully": (r) => {
      return r.status === 200;
    },
  });
};
