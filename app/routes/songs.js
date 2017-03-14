import Ember from 'ember';

export default Ember.Route.extend({
	model() {
	  return [
	  	this.get('store').createRecord('song', { songName: 'Hello', artistName: 'Lionel Richie', genre: 'Pop/Jazz/Funk/Easy Listening' })
	  ]
	}
});
