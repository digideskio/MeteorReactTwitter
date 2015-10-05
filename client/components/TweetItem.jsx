TweetItem = React.createClass({
  propTypes: {
    body: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <div className="tweet-item">
        <li>
          <p>{this.props.body}</p>
        </li>
      </div>
    );
  }
});
