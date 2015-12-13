UserItem = React.createClass({

  'propTypes': {
    'username': React.PropTypes.string.isRequired,
    'userId': React.PropTypes.string.isRequired
  },

  render() {
    let userPath = `/users/${this.props.userId}/`;
    return (
      <div className="userItem">
        <li>
          <a href={userPath}>{this.props.username}</a>
        </li>
      </div>
    );
  }
});
