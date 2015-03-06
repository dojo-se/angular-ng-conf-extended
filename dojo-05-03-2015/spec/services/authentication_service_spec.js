describe("service: AuthenticationService (javascript)", function(){
	beforeEach(function(){
		module("app");
	});

	beforeEach(inject(function($http, AuthenticationService){
		this.$httpPost = spyOn($http, 'post');
		this.$httpGet = spyOn($http, 'get');
		this.AuthenticationService = AuthenticationService;
	}));

	describe("#login", function(){
		beforeEach(function(){
			this.credentials = {name: 'Dave'};
		});

		it('should expect call /login with credentials', function(){
			this.AuthenticationService.login(this.credentials);
			expect(this.$httpPost).toHaveBeenCalledWith('/login', this.credentials);
		});

		it('should expect call /logout', function(){
			this.AuthenticationService.logout();
			expect(this.$httpPost).toHaveBeenCalledWith('/logout');
		});
	});

	describe("#logout", function(){

	});
});