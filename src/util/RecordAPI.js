import axios from 'axios';

const api= process.env.REACT_APP_RECORDS_API_URL || "https://5bf919ddc480680013bc7ddd.mockapi.io"

export const getAll = axios.get(`${api}/api/v1/records`)

export const addRecord = (data) => axios.post(`${api}/api/v1/records`, data)

export const updateRecord = (id,data) => axios.put(`${api}/api/v1/records/${id}`, data)

export const deleteRecord = (id) => axios.delete(`${api}/api/v1/records/${id}`)