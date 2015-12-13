Register = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    let email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim();
    let username = ReactDOM.findDOMNode(this.refs.usernameInput).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.passwordInput).value.trim();

    // Todo: Check the validity of userObject

    Accounts.createUser({
      'email': email,
      'username': username,
      'password': password
    }, (err)=> {
      if (err) {
        console.log('Err: ', err);
      } else {
        ReactDOM.findDOMNode(this.refs.emailInput).value = '';
        ReactDOM.findDOMNode(this.refs.usernameInput).value = '';
        ReactDOM.findDOMNode(this.refs.passwordInput).value = '';
        FlowRouter.go('/tweets');
      }
    });
  },

  render() {
    return (
      <div className="">
        <h1>Register</h1>

        <form className="registrationForm" onSubmit={this.handleSubmit}>
          <p>* Required</p>

          <label htmlFor="registerName">Username* </label><br />
          <span id="errName" className="error"></span>
          <input
            type="text"
            ref="usernameInput"
            name="registerName"
            placeholder="Your Name"
            required
            autoFocus />

          <label htmlFor="registerEmail">Email*</label><br />
          <span id="errEmail" className="error"></span>
          <input
            type="email"
            ref="emailInput"
            name="registerEmail"
            placeholder="Your Email"
            required />

          <label htmlFor="registerPassword">Password*</label><br />
          <span id="errPass" className="error"></span>
          <p className="tip">
            - Must be 8 - 30 characters, include a symbol (! @ # $ % ^ & *), a number, a lower and uppercase.
          </p>
          <input
            type="password"
            ref="passwordInput"
            name="registerPassword"
            placeholder="Your Password"
            required />

          <button type="submit" className="canSubmit">Register</button>
        </form>
      </div>
    );
  }
});
