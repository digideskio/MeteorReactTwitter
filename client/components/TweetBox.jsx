TweetBox = React.createClass({
  'mixins': [ReactMeteorData],

  getMeteorData() {
    return {
      'tweets': Tweets.find({}, { 'sort': { 'submitted': -1 } }).fetch()
    };
  },

  setLimit(e) {
    e.preventDefault();

    if (this.data.tweets.length === Session.get('limit')) {
      Session.set('limit', Session.get('limit') + 3);
      if (document.getElementById('moreTweets').innerHTML === 'No More') {
        document.getElementById('moreTweets').innerHTML = 'Load More';
      }
    } else {
      document.getElementById('moreTweets').innerHTML = 'No More';
    }
  },

  render() {
    let styles = {
      'tweetBox': {
        'width': '100%',
        'textAlign': 'center',
        'padding': 0
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

    let loadMore = <p>No tweets</p>;
    if (this.data.tweets && this.data.tweets.length > 0) {
      loadMore = <button id='moreTweets'
                  onClick={this.setLimit} style={styles.loadMore}>
                  Load More
                </button>;
    }

    return (
      <div style={styles.tweetBox}>
        <TweetList tweets={this.data.tweets} />
        {loadMore}
      </div>
    );
  }
});
