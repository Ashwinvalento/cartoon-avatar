var config = require("../config");

var toonavatar = module.exports = {
	/**
	 * generate_avatar will generate a cartoon avatar.
	 * 
	 * @param {Object}
	 *            options
	 * @return {String}
	 */
	generate_avatar : function(options) {
		/*
		 * options = { "gender": "male" , "id":xxx}
		 * 
		 */
		var baseURL = "https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/";
		var gender, id;

		if (typeof options != 'undefined' && options) {
			//If options are given but one of them is skipped
			if (typeof options.gender === 'undefined' ) {
				gender = getRandomInt(0, 1) % 2 ? "male" : "female";
			} else {
				gender = getGender(options.gender);
			}

			if ( typeof options.id === 'undefined') {
				id = getRandomInt(1,
						gender === "male" ? config.MALE_IMAGE_COUNT
								: config.FEMALE_IMAGE_COUNT);
			} else {
				id = options.id % Math.round(gender === "male" ? config.MALE_IMAGE_COUNT + 1
						: config.FEMALE_IMAGE_COUNT + 1 );
				id = (id === 0 ? 1 : id );
			}
		}else{
			//If no options are given
			gender = getRandomInt(0, 1) % 2 ? "male" : "female";
			id = getRandomInt(1,
					gender === "male" ? config.MALE_IMAGE_COUNT
							: config.FEMALE_IMAGE_COUNT);
		}
		return baseURL + gender + "/" + id + ".png";
	}

};

function getGender(gender) {

	gender = gender.trim().toLowerCase();
	if (gender === "male" || gender === "m") {
		return "male";
	} else if (gender === "female" || gender === "f") {
		return "female";
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}