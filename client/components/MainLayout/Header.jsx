Header = React.createClass({
  'mixins': [ReactMeteorData],

  getMeteorData() {
    return {
      'user': Meteor.user()
    };
  },

  logout(e) {
    e.preventDefault();
    Meteor.logout();

    FlowRouter.go('login');
  },

  render() {
    let styles = {
      'main': {
        'backgroundColor': '#ededed',
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'height': '30px',
        'width': '100%',
        'padding': '15px 0 5px 0',
        'display': 'flex',
        'flexDirection': 'row'
      },

      'item': {
        'flexGrow': 1,
        'textAlign': 'center',
        'textDecoration': 'none',
        'fontSize': '1.1em',
        'color': '#333366'
      }
    };

    let loggedInComponent1 = '';
    let loggedInComponent2 = '';
    let logoutButton = '';

    if (this.data.user) {
      let profileLink = `/users/${Meteor.userId()}`;
      loggedInComponent1 = <a href="/post_tweet"
                              style={styles.item}>Post</a>;
      loggedInComponent2 = <a href={profileLink}
                              style={styles.item}>Profile</a>;
      logoutButton = <a href="" onClick={this.logout}
                                style={styles.item}>Logout</a>;
    } else {
      loggedInComponent1 = <a href="/register"
                              style={styles.item}>Register</a>;
      loggedInComponent2 = <a href="/login"
                              style={styles.item}>Login</a>;
    }
    return (
      <div style={styles.main}>
        <a href="/tweets" style={styles.item}>Tweets</a>
        {loggedInComponent1}
        {loggedInComponent2}
        {logoutButton}
      </div>
    );
  }
});
