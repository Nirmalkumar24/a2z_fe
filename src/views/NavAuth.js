import React from "react";
import { Redirect} from "react-router";
import Navbar from "../component/Navbar";
import { isLogin} from "../utils/Auth";
import { MyContext } from "../utils/Context";
import { Logout } from "../utils/Logout";


class NavAuth extends React.Component {

    constructor(props) {
        super(props);

        this.state = { auth: isLogin() }
    }
    handleLogout = () => {

        Logout();
        this.setState({ auth: false });
    }


    render() {



        if (!this.state.auth) {
            return (
                <div>
                        <Redirect to="/login" />
                </div>
            );

        }
        else {

            return (
                <div>
                    {console.log("item renderd")}
                    <MyContext.Provider value={{ logout: this.handleLogout }}>
                        <Redirect to="/" />
                        <Navbar authorized={this.auth} />
                    </MyContext.Provider>

                </div>
            );
        }
    }


}


export default NavAuth;