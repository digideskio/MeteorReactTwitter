FlowRouter.route('/', {
  name: 'home',
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
  name: 'postTweet',
  triggersEnter: [loggedinOnly],
  action() {
    ReactLayout.render(MainLayout, {
      content: <PostTweet />
    });
  }
});

FlowRouter.notFound = {
  name: 'notFound',
  action() {
    ReactLayout.render(NotFound);
  }
};

function loggedinOnly(context, redirect) {
  if(!Meteor.userId()) {
    redirect('home');
  }
}
