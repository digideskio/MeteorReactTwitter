ForgotPass = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    let email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim();

    // Todo: Check the validity of userObject

    Accounts.forgotPassword({'email': email}, (err)=> {
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
    const styles = {
      'form': {
        'maxWidth': '700px',
        'margin': '10px auto 20px'
      },

      'input': {
        'display': 'block',
        'width': 'calc(100% - 10px)',
        'height': '40px',
        'margin': '3px 0 20px 0',
        'paddingLeft': '10px',
        'backgroundColor': '#efefef',
        'color': '#777',
        'fontSize': '1.1em'
      },

      'btn': {
        'height': '40px',
        'width': '150px',
        'backgroundColor': 'transparent',
        'border': '2px solid #99da49',
        'fontSize': '1.1em'
      }
    };

    return (
      <div className="">
        <h1>Reset Password</h1>
        <p>*This will send reset password instruction to your email</p>
        <form style={styles.form} onSubmit={this.handleSubmit}>

          <label htmlFor="loginEmail">Email</label><br />
          <span id="errEmail" className="error"></span>
          <input
            style={styles.input}
            type="email"
            ref="emailInput"
            name="loginEmail"
            placeholder="Your Email"
            autoFocus
            required />

          <button type="submit" style={styles.btn}>Reset Password</button>
        </form>
      </div>
    );
  }
});
