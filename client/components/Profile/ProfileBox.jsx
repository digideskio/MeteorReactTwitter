ProfileBox = React.createClass({
  'mixins': [ReactMeteorData],

  getMeteorData() {
    const ready = FlowRouter.subsReady();
    if (!ready) {
      return {};
    }

    return {
      'user': Meteor.users.findOne({'_id': this.props.userid}),
      'tweets': Tweets.find({}, {'sort': {'submitted': -1}}).fetch()
    };
  },

  setLimit(e) {
    e.preventDefault();

    if (this.data.tweets.length === Session.get('profilelimit')) {
      Session.set('profilelimit', Session.get('profilelimit') + 3);
      if (document.getElementById('profile-loadmore').innerHTML === 'No More') {
        document.getElementById('profile-loadmore').innerHTML = 'Load More';
      }
    } else {
      document.getElementById('profile-loadmore').innerHTML = 'No More';
    }
  },

  follow(e) {
    e.preventDefault();
    Meteor.call('follow', this.data.user._id);
  },

  render() {
    const styles = {
      'profileBox': {
        'textAlign': 'center',
        'maxWidth': '700px'
      },

      'buttons': {
        'maxWidth': '350px',
        'display': 'flex',
        'margin': 'auto',
        'flexDirection': 'row'
      },

      'btn': {
        'height': '30px',
        // 'width': '150px',
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

      'followBtn': {
        'height': '40px',
        'width': '150px',
        'margin': '10px',
        'textDecoration': 'none',
        'borderRadius': '10px',
        'border': '1px solid #777',
        'backgroundColor': 'transparent',
        'fontSize': '1em',
        'color': '#777'
      },

      'loadMore': {
        'outline': 0,
        'width': '100px',
        'height': '40px',
        'backgroundColor': '#fff',
        'border': '3px solid #00f0ff',
        'borderRadius': '10px',
        'fontSize': '1em',
        'color': '#555'
      }
    };

    let followButton = '';

    if (this.data.user) {
      if (this.data.user._id !== Meteor.userId()) {
        followButton = <button id="followButton"
                        style={styles.followBtn}
                        onClick={this.follow}>Follow</button>;
      }
      let hash = CryptoJS.MD5(this.data.user.emails[0].address);
      let gravatarUrl = `http://www.gravatar.com/avatar/${hash}/?s=200`;

      let followersLink = `/users/${this.data.user._id}/followers`;
      let followingsLink = `/users/${this.data.user._id}/followings`;

      return (
        <div>
          <div style={styles.profileBox}>
            <h3>{this.data.user.username}</h3>
            <div>
              <img src={gravatarUrl} alt="Profile Image" />
            </div>

            <div style={styles.buttons}>
              <a href={followersLink} style={styles.btn}>Followers</a><br />
              <a href={followingsLink} style={styles.btn}>Followings</a>
            </div>

            {followButton}
          </div>

          <h3>{this.data.user.username}'s tweets</h3>
          <TweetList tweets={this.data.tweets} />
          <button id="profile-loadmore"
                  style={styles.loadMore}
                  onClick={this.setLimit}>
            Load More
          </button>
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
