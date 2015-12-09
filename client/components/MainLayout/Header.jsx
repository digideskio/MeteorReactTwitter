Header = React.createClass({
  render() {
    
    let styles = {
      backgroundColor: '#ddd'
    };

    return (
      <div className="header-box" style={styles}>
        <AccountsUIWrapper />
        <hr />
      </div>
    );
  }
});
