var stockTradingLogModul = angular.module('stockTradingLogModul', []);

stockTradingLogModul.controller('stockTradingLogCtrl'
	, ['$scope'
	, function($scope){
		var self = this;
		self.name = 'jerry';
		self.aabc = function(){
			self.name = 'jerry1';
		};
	}
]);