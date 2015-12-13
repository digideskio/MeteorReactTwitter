PostTweet = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    let tweet = {
      'body': ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    };

    Meteor.call('tweetInsert', tweet, (err, result)=>{
      if (err) {
        console.log(err.reason);
      }
      ReactDOM.findDOMNode(this.refs.textInput).value = '';
      FlowRouter.go('/tweets');
    });
  },

  render() {
    return (
      <div className="post-tweet-box">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="textInput"
            placeholder="Max:140 chars" />
          <button>Submit</button>
        </form>
        <a href="/">Home</a>
      </div>
    );
  }
});
