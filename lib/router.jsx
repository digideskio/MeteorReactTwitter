FlowRouter.route('/', {
  name: 'home',

  action() {
    ReactLayout.render(MainLayout, {
      content: <Home />
    });
  }
});

FlowRouter.route('/tweets', {
  name: 'tweets',
  subscriptions(params, queryParams) {
    this.register('tweets', Meteor.subscribe('tweets', queryParams.limit));
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
