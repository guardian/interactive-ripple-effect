window.$ = require('./vendor/jquery.js');

var chat = require('./modules/chat.js');
var share = require('./modules/share.js');

chat.init();
share.init();