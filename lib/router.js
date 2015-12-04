Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	// Home route
	this.route('home', {
		path: '/',
		template: 'home'
	});
});