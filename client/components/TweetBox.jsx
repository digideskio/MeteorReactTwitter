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
        <h1>Hello</h1>
        <a href="/post_tweet">Post Tweet</a>
        <TweetList tweets={this.data.tweets} />
      </div>
    );
  }
});
