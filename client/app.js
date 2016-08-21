var app = angular.module('smarticles', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    //States
    .state('home', {
	url:'/home',
	templateUrl:'/client/templates/home-partial.html'
    })
    .state('about', {
	url:'/about',
	templateUrl:'/client/templates/about-partial.html'
    })
    .state('team',{
	url:'/team',
	templateUrl:'/client/templates/team-partial.html'
    })
    .state('robots',{
	url:'/robots',
	templateUrl:'/client/templates/robots-partial.html'
    })
    .state('sponsors', {
	url:'/sponsors',
	templateUrl:'/client/templates/sponsors-partial.html'
    });
});
