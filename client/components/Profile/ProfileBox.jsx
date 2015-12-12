ProfileBox = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const ready = FlowRouter.subsReady();
    if(!ready) {
      return {};
    }
    // let userId = window.location.pathname.split('/users/')[1];
    return {
      user : Meteor.users.findOne({_id: this.props.userid}),
      tweets: Tweets.find({}, {sort: {submitted: -1}}).fetch()
    }
  },

  setLimit(e) {
    e.preventDefault();
    if(this.data.tweets.length === Session.get('profilelimit')){
      Session.set('profilelimit', Session.get('profilelimit') + 3);
    } else {
      $('#profile-loadmore').addClass('disabledBtn');
    }
  },

  follow(e){
    e.preventDefault();
    Meteor.call("follow", this.data.user._id);
  },

  render(){
    let followButton = '';

    if(this.data.user){
      if(this.data.user._id !== Meteor.userId()){
        followButton = <button id="followButton" onClick={this.follow}>Follow</button>;
      }

      let followersLink = `/users/${this.data.user._id}/followers`;
      let followingsLink = `/users/${this.data.user._id}/followings`;

      return (
        <div>
          <h3>Profile</h3>
          <a href={followersLink}>Followers</a><br />
          <a href={followingsLink}>Followings</a>
          <h3>{this.data.user.username}{followButton}</h3>
          <h3>{this.data.user.username}'s tweets</h3>
          <TweetList tweets={this.data.tweets} />
          <button id="profile-loadmore">
            <a href="" onClick={this.setLimit}>Load More</a>
          </button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>No user found</h1>
        </div>
      )
    }
  }
});