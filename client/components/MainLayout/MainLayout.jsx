MainLayout = React.createClass({
  render() {
    let styles = {
      margin: '50px auto 40px',
      padding: '10px'
    };
    
    return (
      <div className="main-box">
        <Header />
        <div style={styles}>
          {this.props.content}
        </div>
        <Footer />
      </div>
    );
  }
});
