Register = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    let userObject = {
      email: ReactDOM.findDOMNode(this.refs.emailInput).value.trim(),
      username: ReactDOM.findDOMNode(this.refs.usernameInput).value.trim(),
      password: ReactDOM.findDOMNode(this.refs.passwordInput).value.trim()
    };

    // Todo: Check the validity of userObject

    Accounts.createUser({
      email: userObject.email,
      username: userObject.username,
      password: userObject.password
    }, (err)=> {
      if(err){
        console.log('Err: ', err);
      } else {
        ReactDOM.findDOMNode(this.refs.emailInput).value = "";
        ReactDOM.findDOMNode(this.refs.usernameInput).value = "";
        ReactDOM.findDOMNode(this.refs.passwordInput).value = "";
        FlowRouter.go('/tweets');
      }
    });
  },

  render() {
    return (
      <div className="">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Email: <input type="email" name="email" ref="emailInput" /></p>
          <p>Username: <input type="text" name="username" ref="usernameInput" /></p>
          <p>Password: <input type="password" name="password" ref="passwordInput" /></p>
          <p><input type="submit" value="Register" /></p>
        </form>
      </div>
    );
  }
});
