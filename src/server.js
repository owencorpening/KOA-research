var koa = require('koa');
var app = module.exports = koa();
var router = require('koa-router')();
var Ajv = require('ajv');
var logger = require('koa-logger');
var parse = require('co-body');

var ajv = Ajv({allErrors: true});

const nameSchema = require('./nameSchema');

router.get('/', function *(next) {
	console.log("In get for /");
	this.body = 'This is the json schema with koa test';
});

router.post('/myname', function *(next) {
	console.log("In post for /myname");
	var userData = yield parse(this);

	console.log("post = " + userData);

	var valid = ajv.validate(nameSchema, this);
	if (valid) {
		console.log('User data is valid');
	}
	else {
		console.log('User data is INVALID!');
		console.log(ajv.errors);
	}

	this.body = 'hi henry';
});

app
	.use(logger())
	.use(router.routes())
	.use(router.allowedMethods());

if (!module.parent) app.listen(3000);
