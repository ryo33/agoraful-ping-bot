var koa = require('koa');
var koaBody = require('koa-body');

var app = koa();

app.use(koaBody());
app.use(function *(){
  var isPOST = this.request.method == 'POST';
  var isJSON = this.request.type == 'application/json';

  var body = this.request.body;

  var event = body.event;
  var payload = body.payload;

  var post = payload.post;
  // var thread = payload.thread;
  // var user = payload.user;

  if (isPOST && isJSON && event == 'post' && post.text == 'ping') {
    console.log('pong');
    this.body = {
      actions: [{
        action: 'post',
        payload: {
          title: '',
          text: 'pong'
        }
      }]
    };
  }
});

app.listen(process.env.PORT || 8080);
