module.exports = function(grunt){
	path = require("path");
	spawn = require("child_process").spawn

	grunt.registerTask("spec-e2e", "run specs in ci mode", function(target){
		//require("coffe-script");
		process.argv = ["doesnt", "matter", process.cwd() + "/config/spec-e2e.js"];

		done = this.async();
		require(process.cwd() + "/node_modules/protractor/lib/cli");
	});
}