import axios from "axios"

const url = "https://poda-server.onrender.com"
// const url = "http://localhost:2345"

export const getRegisteredApi = async (data: any) => {
    try {
        return await axios.post(`${url}/create-account`, data).then((res: any) => {
            return res.data.data
        })
    } catch (error: any) {
        console.log(error.message)
    }
}

export const spinUpServer = async () => {
    try {
        return await axios.get(url).then(() => {
            console.log("Success!!")
        })
    } catch (error: any) {
        console.log(error.message)
    }
}