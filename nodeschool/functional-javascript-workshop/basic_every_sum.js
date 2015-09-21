function checkUsersValid (goodUsers) {
	return function allUsresValid (submittedUsers) {
		return submittedUsers.every(function(submittedUser) {
			return goodUsers.some(function(goodUser) {
				return goodUser === submittedUser;
			});
		});
	}
}

module.exports = checkUsersValid;