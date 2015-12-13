Footer = React.createClass({

  render() {
    let styles = {
      'main': {
        'position': 'fixed',
        'left': 0,
        'bottom': 0,
        'height': '22px',
        'width': '100%',
        'marginTop': '10px',
        'textAlign': 'center',
        // 'borderTop': '1px solid #000',
        'backgroundColor': '#fff'
      },

      'link': {
        'display': 'block',
        'textDecoration': 'none',
        'margin': '0 5px 0 0',
        'veticalAlign': 'top',
        'fontSize': '0.8em',
        'float': 'right',
        'color': '#aaa'
      }
    };

    return (
      <div style={styles.main}>
        <a href='https://github.com/yhagio'
            target='_blank' style={styles.link}>
          Yucihi Hagio &#169; 2015
        </a>
      </div>
    );
  }
});
