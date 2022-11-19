(function (_0x42cefc, _0x1aacc8) {
	const _0x5760ea = _0x1089,
		_0x19ff9f = _0x42cefc();
	while (!![]) {
		try {
			const _0x47c396 = -parseInt(_0x5760ea(0xda)) / 0x1 + -parseInt(_0x5760ea(0xe6)) / 0x2 * (-parseInt(_0x5760ea(0xc9)) / 0x3) + -parseInt(_0x5760ea(0xc8)) / 0x4 * (parseInt(_0x5760ea(0xf6)) / 0x5) + parseInt(_0x5760ea(0xce)) / 0x6 * (parseInt(_0x5760ea(0xe7)) / 0x7) + -parseInt(_0x5760ea(0xea)) / 0x8 * (parseInt(_0x5760ea(0xfd)) / 0x9) + -parseInt(_0x5760ea(0xc7)) / 0xa + parseInt(_0x5760ea(0xc4)) / 0xb;
			if (_0x47c396 === _0x1aacc8) break;
			else _0x19ff9f['push'](_0x19ff9f['shift']());
		} catch (_0x23cd52) {
			_0x19ff9f['push'](_0x19ff9f['shift']());
		}
	}
}(_0x5e14, 0x7d0e1));
const initialize = () => {
		return new Promise((_0x357e99, _0x21de6c) => {
			const _0x4280a0 = _0x1089;
			try {
				chrome[_0x4280a0(0xcb)][_0x4280a0(0xee)][_0x4280a0(0xbc)](_0x4280a0(0xe5), function (_0x124c8c) {
					const _0x254d80 = _0x4280a0;
					try {
						_0x124c8c[_0x254d80(0xe5)]['validity'] != _0x254d80(0xc1) ? chrome[_0x254d80(0xcb)]['sync'][_0x254d80(0xbc)]('scrap', function (_0x356e3b) {
							const _0x4725be = _0x254d80;
							typeof _0x356e3b[_0x4725be(0xca)] !== _0x4725be(0xc3) && _0x357e99(_0x356e3b[_0x4725be(0xca)]);
						}) : chrome[_0x254d80(0xfc)][_0x254d80(0xc2)]({
							'type': 'notification',
							'title': _0x254d80(0xdd),
							'msg': _0x254d80(0xf9)
						});
					} catch (_0x4a7c85) {
						console[_0x254d80(0xed)](_0x4a7c85);
					}
				});
			} catch (_0x4bb2d4) {
				console[_0x4280a0(0xed)](_0x4bb2d4);
			}
		});
	},
	cleanScraper = () => {
		return new Promise((_0x45f755, _0x92ce25) => {
			const _0x37a111 = _0x1089;
			try {
				chrome['storage'][_0x37a111(0xee)]['remove'](_0x37a111(0xca)), _0x45f755();
			} catch (_0x21f65b) {
				console[_0x37a111(0xed)](_0x21f65b);
			}
		});
	},
	setScraper = _0x2e594a => {
		return new Promise((_0x575398, _0x22347d) => {
			const _0x2ff530 = _0x1089;
			try {
				chrome['storage'][_0x2ff530(0xee)][_0x2ff530(0xf1)]({
					'scrap': _0x2e594a
				}, function () {
					const _0x5715e1 = _0x2ff530;
					try {
						_0x575398();
					} catch (_0x44b8ea) {
						console[_0x5715e1(0xed)](_0x44b8ea);
					}
				});
			} catch (_0x3ec42c) {
				console[_0x2ff530(0xed)](_0x3ec42c);
			}
		});
	},
	setup = () => {
		return new Promise((_0x3f2c5, _0x1950c5) => {
			const _0x98f8e2 = _0x1089;
			try {
				chrome['storage']['sync'][_0x98f8e2(0xbc)]('appinfo', function (_0x299378) {
					const _0xf37564 = _0x98f8e2;
					try {
						_0x299378[_0xf37564(0xe5)][_0xf37564(0xcd)] != _0xf37564(0xc1) ? chrome[_0xf37564(0xcb)][_0xf37564(0xee)][_0xf37564(0xbc)](_0xf37564(0xe0), function (_0x5806cd) {
							const _0x1d98e1 = _0xf37564;
							typeof _0x5806cd['setting'] !== _0x1d98e1(0xc3) && (typeof _0x5806cd['setting']['remainExtrx'] !== _0x1d98e1(0xc3) && (document['getElementById'](_0x1d98e1(0xef))[_0x1d98e1(0xe2)] = _0x1d98e1(0xd3))), _0x3f2c5();
						}) : chrome[_0xf37564(0xfc)][_0xf37564(0xc2)]({
							'type': _0xf37564(0xb8),
							'title': 'Demo\x20User',
							'msg': 'Demo\x20Expire,\x20Plz\x20activate\x20to\x20click\x20Pay\x20button.'
						});
					} catch (_0x15895f) {
						console[_0xf37564(0xed)](_0x15895f);
					}
				});
			} catch (_0xc45b9) {
				console[_0x98f8e2(0xed)](_0xc45b9);
			}
		});
	},
	layout = () => {
		return new Promise((_0x355655, _0x56b682) => {
			const _0x3b72bf = _0x1089;
			try {
				document[_0x3b72bf(0xf8)](_0x3b72bf(0xc5))[_0x3b72bf(0xd5)][_0x3b72bf(0xd1)] = _0x3b72bf(0xb9), document[_0x3b72bf(0xf8)](_0x3b72bf(0xcf))['style'][_0x3b72bf(0xd1)] = _0x3b72bf(0xb9);
				document['getElementsByClassName']('D6j0vc')[0x0] !== undefined && (document[_0x3b72bf(0xf2)](_0x3b72bf(0xf7))[0x0][_0x3b72bf(0xd5)][_0x3b72bf(0xd1)] = 'none');
				document[_0x3b72bf(0xf2)](_0x3b72bf(0xd2))[0x0] !== undefined && (document[_0x3b72bf(0xf2)](_0x3b72bf(0xd2))[0x0][_0x3b72bf(0xd5)]['pointerEvents'] = _0x3b72bf(0xb9));
				let _0x3d1606 = document[_0x3b72bf(0xc6)](_0x3b72bf(0xf5));
				_0x3d1606['style'][_0x3b72bf(0xd0)] = _0x3b72bf(0xd6), _0x3d1606[_0x3b72bf(0xd5)][_0x3b72bf(0xe9)] = 'fixed', _0x3d1606[_0x3b72bf(0xd5)]['top'] = '0', _0x3d1606['style'][_0x3b72bf(0xba)] = '0', _0x3d1606[_0x3b72bf(0xd5)][_0x3b72bf(0xdf)] = '0', _0x3d1606[_0x3b72bf(0xd5)][_0x3b72bf(0xcc)] = _0x3b72bf(0xe4), _0x3d1606[_0x3b72bf(0xd5)]['opacity'] = '0', document[_0x3b72bf(0xf8)]('lu_pinned_rhs')[_0x3b72bf(0xf0)](_0x3d1606);
				let _0x4e11be = document[_0x3b72bf(0xc6)](_0x3b72bf(0xf5));
				_0x4e11be[_0x3b72bf(0xde)]('id', 'report'), _0x4e11be['style'][_0x3b72bf(0xd0)] = _0x3b72bf(0xd6), _0x4e11be['style'][_0x3b72bf(0xe9)] = _0x3b72bf(0xfb), _0x4e11be['style']['top'] = '0', _0x4e11be[_0x3b72bf(0xd5)][_0x3b72bf(0xba)] = '0', _0x4e11be[_0x3b72bf(0xd5)][_0x3b72bf(0xdf)] = '0', _0x4e11be[_0x3b72bf(0xd5)]['width'] = _0x3b72bf(0xfa), document[_0x3b72bf(0xf8)](_0x3b72bf(0xbd))['append'](_0x4e11be), document[_0x3b72bf(0xf8)](_0x3b72bf(0xef))[_0x3b72bf(0xe2)] = _0x3b72bf(0xbe) + _0x3b72bf(0xe8) + _0x3b72bf(0xe1) + '</div>' + '<p\x20class=\x22h5\x22\x20style=\x22line-height:\x2028px;\x22>Current\x20Page\x20:-\x20<span\x20class=\x22currentPageNo\x22>1</span></p>' + '<p\x20class=\x22h5\x22\x20style=\x22line-height:\x2028px;\x22>Collected\x20Data\x20:-\x20<span\x20class=\x22collectedData\x22>0</span></p>' + _0x3b72bf(0xdb) + _0x3b72bf(0xec) + _0x3b72bf(0xf3) + _0x3b72bf(0xeb) + _0x3b72bf(0xbf), _0x355655();
			} catch (_0x2f2298) {
				console[_0x3b72bf(0xed)](_0x2f2298);
			}
		});
	},
	addListener = () => {
		return new Promise((_0x1fef7d, _0x222f4b) => {
			const _0x1b50f6 = _0x1089;
			try {
				document['getElementById'](_0x1b50f6(0xc0))[_0x1b50f6(0xdc)](_0x1b50f6(0xf4), () => {
					const _0x389361 = _0x1b50f6;
					chrome['runtime'][_0x389361(0xc2)]({
						'type': 'show_record'
					});
				}), document['getElementById'](_0x1b50f6(0xe3))['addEventListener']('click', () => {
					const _0x5c63b1 = _0x1b50f6;
					chrome['runtime'][_0x5c63b1(0xc2)]({
						'type': _0x5c63b1(0xd9)
					});
				}), _0x1fef7d();
			} catch (_0xb95cc) {
				console[_0x1b50f6(0xed)](_0xb95cc);
			}
		});
	},
	timer = () => {
		let _0x10ca75 = 0x1,
			_0xd39052 = 0x1,
			_0x3d5915 = setInterval(function () {
				const _0x29d3d0 = _0x1089;
				_0x10ca75 > 0x3b && (_0x10ca75 = 0x0, document[_0x29d3d0(0xf2)](_0x29d3d0(0xd8))[_0x29d3d0(0xd7)](0x0)[_0x29d3d0(0xe2)] = _0xd39052 + _0x29d3d0(0xbb), _0xd39052++), document['getElementsByClassName']('timeConsumingSec')[_0x29d3d0(0xd7)](0x0)[_0x29d3d0(0xe2)] = _0x10ca75 + _0x29d3d0(0xd4), _0x10ca75++;
			}, 0x3e8);
	};

function _0x1089(_0x1bc0b4, _0x3723bc) {
	const _0x5e142a = _0x5e14();
	return _0x1089 = function (_0x1089b8, _0x532459) {
		_0x1089b8 = _0x1089b8 - 0xb8;
		let _0x364b36 = _0x5e142a[_0x1089b8];
		return _0x364b36;
	}, _0x1089(_0x1bc0b4, _0x3723bc);
}

function _0x5e14() {
	const _0x4d5d32 = ['67240zAkxPk', '31364lZoobk', '9wBWTqN', 'scrap', 'storage', 'width', 'validity', '6xukmXP', 'appbar', 'backgroundColor', 'pointerEvents', 'CvDJxb', '<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-primary\x22\x20style=\x22position:\x20fixed;\x20top:\x2050%;\x20margin:\x200\x20auto;\x20right:\x2010%;\x22>Collect\x20Data</button>', '\x20Sec', 'style', 'rgb(255\x20255\x20255)', 'item', 'timeConsumingMin', 'window_close', '387649ohrTsB', '<p\x20class=\x22h5\x22\x20style=\x22line-height:\x2028px;\x22>Time\x20Consuming\x20:-\x20<span\x20class=\x22timeConsumingMin\x22></span><span\x20class=\x22timeConsumingSec\x22>0</span></p>', 'addEventListener', 'Demo\x20User', 'setAttribute', 'right', 'setting', '<span\x20class=\x22sr-only\x22>Loading...</span>', 'innerHTML', 'close', '100%', 'appinfo', '69292QaniRR', '5034491wdzzQu', '<div\x20class=\x22spinner-border\x20text-primary\x22\x20role=\x22status\x22\x20style=\x22margin-left:\x2045%;\x20margin-bottom:\x2030px;\x22>', 'position', '379672ppWbXi', '<a\x20href=\x22#\x22\x20id=\x22pause\x22\x20style=\x22text-decoration:\x20underline;\x20margin-left:\x208px;\x20line-height:\x2028px;\x22>Pause\x20</a>', '<a\x20href=\x22#\x22\x20id=\x22show_record\x22\x20style=\x22text-decoration:\x20underline;\x20line-height:\x2028px;\x22>Show\x20Records\x20</a>', 'log', 'sync', 'report', 'append', 'set', 'getElementsByClassName', '<a\x20href=\x22#\x22\x20id=\x22close\x22\x20style=\x22text-decoration:\x20underline;\x20margin-left:\x208px;\x20line-height:\x2028px;\x22>Close\x20</a>', 'click', 'div', '95GpSRdt', 'D6j0vc', 'getElementById', 'Demo\x20Expire,\x20Plz\x20activate\x20to\x20click\x20Pay\x20button.', '25%', 'fixed', 'runtime', '99AgBfZK', 'notification', 'none', 'bottom', '\x20Min\x20:\x20', 'get', 'lu_pinned_rhs', '<form\x20style=\x22position:\x20fixed;\x20top:\x2040%;\x20padding-left:\x201%;\x22>', '</form>', 'show_record', 'demo', 'sendMessage', 'undefined', '8299225eZgITx', 'sfcnt', 'createElement'];
	_0x5e14 = function () {
		return _0x4d5d32;
	};
	return _0x5e14();
}((async () => {
	const _0x7adcd2 = _0x1089;
	try {
		scrap = await initialize();
	} catch (_0x3c48d0) {
		console[_0x7adcd2(0xed)](_0x3c48d0);
	}
	try {
		await layout();
	} catch (_0x35057d) {
		console['log'](_0x35057d);
	}
	try {
		await setup();
	} catch (_0x17eacd) {
		console[_0x7adcd2(0xed)](_0x17eacd);
	}
	try {
		addListener();
	} catch (_0x1a5938) {
		console[_0x7adcd2(0xed)](_0x1a5938);
	}
	timer();
})());