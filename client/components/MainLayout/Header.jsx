Header = React.createClass({
  render() {

    let styles = {
      main: {
        backgroundColor: '#ededed',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '30px',
        width: '100%',
        padding: '15px 10px 5px 10px'
      },

      item: {
        marginRight: '10px'
      }
    };

    let loggedInComponent1 = "";
    let loggedInComponent2 = "";
    if (Meteor.user()){
      let profileLink = `/users/${Meteor.userId()}`;
      loggedInComponent1 = <a href="/post_tweet" style={styles.item}>Post</a>;
      loggedInComponent2 = <a href={profileLink} style={styles.item}>Profile</a>;
    }

    return (
      <div style={styles.main}>
        <a href="/tweets" style={styles.item}>Tweets</a>
        {loggedInComponent1}
        {loggedInComponent2}
        <AccountsUIWrapper />
      </div>
    );
  }
});
