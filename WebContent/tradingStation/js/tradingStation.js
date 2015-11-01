var tradingStation = angular.module('tradingStation', ['ngRoute', 'stockTradingLogModul']);

tradingStation.config(
	['$routeProvider'
	, function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'stockTradingLog.html',
			controller: 'stockTradingLogCtrl'
		})
		.
	    otherwise({
	    	redirectTo: '/'
	    });
	}
]);