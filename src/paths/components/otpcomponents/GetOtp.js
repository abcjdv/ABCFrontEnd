import axios from "../../../api/axios";
const GetOtp = () => {
    axios.post("user/send_otp/", { phoneNo: `+923317726261` },
        {
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${cookies.get('access')}`
            },
            withCredentials: true
        }
    ).then(res => {
        //console.log(res.data)
    }).catch(err => {
        //console.error(err)
    })
}
export default GetOtp;