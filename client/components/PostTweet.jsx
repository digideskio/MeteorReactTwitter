PostTweet = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    let tweet = {
      'body': ReactDOM.findDOMNode(this.refs.textInput).value.trim()
    };

    if (tweet.body.length > 140) {
      return;
    }

    Meteor.call('tweetInsert', tweet, (err, result)=>{
      if (err) {
        console.log(err.reason);
      }
      ReactDOM.findDOMNode(this.refs.textInput).value = '';
      FlowRouter.go('/tweets');
    });
  },

  render() {
    const styles = {
      'postBpx': {
        'width': '100%'
      },

      'form': {
        'width': '100%',
        'textAlign': 'center',
        'marginTop': '30px'
      },

      'input': {
        'width': '100%',
        'height': '30px',
        'fontSize': '1em',
        'paddingLeft': '5px'
      },

      'btn': {
        'height': '30px',
        'width': '100px',
        'margin': '10px',
        'outline': 0,
        'borderRadius': '10px',
        'border': '2px solid #d38',
        'backgroundColor': 'transparent',
        'fontSize': '1.1em',
        'color': '#d38'
      }
    };

    return (
      <div style={styles.postBox}>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            type='text'
            ref='textInput'
            placeholder='Max:140 chars'
            style={styles.input}
            autoFocus
            required />
          <button style={styles.btn}>Submit</button>
        </form>
      </div>
    );
  }
});
