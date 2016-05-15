import Ember from 'ember';

export default Ember.Component.extend({
  errorMessage:'',
  name:'',
  email:'',
  password:'',
  actions:{
    submit(name,email,password){
      this.get('pa')(name,email,password).then((res) => {
        this.sendAction('onSuccess'); 
      }).catch(() => {
        this.set('errorMessage',"Couln't save user!!!");
      });
    }
  }
});
