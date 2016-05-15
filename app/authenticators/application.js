import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore(data) {
  },

  authenticate(name,pass) {
    // let defer = Ember.RSVP.defer();
    // setTimeout(() => {
    //     defer.resolve('success');
    // },1000);
    // return defer.promise;
    //this.isAuthenticated = true;
    
    return Ember.RSVP.resolve({data:'success',token:'asdadadadasasasdsa'})
  },

  //isAuthenticated:false,

  invalidate(data) {
    return Ember.RSVP.resolve('success')
  }
});
