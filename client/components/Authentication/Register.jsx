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
    const styles = {
      'form': {
        'maxWidth': '700px',
        'margin': 'auto'
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
        'border': '2px solid #a3d',
        'fontSize': '1.1em'
      },

      'tip': {
        'margin': 0,
        'lineHeight': 1.1,
        'fontSize': '0.9em',
        'color': '#a7a7a7'
      }
    };


    return (
      <div className="">
        <h1>Register</h1>

        <form style={styles.form} onSubmit={this.handleSubmit}>

          <label htmlFor="registerName">Username</label><br />
          <span id="errName" className="error"></span>
          <input
            style={styles.input}
            type="text"
            ref="usernameInput"
            name="registerName"
            placeholder="Your Name"
            required
            autoFocus />

          <label htmlFor="registerEmail">Email</label><br />
          <span id="errEmail" className="error"></span>
          <input
            style={styles.input}
            type="email"
            ref="emailInput"
            name="registerEmail"
            placeholder="Your Email"
            required />

          <label htmlFor="registerPassword">Password</label><br />
          <span id="errPass" className="error"></span>
          <p style={styles.tip}>
            - Must be 8 - 30 characters, include a symbol (! @ # $ % ^ & *),
             a number, a lower and uppercase.
          </p>
          <input
            style={styles.input}
            type="password"
            ref="passwordInput"
            name="registerPassword"
            placeholder="Your Password"
            required />

          <button type="submit" style={styles.btn}>Register</button>
        </form>
      </div>
    );
  }
});
