Footer = React.createClass({

  render() {
    let styles = {
      'main': {
        'position': 'fixed',
        'left': 0,
        'bottom': 0,
        'height': '35px',
        'width': '100%',
        'marginTop': '10px',
        'textAlign': 'center',
        'borderTop': '1px solid #000'
      },

      'text': {
        'margin': '10px 0 0 0',
        'veticalAlign': 'top'
      }
    };

    return (
      <div style={styles.main}>
        <p style={styles.text}>
          Created by
          <a href="https://github.com/yhagio" target="_blank">
            Yucihi Hagio
          </a>
        </p>
      </div>
    );
  }
});
