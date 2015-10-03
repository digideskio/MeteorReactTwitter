FlowRouter.route('/', {
  action() {
    ReactLayout.render(Ssup);
  }
});

FlowRouter.route('/post_tweet', {
  action() {
    ReactLayout.render(PostTweet);
  }
});
