var keystone = require('keystone'),
	User = keystone.list('User');
	
exports = module.exports = function(done) {
	new User.model({
		name: {first: 'Novica', last: 'Pilipovic'},
		email: 'javasoftwaredeveloper85@gmail.com',
		password: 'novica',
		canAccessKeystone: true
	}).save(done);
};