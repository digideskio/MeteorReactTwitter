Header = React.createClass({
  render() {

    let styles = {
      backgroundColor: '#ededed',
      position: 'fixed',
      top: 0,
      left: 0,
      height: '30px',
      width: '100%',
      padding: '15px 10px 5px 10px'
    };

    let headerItem = {
      marginRight: '10px'
    };

    return (
      <div style={styles}>
        <a href="/tweets" style={headerItem}>TWEETS</a>
        <AccountsUIWrapper />
      </div>
    );
  }
});
