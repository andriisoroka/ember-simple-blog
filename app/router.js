import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('add-uses',{path:'/users/add'});
  this.route('posts');
  this.route('comments');
  this.route('main',{path:"/"});
  this.route('auth');
});

export default Router;
