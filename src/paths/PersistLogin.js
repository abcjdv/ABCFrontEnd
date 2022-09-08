import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from './components/logincomponents/hooks/useRefreshToken';
import useAuth from './components/logincomponents/hooks/useAuth';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                //console.error(err);
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }

        // persist added here AFTER tutorial video
        // Avoids unwanted call to verifyRefreshToken
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

        return () => isMounted = false;
    }, [])

    useEffect(() => {
        //console.log(`isLoading: ${isLoading}`)
        //console.log(`aT: ${auth?.accessToken}`)
    }, [isLoading])

    return (
        <>
            {!auth?.accessToken
                ? <Outlet />
                : isLoading
                    ? <p>Loading...</p>
                    : <Outlet />
            }
        </>
    )
}

export default PersistLogin