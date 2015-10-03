PostTweet = React.createClass({
  render() {
    return (
      <div className="ssup-box">
        <form>
          <input type="text" placeholder="Max:140 chars" />
          <button>Submit</button>
        </form>
        <a href="/">Home</a>
      </div>
    );
  }
});
