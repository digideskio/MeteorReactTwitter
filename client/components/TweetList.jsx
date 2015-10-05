TweetList = React.createClass({
  render() {
    let tweetItems = this.props.tweets.map((tweet)=> {
      return <TweetItem
              key={tweet._id}
              _id={tweet._id}
              body={tweet.body}
              />
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
