Login = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    let email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.passwordInput).value.trim();

    // Todo: Check the validity of email password

    Meteor.loginWithPassword(email, password, (err)=> {
      if (err) {
        console.log('Err: ', err);
      } else {
        ReactDOM.findDOMNode(this.refs.emailInput).value = '';
        ReactDOM.findDOMNode(this.refs.passwordInput).value = '';
        FlowRouter.go('/tweets');
      }
    });
  },

  render() {
    return (
      <div className="">
        <h1>Login</h1>

        <form className="loginForm" onSubmit={this.handleSubmit}>

          <label htmlFor="loginEmail">Email*</label><br />
          <span id="errEmail" className="error"></span>
          <input
            type="email"
            ref="emailInput"
            name="loginEmail"
            placeholder="Your Email"
            required />

          <label htmlFor="loginPassword">Password*</label><br />
          <span id="errPass" className="error"></span>
          <input
            type="password"
            ref="passwordInput"
            name="loginPassword"
            placeholder="Your Password"
            required />

          <button type="submit" className="canSubmit">Login</button>
        </form>
        <a href="/forgotpassword">forgot password</a>
      </div>
    );
  }
});
