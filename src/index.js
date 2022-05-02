const MAP = require("./data");

function isValidCode(code) {
	let result = MAP.hasOwnProperty(code);
	return result;
}

function getName(code, type) {
	if (isValidCode(code)) {
		return MAP[code][type];
	} else {
		return null;
	}
}

function getList (type) {
	let result = [];
	for (let key in MAP) {
		let obj = MAP[key];
		result.push({
			name: key,
			value: obj[key][type]
		});
	}

	return result;
}

function getNames (type) {
	let result = MAP.map((obj) => {
		return obj[type];
	});

	return result;
}

module.exports = {
	isValidCode: isValidCode,
	getCodeList: () => {
		return Object.keys(MAP);
	},
	//////////
	getNativeName: (code) => {
		getName(code, "native");
	},
	getAllNaticeNames: () => {
		return getNames ("native");
	},
	getNativeList: () => {
		return getList("native");
	},
	//////////
	getEnglishName: (code) => {
		getName(code, "english");
	},
	getAllEnglishNames: () => {
		return getNames ("english");
	},
	getEnglishList: () => {
		return getList("english");
	},
	//////////
	getChineseName: (code) => {
		getName(code, "chinese");
	},
	getAllChineseNames: () => {
		return getNames ("chinese");
	},
	getChineseList: () => {
		return getList("chinese");
	}
};