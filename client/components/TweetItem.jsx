TweetItem = React.createClass({
  propTypes: {
    author: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <div className="tweet-item">
        <li>
          <p>{this.props.body} by {this.props.author}</p>
        </li>
      </div>
    );
  }
});
