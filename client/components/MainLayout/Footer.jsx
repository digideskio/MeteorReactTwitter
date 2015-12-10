Footer = React.createClass({

  render() {
    let styles = {
      position: 'fixed',
      left: 0,
      bottom: 0,
      height: '40px',
      width: '100%',
      textAlign: 'center'
    };
    
    return (
      <div style={styles}>
        <p>Created by <a href="https://github.com/yhagio" target="_blank">Yucihi Hagio</a></p>
      </div>
    );
  }
});
