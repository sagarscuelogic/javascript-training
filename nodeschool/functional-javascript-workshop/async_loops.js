function loadUsers(userIds, load, done) {
	var completed = 0,
		users = [];
	
	userIds.forEach(function(id, index) {
		load(id, function(user) {
			users[index] = user;
			if (++completed === userIds.length) return done(users);
		});
	});
}

module.exports = loadUsers;