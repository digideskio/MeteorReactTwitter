TweetList = React.createClass({
  render() {
    let tweetItems = this.props.tweets.map((tweet)=> {
      return <TweetItem
              key={tweet._id}
              _id={tweet._id}
              author={tweet.author}
              userId={tweet.userId}
              body={tweet.body}
              submitted={tweet.submitted}
              />;
    });

    return (
      <div className="tweet-list">
        <ul>
          {tweetItems}
        </ul>
      </div>
    );
  }
});
