import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session:Ember.inject.service(),
  beforeModel(){
    this._super(...arguments);
    console.log('transition')
  },
  actions:{
    logout(){
      this.get('session').invalidate();
    }
  },
  setupController: function(controller, model) {
    	this._super(controller, model);
    	controller.set('session',this.get('session'));
      console.log(this.get('session').get('session.content.authenticated.token'))
  	}
});
