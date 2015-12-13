TweetBox = React.createClass({
  'mixins': [ReactMeteorData],

  getMeteorData() {
    return {
      'tweets': Tweets.find({}, { 'sort': { 'submitted': -1 } }).fetch(),
      'user': Meteor.user()
    };
  },

  setLimit(e) {
    e.preventDefault();

    if (this.data.tweets.length === Session.get('limit')) {
      Session.set('limit', Session.get('limit') + 3);
    } else {
      document.getElementById('tweets-loadmore')
        .setAttribute('class', 'disabledBtn');
    }
  },

  render() {
    let postTweet = '';
    if (this.data.user) {
      postTweet = <a href="/post_tweet">Post Tweet</a>;
    }

    return (
      <div className="tweet-box">
        {postTweet}
        <h3>Tweet List</h3>
        <TweetList tweets={this.data.tweets} />
        <button id="tweets-loadmore" onClick={this.setLimit}>
          Load More
        </button>
      </div>
    );
  }
});
