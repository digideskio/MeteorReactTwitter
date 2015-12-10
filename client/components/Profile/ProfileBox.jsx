ProfileBox = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const ready = FlowRouter.subsReady();
    if(!ready) {
      return {};
    }
    console.log('InitialLimit', Session.get('profilelimit'));
    return {
      user : Meteor.users.find({}).fetch()[0],
      tweets: Tweets.find({}, {sort: {submitted: -1}}).fetch()
    }
  },

  setLimit(e) {
    e.preventDefault();
    console.log('profileLimit', Session.get('profilelimit'), this.data.tweets.length)
    if(this.data.tweets.length === Session.get('profilelimit')){
      Session.set('profilelimit', Session.get('profilelimit') + 3);
    } else {
      $('#profile-loadmore').addClass('disabledBtn');
    }
  },

  render(){
    if(this.data.user){

      return (
        <div>
          <h3>Profile</h3>

          <h3>{this.data.user.username}</h3>
          <a href="/tweets">TWEETS</a>
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