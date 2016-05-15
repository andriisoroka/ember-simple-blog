import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(data, block) {
    console.log(data);
    block('Token','My custom tokennnn')
  }
});
