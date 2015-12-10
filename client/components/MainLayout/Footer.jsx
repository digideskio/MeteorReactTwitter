Footer = React.createClass({

  render() {
    let styles = {
      position: 'fixed',
      left: 0,
      bottom: 0,
      height: '40px',
      width: '100%',
      marginTop: '10px',
      textAlign: 'center',
      borderTop: '1px solid #000'
    };
    
    return (
      <div style={styles}>
        <p>Created by <a href="https://github.com/yhagio" target="_blank">Yucihi Hagio</a></p>
      </div>
    );
  }
});
