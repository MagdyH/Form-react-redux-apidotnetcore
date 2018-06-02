import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: { UserId: 0, Name: '', Birthday: '', Email: '' }, errors: {}, IsValid: true};

        this.handleName = this.handleName.bind(this);
        this.handleBday = this.handleBday.bind(this);
        this.handleEmail = this.handleEmail.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event) {
        let state = { ...this.state.user }
        state.Name = event.target.value;
        this.setState({ user: state });
    }

    handleBday(event) {
        let state = { ...this.state.user }
        state.Birthday = event.target.value;
        this.setState({ user: state });
    }

    handleEmail(event) {
        let state = { ...this.state.user }
        state.Email = event.target.value;
        this.setState({ user: state });
    }


    formValidation() {
        let errors = {};

        if (this.state.user.Name.length === 0) {
            alert("Name is required"); this.setState({ IsValid: false });
            errors["Name"] = "Name is required !";
        }

        if (this.state.user.Email.length === 0) {
            alert("E-mail is required"); this.setState({ IsValid: false });
            errors["Email"] = "Email is required !";
        }


        if (typeof this.state.user.Email !== "undefined") {
            let lastAtPos = this.state.user.Email.lastIndexOf('@');
            let lastDotPos = this.state.user.Email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.user.Email.indexOf('@@') === -1 && lastDotPos > 2 && (this.state.user.Email.length - lastDotPos) > 2)) {
                this.setState({ IsValid: false });
                errors["Email"] = "Email is not valid!";
            }
        }

        if (this.state.user.Birthday.length === 0) {
            alert("Birthday is required"); this.setState({ IsValid: false });
            errors["Birthday"] = "Birthday is required !";
        }

        this.setState({ errors: errors });

        return this.state.IsValid;
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.formValidation()) {
            let user = {};
            user.Name = this.state.user.Name;
            user.Birthday = this.state.user.Birthday;
            user.Email = this.state.user.Email;
            user.UserId = 0;//this.props.data.length + 1;
            this.props.api.insertUser(user);

            this.setState({ user: { UserId: 0, Name: '', Birthday: '', Email: '' }, IsValid: true });
        }
    }

    render() {
        
        return <form className="col-9" onSubmit={this.handleSubmit}>
            <div className="form-group">
                Name*  <input className="col-3 form-control" type='text' value={this.state.user.Name} onChange={this.handleName}/*Controlled Component: (event) => {this.setState({Name = event.target.value})} instead of passing function to event Or Uncontrolled Component: Remove Value and put ref={(input)=>{this.NameInput : input}}*/ placeholder="Name" required />
                <span style={{ color: "red" }}>{this.state.errors["Name"]}</span>
                <br />
            </div>
            <div className="form-group">
                Birthday*   {/* <DatePicker className="form-control" dateFormat={this.state.Bday} onChange={this.handleBday} -- Controlled Component: (event) => {this.setState({Bday = event.target.value})} instead of passing function to event Or Uncontrolled Component: Remove Value and put ref={(input)=>{this.BdayInput : input}}--   required/>*/}
                <input className="col-3 form-control" type='date' value={this.state.user.Birthday} onChange={this.handleBday} />
                <span style={{ color: "red" }}>{this.state.errors["Birthday"]}</span>
                <br />
            </div>
            <div className="form-group">
                E-mail* <input className="col-3 form-control" type='email' value={this.state.user.Email} onChange={this.handleEmail} /*Controlled Component: (event) => {this.setState({Bday = event.target.value})} instead of passing function to event Or Uncontrolled Component: Remove Value and put  ref={(input)=>{this.BdayInput : input}}*/ placeholder="Example: magdy.dawood@its.ws" required />
                <span style={{ color: "red" }}>{this.state.errors["Email"]}</span>
                <br />
            </div>
            <div className="form-group">
                <input type='submit' className="col-3 form-control btn btn-primary" required />
            </div>
        </form>
    }



}

export default Form;


