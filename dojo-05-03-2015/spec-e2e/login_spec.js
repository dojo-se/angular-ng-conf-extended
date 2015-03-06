describe('my angular app', function(){
	describe('visiting the login page', function(){
		beforeEach(function(){
			browser.get('/');
		});

		describe('when a user logs in', function(){
			beforeEach(function(){
				element(by.model('credentials.username')).sendKeys('Ralph');
				element(by.model('credentials.password')).sendKeys('Wiggum');
				element(by.id('log-in')).click()
				expect(element(By.binding('message')).getText()).toEqual('Mouse Over these images to see a directive at work');
			});
		})
	});
});