FlowRouter.route('/', {
  subscriptions(params) {
    this.register("tweets", Meteor.subscribe("tweets"));
  },

  action() {
    ReactLayout.render(MainLayout, {
      content: <TweetBox />
    });
  }
});

FlowRouter.route('/post_tweet', {
  action() {
    ReactLayout.render(MainLayout, {
      content: <PostTweet />
    });
  }
});

FlowRouter.notFound = {
  action() {
    ReactLayout.render(NotFound);
  }
}
