TweetBox = React.createClass({
  mixins: [ReactMeteorData],

  // getInitialState() {
  //   return {
  //     limit: Session.get('limit')
  //   }
  // },

  getMeteorData() {
    return {
      tweets: Tweets.find({}, { sort: { submitted: -1 } }).fetch(),
      user: Meteor.user()
    }
  },

  setLimit(e) {
    e.preventDefault();
    // let newLimit = this.state.limit + 3;
    // this.setState({limit: newLimit});
    // console.log('Len: ', this.data.tweets.length);
    // console.log('Limit: ', this.state.limit);
    // if(this.data.tweets.length < this.state.limit){
    //   $('#loadmore').addClass('disabledBtn');
    // }
    if(this.data.tweets.length === Session.get('limit')){
      Session.set('limit', Session.get('limit') + 3);
    } else {
      $('#loadmore').addClass('disabledBtn');
    }
  },

  render() {
    let postTweet = "";
    if(this.data.user){
      postTweet = <a href="/post_tweet">Post Tweet</a>;
    }

    // let linkAddress = `/tweets?limit=${this.state.limit}`;
    // <a href={linkAddress} onClick={this.setLimit}>Load More</a>

    return (
      <div className="tweet-box">
        {postTweet}
        <h3>Tweet List</h3>
        <TweetList tweets={this.data.tweets} />
        <button id="loadmore">
          
          <a href="" onClick={this.setLimit}>Load More</a>
        </button>
      </div>
    );
  }
});
