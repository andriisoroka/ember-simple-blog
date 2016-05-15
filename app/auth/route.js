import Ember from 'ember';

export default Ember.Route.extend({
    session:Ember.inject.service(),
    actions:{
        login(name,pass){
            let p = this.get('session').authenticate('authenticator:application',name,pass);
            p.then((data) => {
                this.transitionTo('main');
            })
        }
    }
});
