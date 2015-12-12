Login = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    let userObject = {
      email: ReactDOM.findDOMNode(this.refs.emailInput).value.trim(),
      password: ReactDOM.findDOMNode(this.refs.passwordInput).value.trim()
    };

    // Todo: Check the validity of userObject

    Meteor.loginWithPassword(userObject.email, userObject.password, (err)=>{
      if(err){
        console.log('Err: ', err);
      } else {
        ReactDOM.findDOMNode(this.refs.emailInput).value = "";
        ReactDOM.findDOMNode(this.refs.passwordInput).value = "";
        FlowRouter.go('/tweets');
      }
    });
  },

  render() {
    return (
      <div className="">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Email: <input type="email" name="email" ref="emailInput" /></p>
          <p>Password: <input type="password" name="password" ref="passwordInput" /></p>
          <p><input type="submit" value="Login" /></p>
        </form>
      </div>
    );
  }
});
