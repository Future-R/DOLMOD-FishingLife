window.sellAllFish = function sellAllFish()
{
	var _money = 0;
	SugarCube.State.variables.Fishing.currentFish.forEach(element => {
		_money += V.Fishing.FishModel[element].prices * 100;
	});
	SugarCube.State.variables.Fishing.currentFish = [];
	return _money;
}
