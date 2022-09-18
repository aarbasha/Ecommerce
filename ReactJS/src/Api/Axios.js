import React from "react"
import axios from "axios"


const access_token = localStorage.getItem('token');
export const https = axios.create({

    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
        'Authorization': `bearer ${access_token} `,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})