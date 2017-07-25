// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function(options = {}) { // eslint-disable-line no-unused-vars
  return function customizeGithubProfile(hook) {

    console.log('Customizing Github Profile');
    // If there is a github field they signed up or
    // signed in with github so let's pull the email. If
    if (hook.data.github) {
      console.log(hook.data);
      hook.data.email = hook.data.github.profile.emails[0].value;
      hook.data.username = hook.data.github.profile.username;
      hook.data.displayName = hook.data.github.profile.displayName;

    }

    // If you want to do something whenever any OAuth
    // provider authentication occurs you can do this.
    if (hook.params.oauth) {
      // do something for all OAuth providers
    }

    if (hook.params.oauth.provider === 'github') {
      // do something specific to the github provider
    }

    return Promise.resolve(hook);
  };
};
