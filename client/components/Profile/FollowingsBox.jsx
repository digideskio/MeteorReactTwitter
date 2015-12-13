FollowingsBox = React.createClass({
  'mixins': [ReactMeteorData],

  getMeteorData() {
    const ready = FlowRouter.subsReady();
    if (!ready) {
      return {};
    }

    return {
      'user': Meteor.users.findOne({'_id': this.props.userid}) || {},
      'followings': Meteor.users.find(
        {'followers': this.props.userid},
        {'sort': {'username': 1}}).fetch() || []
    };
  },

  setLimit(e) {
    e.preventDefault();

    if (this.data.followings.length === Session.get('followingslimit')) {
      Session.set('followingslimit', Session.get('followingslimit') + 3);
      if (document.getElementById('moreFollowings').innerHTML === 'No More') {
        document.getElementById('moreFollowings').innerHTML = 'Load More';
      }
    } else {
      document.getElementById('moreFollowings').innerHTML = 'No More';
    }
  },

  render() {
    const styles = {
      'profileBox': {
        'textAlign': 'center',
        'maxWidth': '700px'
      },

      'buttons': {
        'maxWidth': '220px',
        'display': 'flex',
        'margin': 'auto',
        'flexDirection': 'row'
      },

      'btn': {
        'height': '30px',
        'flexGrow': 1,
        'margin': '10px',
        'paddingTop': '10px',
        'textDecoration': 'none',
        'borderRadius': '10px',
        'border': '1px solid #777',
        'backgroundColor': 'transparent',
        'fontSize': '1em',
        'color': '#777'
      },

      'ul': {
        'maxWidth': '400px',
        'listStyle': 'none',
        'textAlign': 'center',
        'margin': 'auto',
        'padding': 0
      },

      'loadMore': {
        'outline': 0,
        'width': '100px',
        'height': '40px',
        'marginTop': '10px',
        'backgroundColor': '#fff',
        'border': '3px solid #00f0ff',
        'borderRadius': '10px',
        'fontSize': '1em',
        'color': '#555'
      }
    };

    let followingsList = '';
    let loadMore = <p>No Followings</p>;
    if (this.data.followings && this.data.followings.length > 0) {
      followingsList = this.data.followings.map((user)=> {
        return <UserItem
              key={user._id}
              userId={user._id}
              username={user.username}
              userEmail={user.emails[0].address}
              />;
      });

      loadMore = <button id="moreFollowings"
                          style={styles.loadMore}
                          onClick={this.setLimit}>
                    Load More
                  </button>;
    }

    if (this.data.user) {
      let hash = CryptoJS.MD5(this.data.user.emails[0].address);
      let gravatarUrl = `http://www.gravatar.com/avatar/${hash}/?s=200`;
      let profileLink = `/users/${this.props.userid}`;

      return (
        <div>
          <div style={styles.profileBox}>
            <h3>{this.data.user.username}</h3>
            <div>
              <img src={gravatarUrl} alt="Profile Image" />
            </div>

            <div style={styles.buttons}>
              <a href={profileLink} style={styles.btn}>Profile</a><br />
            </div>
          </div>

          <ul style={styles.ul}>
            <h4>Followings</h4>
            {followingsList}
            {loadMore}
          </ul>
        </div>
      );
    }

    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }
});
