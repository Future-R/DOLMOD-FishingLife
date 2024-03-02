// timeType: 0月份；1小时
window.timeFormat = function timeFormat(array, timeType) {
	var _return = "";
	switch (timeType) {
		case 0:
			if (array.length == 12) 
			{
				_return = "全年";
			}
			else 
			{
				var _firstElement = array[0];
				var _lastElement = array[array.length - 1];
				_return = `${_firstElement}~${_lastElement}月`;
			}
			break;

		case 1:
			if (array.length == 24) 
			{
				_return = "整天";
			}
			else 
			{
				var _firstElement = array[0];
				var _lastElement = array[array.length - 1];
				_return = `${_firstElement}~${_lastElement}点`;
			}
			break;
		default:
			_return = "???";
			break;
	}

	return _return;
}
