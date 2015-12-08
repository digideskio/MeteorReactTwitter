TweetItem = React.createClass({

  propTypes: {
    author: React.PropTypes.string.isRequired,
    userId: React.PropTypes.string,
    body: React.PropTypes.string.isRequired
  },

  handleDelete(e) {
    e.preventDefault();
    Tweets.remove(this.props._id);
  },

  retweet(e) {
    e.preventDefault();

    let body = this.props.body + ' retweet';

    let tweet = {
      body: body
    };

    Meteor.call('tweetInsert', tweet, (err, result)=>{
      if(err) {
        console.log(err.reason);
      }
      FlowRouter.go('/');
    });
  },

  render() {
    let tweetItem = '';
    if(Meteor.userId() && Meteor.userId() === this.props.userId) {
      tweetItem = <p>
                    {this.props.body} by {this.props.author}
                    <span> <button onClick={this.handleDelete}>X</button></span>
                  </p>;
    } else if(Meteor.userId() && Meteor.userId() !== this.props.userId){
      tweetItem = <p>
                    {this.props.body} by {this.props.author}
                    <span> <button onClick={this.retweet}>Retweet</button></span>
                  </p>;
    } else {
      tweetItem = <p>
                    {this.props.body} by {this.props.author}
                  </p>;
    }

    return (
      <div className="tweet-item">
        <li>
          {tweetItem}
        </li>
      </div>
    );
  }
});
