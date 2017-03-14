import DS from 'ember-data';

export default DS.Model.extend({
	songName: DS.attr('string'),
	artistName: DS.attr('string'),
	genre: DS.attr('string')

});
