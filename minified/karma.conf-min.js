module.exports=function(s){s.set({basePath:"",frameworks:["mocha","chai"],files:["assets/js/main.js","assets/js/medida.js","assets/js/temperatura.js","conversor_test.js","vendor/chai.js","vendor/mocha.css","vendor/mocha.js","vendor/sinon-1.7.1.js","xregexp.js"],client:{mocha:{ui:"bdd"}},exclude:["gulpfile.js"],preprocessors:{"test.html":["html2js"]},plugins:["karma-mocha","karma-chai","karma-chrome-launcher","karma-firefox-launcher","karma-html2js-preprocessor","karma-phantomjs-launcher","karma-safari-launcher"],reporters:["progress"],port:9876,colors:!0,logLevel:s.LOG_INFO,autoWatch:!0,browsers:["Firefox","PhantomJS","Chrome","Safari"],captureTimeout:6e4,singleRun:!1})};