import { Link } from "react-router-dom";
import useAuth from "../logincomponents/hooks/useAuth";
import { useContext } from "react";
import AuthContext from "../logincomponents/context/AuthProvider";
export default function MainProduct() {
  const { auth } = useAuth();
  const { setAuth } = useContext(AuthContext);
  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    setAuth({});

  }
  return (
    <main id="main" className="main-page">

      {/*} <!--==========================
      Hotels Section
    ============================-->*/}

      {/* <div className="container">

        <div className="row mb-4">
          <div className="container-fluid container-xxl d-flex justify-content-end align-items-end">
            <div className="top-btn">
              <Link to="" className="btn btn-cart"><i className="fa fa-shopping-cart"></i></Link>
              <div className="btn-group" role="group" aria-label="Basic outlined example">
                {auth?.email
                  ? <>
                    <button type="button" className="btn btn-outline button-btn"><i className="fa-solid fa-user-large"></i>Logged In</button>
                    <button onClick={logout} type="button" className="btn btn-outline button-btn">Sign out</button>
                  </>
                  : <>
                    <Link to="/Login" type="button" className="btn btn-outline button-btn"><i className="fa-solid fa-user-large"></i>Log In</Link>
                    <Link to="/SignUp" type="button" className="btn btn-outline button-btn">Sign Up</Link>
                  </>
                }
              </div>
            </div>

          </div>
        </div>


      </div> */}
    </main>


  )
}