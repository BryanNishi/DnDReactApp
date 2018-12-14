import React, { Component } from "react";


class LoginModal extends Component {
    render() {
        return (

            <div className="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="loginTitle">login or create new login info</h5>
                    </div>
                    <div className="modal-body">
                        <form action="/login" method="post">
                            <div className="form-group">
                                <label for="fName">First Name</label>
                                <input type="text" className="form-control" name="fName" id="fName" />
                            </div>
                            <div className="form-group">
                                <label for="usernamee">Username</label>
                                <input type="text" className="form-control" name="username" id="username" /> 
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" name="password" className="form-control" id="password" />
                            </div>
                        </form>
                    </div>
                    <button type="submit" className="btn btn-success">
                        Login/Create
                    </button>
                </div>
            </div>
        </div>




        );
    }
}

export default LoginModal;