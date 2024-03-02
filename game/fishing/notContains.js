// 返回的index是check的索引
window.notContains = function notContains(target, check) {
	if (check.length <= 0) return -1;
	if (target.length <= 0) return 0;
	let _index = -1;
	for (let i = 0; i < check.length; i++) {
		if (target.indexOf(check[i]) == -1)
		{
			_index = i;
			break;
		}
	}
	return _index;
}
