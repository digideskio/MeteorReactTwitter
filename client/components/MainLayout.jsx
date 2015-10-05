MainLayout = React.createClass({
  render() {
    return (
      <div className="main-box">
        <h1>Header</h1>
        {this.props.content}
        <h3>Footer</h3>
      </div>
    );
  }
});
