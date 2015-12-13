TweetItem = React.createClass({

  'propTypes': {
    'author': React.PropTypes.string.isRequired,
    'userId': React.PropTypes.string,
    'body': React.PropTypes.string.isRequired
  },

  handleDelete(e) {
    e.preventDefault();
    Tweets.remove(this.props._id);
  },

  retweet(e) {
    e.preventDefault();

    let body = `${this.props.body} retweet`;

    let tweet = {
      'body': body
    };

    Meteor.call('tweetInsert', tweet, (err, result)=>{
      if (err) {
        console.log(err.reason);
      }
      FlowRouter.go('/tweets');
    });
  },

  render() {
    const styles = {
      'listItemBox': {
        // 'border': '1px solid green',
        'textAlign': 'left'
      },

      'itemBox': {
        // 'border': '1px solid red'
        'borderBottom': '1px solid #ddd'
      },

      'imgBox': {
        'display': 'inline-block',
        // 'border': '1px solid blue',
        'width': '50px',
        'verticalAlign': 'top',
        'margin': '20px 10px 0 7px'
      },

      'profileImg': {
        'max-width': '50px'
      },

      'contentBox': {
        'display': 'inline-block'
      },

      'buttons': {
        'padding': '0 0 5px 5px'
      },

      'btn': {
        'height': '25px',
        'width': '80px',
        'marginRight': '10px',
        'outline': 0,
        'borderRadius': '10px',
        'border': '2px solid #2c3a55',
        'backgroundColor': 'transparent',
        'fontSize': '1em'
      }
    };

    let tweetItem = '';
    let profileLink = `/users/${this.props.userId}`;
    let time = moment(new Date(this.props.submitted)).fromNow();

    if (Meteor.userId() && Meteor.userId() === this.props.userId) {
      tweetItem = <div style={styles.itemBox}>
                    <div style={styles.imgBox}>
                      <img src="images/favorite-icon-48.png"
                           style={styles.profileImg} />
                    </div>
                    <div style={styles.contentBox}>
                      <div>
                        <a href={profileLink}>{this.props.author} </a>
                        <span >{time}</span>
                      </div>

                      <p>{this.props.body}</p>

                      <div style={styles.buttons}>
                        <button onClick={this.handleDelete}
                                style={styles.btn}>Delete</button>
                      </div>
                    </div>
                  </div>;
    } else if (Meteor.userId() && Meteor.userId() !== this.props.userId) {
      tweetItem = <div style={styles.itemBox}>
                    <div style={styles.imgBox}>
                      <img src="images/favorite-icon-48.png"
                           style={styles.profileImg} />
                    </div>
                    <div style={styles.contentBox}>
                      <div>
                        <a href={profileLink}>{this.props.author} </a>
                        <span >{time}</span>
                      </div>

                      <p>{this.props.body}</p>

                      <div style={styles.buttons}>
                        <button onClick={this.retweet}
                                style={styles.btn}>Retweet</button>
                        <button onClick={this.like}
                                style={styles.btn}>Like</button>
                      </div>
                    </div>
                  </div>;
    } else {
      tweetItem = <div style={styles.itemBox}>
                    <div style={styles.imgBox}>
                      <img src="images/favorite-icon-48.png"
                           style={styles.profileImg} />
                    </div>
                    <div style={styles.contentBox}>
                      <div>
                        <a href={profileLink}>{this.props.author} </a>
                        <span >{time}</span>
                      </div>

                      <p>{this.props.body}</p>
                    </div>
                  </div>;
    }

    return (
      <div style={styles.listItemBox}>
        <li>
          {tweetItem}
        </li>
      </div>
    );
  }
});
