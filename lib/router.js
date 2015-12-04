Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	// Home route
	this.route('home', {
		path: '/',
		template: 'home',
		data: function(){
			templateData = {
				products: Products.find({is_featured: "1"})
			};
			
			return templateData;
		}	});
	
	// Products route
	this.route('products', {
		path: '/products',
		template: 'products',
		data: function(){
			templateData = {
				products: Products.find()
			};
			
			return templateData;
		}
	});
	
	// Add a Product page
		this.route('add_product', {
		path: '/add_product',
		template: 'add_product',
		data: function(){
			templateData = {
				categories: Categories.find()
			};
			
			return templateData;
		}
	});
	
	// Category Products
	this.route('category_products', {
		path: '/categories/:slug',
		template: 'category_products',
		data: function(){
			templateData = {
				category_products: Products.find({
					category: this.params.slug
				})
			};
			
			return templateData;
		}
	});
	
	// New Review page
	this.route('new_review', {
		path: '/new-review/:_id',
		template: 'new_review',
		data: function(){
			return Products.findOne(this.params._id)
		}
	});
	
	// Product page
	this.route('product', {
		path: '/products/:_id',
		template: 'product',
		data: function(){
			return Products.findOne(this.params._id)
		}
	});
});


