
NetflixClient = function() {
	this.dbset_genres = [];
	this.get_movies = function() {
	    var manager = new breeze.EntityManager('http://odata.netflix.com/v2/Catalog'); 
		var query = breeze.EntityQuery
			.from("Catalog")
			.where("Type","eq","Movie");
		return manager.executeQuery(query);
	};

};

describe('NetflixClient', function() {
	describe('get_movies',function() {
		it('should get a list of movies', function() {
			var target = new NetflixClient();
			var promise = target.get_movies();

			assert.isArray(target.dbset_genres,"dbset_genres missing!")
		})
	})
});