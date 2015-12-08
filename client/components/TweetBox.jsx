TweetBox = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      tweets: Tweets.find({}).fetch(),
      user: Meteor.user()
    }
  },

  render() {
    let postTweet = "";
    if(this.data.user){
      postTweet = <a href="/post_tweet">Post Tweet</a>;
    }

    return (
      <div className="tweet-box">
        {postTweet}
        <h3>Tweet List</h3>
        <TweetList tweets={this.data.tweets} />
      </div>
    );
  }
});
