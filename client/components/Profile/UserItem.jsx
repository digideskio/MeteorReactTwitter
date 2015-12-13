UserItem = React.createClass({

  'propTypes': {
    'username': React.PropTypes.string.isRequired,
    'userEmail': React.PropTypes.string.isRequired,
    'userId': React.PropTypes.string.isRequired
  },

  render() {
    const styles = {
      'listItemBox': {
        'textAlign': 'left',
        'maxWidth': '400px'
      },

      'userBox': {
        'borderBottom': '1px solid #ddd',
        'display': 'flex',
        'flexDirection': 'row'
      },

      'imgBox': {
        'display': 'inline-block',
        'width': '80px',
        'verticalAlign': 'top',
        'margin': '20px 10px 0 7px'
      },

      'profileImg': {
        'maxWidth': '80px'
      },

      'contentBox': {
        'display': 'inline-block',
        'padding': '20px 10px 10px 20px'
      },

      'img': {
        'width': '80px'
      },

      'nameLink': {
        'textDecoration': 'none',
        'fontSize': '1.2em'
      }
    };

    let hash = CryptoJS.MD5(this.props.userEmail);
    let gravatarUrl = `http://www.gravatar.com/avatar/${hash}/?s=200`;
    let userPath = `/users/${this.props.userId}/`;
    return (
      <div>
        <li style={styles.listItemBox}>
          <div style={styles.userBox}>
            <div style={styles.imgBox}>
              <img src={gravatarUrl}
                 alt='Profile Image'
                 style={styles.profileImg} />
            </div>

            <div style={styles.contentBox}>
              <a href={userPath} 
               style={styles.nameLink}>{this.props.username}</a>
            </div>
          </div>
        </li>
      </div>
    );
  }
});
