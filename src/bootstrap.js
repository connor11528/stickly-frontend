
window._ = require('lodash');
window.moment = require('moment');
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap-sass');
} catch (e) {}

// use appropriate endpoint
if (process.env.NODE_ENV === 'production') {
    window.endpoint = `http://YOUR_KEROKU_APP_NAME.herokuapp.com`;
} else {
    window.endpoint = 'http://localhost:3000';
}
