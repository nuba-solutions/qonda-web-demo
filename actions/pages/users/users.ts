'use server'

import axios from 'axios'

export const getUsersList = async () => {
    const response = await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/mock/users.json`)
        .then(async (res) => {
            if (res.status === 200) {
                return res.data.data
            }
            return null
        })
        .catch((error) => {
            console.log(error)
            return null
        })

    return response
}
