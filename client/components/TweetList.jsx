TweetList = React.createClass({
  render() {
    const styles = {
      'ul': {
        'listStyle': 'none',
        'textAlign': 'center',
        'padding': 0
      }
    };

    let tweetItems = this.props.tweets.map((tweet)=> {
      return <TweetItem
              key={tweet._id}
              _id={tweet._id}
              author={tweet.author}
              authorEmail={tweet.authorEmail}
              userId={tweet.userId}
              body={tweet.body}
              submitted={tweet.submitted}
              />;
    });

    return (
      <div className="tweet-list">
        <ul style={styles.ul}>
          {tweetItems}
        </ul>
      </div>
    );
  }
});
