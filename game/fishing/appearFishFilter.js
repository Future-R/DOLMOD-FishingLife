// 根据string【地点】和当前【月份】【时间】筛选出目前水域出没的鱼
window.appearFishFilter = function appearFishFilter(locate)
{
	// 地点
	var _fishArray = V.Fishing.FishModel.filter(x => x.location.includes(locate));

	// 月与时
	var _CM = Time.month + 1;
	var _CH = Time.hour;
	if (_CH == 0) _CH = 24;
	_fishArray = _fishArray.filter(x => x.month.includes(_CM) && x.hour.includes(_CH));

	// 特殊判断条件 暂时没想好配在哪里
	// 矛尾鱼雨天出没。如果不是雨天，从池子里把矛尾鱼筛掉。
	if (V.weather != 'rain')
	{
		_fishArray = _fishArray.filter(x => x.name != "矛尾鱼");
	}
	// 在周日的黎明，有贞洁誓言，才能抓到萨卡班甲鱼。搞得和独角兽似的。
	if (Time.weekDay != 1 || Time.dayState != "dawn" || V.player.virginity.temple == false)
	{
		_fishArray = _fishArray.filter(x => x.name != "萨卡班甲鱼");
	}
	
	return _fishArray;
}
