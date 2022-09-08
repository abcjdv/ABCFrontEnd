import Main from "./Main"
import Women from "./Women"
import Singup from "./Signup"
import Otp from "./Otp"
import Username from "./Username"
import Birthday from "./Birthday"
import Whitedress from "./Whitedress"
import Home from "../components/Home"
export default[
    {
        path:'/ ',
        exact:true,
        component:()=><Home />,
    },/*
    {
        path:'/Main ',
        exact:true,
        component:()=><Main />,
    },
    {
        path:'/Women ',
        exact:true,
        component:()=><Women />,
    },
    {
        path:'/Singup ',
        exact:true,
        component:()=><Singup />,
    },
    {
        path:'/Birthday ',
        exact:true,
        component:()=><Birthday />,
    },
    {
        path:'/Username ',
        exact:true,
        component:()=><Username />,
    },
    {
        path:'/Whitedress ',
        exact:true,
        component:()=><Whitedress />,
    },
    {
        path:'/Otp ',
        exact:true,
        component:()=><Otp />,
    },*/
];