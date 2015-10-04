FlowRouter.route('/', {
  action() {
    ReactLayout.render(TweetBox);
  }
});

FlowRouter.route('/post_tweet', {
  action() {
    ReactLayout.render(PostTweet);
  }
});

FlowRouter.notFound = {
  action() {
    ReactLayout.render(NotFound);
  }
}
