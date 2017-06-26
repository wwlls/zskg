var App = angular.module('App',["ui.router"]);
App.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home',{
        url: '/home',
        templateUrl: 'home.html',
    })
    .state('group',{
        url: '/group',
        templateUrl: '/group.html',
    })
    .state('corporate',{
        url: '/corporate',
        templateUrl: 'corporate.html',
    })
    .state('news',{
        url: '/news',
        templateUrl: 'news.html',
    })
    .state('recruit',{
        url: '/recruit',
        templateUrl: 'recruit.html',
    })
})

App.controller('testController', function ($scope) {
        $scope.img = [{
          imageUrl: 'images/banner01.jpg',
        }, 
        {
          imageUrl: 'images/banner01.jpg',
        }, 
        {
          imageUrl: 'images/banner01.jpg',
        }];
    });
  // var routingDemoApp = angular.module('routingDemoApp',['ngRoute'])
 //    routingDemoApp.config(['$routeProvider', function($routeProvider){
 //      $routeProvider
 //      .when('/home',{
 //      	templateUrl: "home.html",
 //      	controller: 'indexController'
 //    	})
 //      .when('/group',{
 //      	templateUrl: "group.html",
 //      	controller: 'groupController'
 //    	})
 //    	.when('/corporate',{
 //      	templateUrl: "corporate.html",
 //      	controller: 'corporateController'
 //    	})
 //      .when('/news',{
 //      	templateUrl: "news.html",
 //      	controller: 'newsController'
 //    	})
 //      .when('/recruit',{
 //      	templateUrl: "recruit.html",
 //      	controller: 'recruitController'
 //    	})
 //    	.otherwise({
 //        templateUrl: "home.html",
 //      	controller: 'recruitController'
 //    	});
 //    }]);
 //    routingDemoApp.run(['$rootScope', '$location', function($rootScope, $location) {
 //        $rootScope.$on('$routeChangeSuccess', function(newV) {
 //            $rootScope.path = $location.path()
 //        });
 //    }]);
 //    routingDemoApp.controller('main', ['$scope', function($scope){
 //    }]);