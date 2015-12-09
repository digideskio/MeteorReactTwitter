TweetBox = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      tweets: Tweets.find({}).fetch(),
      user: Meteor.user(),
      limit: 4
    }
  },

  setLimit(e) {
    e.preventDefault();
    console.log('oldlimit', this.data.limit);
    let newLimit = parseInt(this.data.limit) + 1;
    console.log('newLimit', newLimit);
    this.setState({limit: newLimit});
  },

  render() {
    let postTweet = "";
    if(this.data.user){
      postTweet = <a href="/post_tweet">Post Tweet</a>;
    }

    let limitNum = 4;
    let linkAddress = `/tweets?limit=${limitNum}`;

    return (
      <div className="tweet-box">
        {postTweet}
        <h3>Tweet List</h3>
        <TweetList tweets={this.data.tweets} />
        <button>
          <a href={linkAddress} onClick={this.setLimit}>Load More</a>
        </button>
      </div>
    );
  }
});
