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
      },

      'forgotPass': {
        'color': '#ad78e2'
      }
    };

    return (
      <div className="">
        <h1>Login</h1>

        <form style={styles.form} onSubmit={this.handleSubmit}>

          <label htmlFor="loginEmail">Email</label><br />
          <span id="errEmail" className="error"></span>
          <input
            style={styles.input}
            type="email"
            ref="emailInput"
            name="loginEmail"
            placeholder="Your Email"
            required />

          <label htmlFor="loginPassword">Password</label><br />
          <span id="errPass" className="error"></span>
          <input
            style={styles.input}
            type="password"
            ref="passwordInput"
            name="loginPassword"
            placeholder="Your Password"
            required />

          <button type="submit" style={styles.btn}>Login</button>
        </form>
        <a href="/forgotpassword" style={styles.forgotPass}>Forgot password?</a>
      </div>
    );
  }
});
