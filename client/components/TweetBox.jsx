TweetBox = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      tweets: Tweets.find({}).fetch()
    }
  },

  render() {
    return (
      <div className="tweet-box">
        <a href="/post_tweet">Post Tweet</a>
        <h3>Tweet List</h3>
        <TweetList tweets={this.data.tweets} />
      </div>
    );
  }
});
