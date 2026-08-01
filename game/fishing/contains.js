window.fishContains = function fishContains(target, check) {
	let _index = -1;
	for (let i = 0; i < check.length; i++) {
		if (target.indexOf(check[i]) > -1) {
			_index = i;
			break;
		}
	}
	return _index;
}
