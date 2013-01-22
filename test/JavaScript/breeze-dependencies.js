
describe('NetflixClient', function() {
    it('should be able to use BreezeJS', function() {
	    var manager = new breeze.EntityManager({
		    serviceName: "http://odata.netflix.com/v2/Catalog/"
		}); 
	    var query = breeze.EntityQuery.from("Products");
	    return manager.executeQuery(query);
    })
});