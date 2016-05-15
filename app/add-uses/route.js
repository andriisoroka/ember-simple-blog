import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    toGrid(){
      this.transitionTo('users')
    },
    save(name,email,password){
      let newUser = this.store.createRecord('user',{name,email,password});
      return newUser.save();
    }
  }
});
