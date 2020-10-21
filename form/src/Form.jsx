import React from "react";

export class Form extends React.Component {
    constructor() {
        super();

        this.state = {
            fName : "",
            lName : "",
            eMail : "a@b.com",
            address : "",
            state : "Ghaziabad",
            gender : "",
            terms : false,
        };
    }

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div>
                First Name : <input
                    type = "text"
                    name = "fName"
                    value = {this.state.fName}
                    onChange = { e => {
                        this.inputChangeHandler(e);
                }}
                /><br></br>

                Last Name : <input
                    type = "text"
                    name = "lName"
                    value = {this.state.lName}
                    onChange = { e => {
                        this.inputChangeHandler(e);
                }}
                /><br></br>

                Email id : <input
                    type = "email"
                    name = "eMail"
                    value = {this.state.eMail}
                    onChange = { e => {
                        this.inputChangeHandler(e);
                }}
                /><br></br>

                Address : <input
                    type = "text"
                    name = "address"
                    value = {this.state.address}
                    onChange = { e => {
                        this.inputChangeHandler(e);
                }}
                /><br></br>

                State : <select
                    name = "state"
                    onChange = { e => {
                        this.inputChangeHandler(e);
                    }}
                    >
                        <option
                            value = "Ghaziabad"
                        >Ghaziabad</option>

                        <option
                            value = "Delhi"
                        >Delhi</option>

                        <option
                            value = "Noida"
                        >Noida</option>

                    </select> <br></br>

                Gender : <input
                    type = "radio"
                    name = "gender"
                    value = "Male"
                    onChange = { e => {
                        this.inputChangeHandler(e);
                    }}
                />Male

                <input
                    type = "radio"
                    name = "gender"
                    value = "FeMale"
                    onChange = { e => {
                        this.inputChangeHandler(e);
                    }}
                />FeMale <br></br>

                <input
                    type = "checkbox"
                    name = "terms"
                    value = {true}
                    onChange = { e => {
                        this.inputChangeHandler(e);
                    }}
                />Terms and Conditions Applied

                <br></br>
                <button
                    onClick = { () => alert(JSON.stringify(this.state))}
                    >Show State</button> 

            </div>
        );
    }
}