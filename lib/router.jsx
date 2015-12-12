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
    Tracker.autorun(()=>{
      this.register('tweets', Meteor.subscribe('tweets', Session.get('limit')));
    });
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

FlowRouter.route('/users/:userid', {
  name: 'user',
  subscriptions(params, queryParams) {
    Tracker.autorun(()=>{
      this.register('profile-tweets', Meteor.subscribe('profile-tweets', params.userid, Session.get('profilelimit'))); 
    });
    this.register('user', Meteor.subscribe('user', params.userid));
  },

  action(params) {
    ReactLayout.render(MainLayout, {
      content: <ProfileBox {...params}/>
    });
  }
});

FlowRouter.route('/users/:userid/followers', {
  name: 'followers',
  subscriptions(params, queryParams) {
    Tracker.autorun(()=>{
      this.register('followers', Meteor.subscribe('followers', params.userid)); 
    });
    this.register('user', Meteor.subscribe('user', params.userid));
  },

  action(params) {
    ReactLayout.render(MainLayout, {
      content: <FollowersBox {...params}/>
    });
  }
});

FlowRouter.route('/users/:userid/followings', {
  name: 'followings',
  subscriptions(params, queryParams) {
    Tracker.autorun(()=>{
      this.register('followings', Meteor.subscribe('followings', params.userid)); 
    });
    this.register('user', Meteor.subscribe('user', params.userid));
  },

  action(params) {
    ReactLayout.render(MainLayout, {
      content: <FollowingsBox {...params}/>
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
