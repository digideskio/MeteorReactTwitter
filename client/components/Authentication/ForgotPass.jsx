ForgotPass = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    let email =ReactDOM.findDOMNode(this.refs.emailInput).value.trim();

    // Todo: Check the validity of userObject

    Accounts.forgotPassword({email: email}, function(err) {
      if (err) {
        if (err.message === 'User not found [403]') {
          console.log('This email does not exist.');
        } else {
          console.log('We are sorry but something went wrong.');
        }
      } else {
        console.log('Email Sent. Check your mailbox.');
      }
    });
  },

  render() {
    return (
      <div className="">
        <h1>Send New Password</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Email: <input type="email" name="email" ref="emailInput" /></p>
          <p><input type="submit" value="Send New Pass" /></p>
        </form>
      </div>
    );
  }
});