MainLayout = React.createClass({
  render() {
    return (
      <div className="main-box">
        <Header />
        {this.props.content}
        <Footer />
      </div>
    );
  }
});
