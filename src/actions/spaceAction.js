import axios from 'axios';
export const historyList = () => dispatch => {
    axios.get("https://api.spacexdata.com/v3/history")
    .then(res=>{
        dispatch({
            type:"HISTORY_LIST",
            payload: res.data
        })
    })
}

export const addressList = () => dispatch => {
    axios.get("https://api.spacexdata.com/v3/payloads")
    .then(res=>{
        dispatch({
            type:"ADDRESS_LIST",
            payload: res.data
        })
    })
}