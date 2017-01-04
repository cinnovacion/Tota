define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var datastore = require("sugar-web/datastore");

    require(['domReady!'], function (doc) {
        activity.setup();

    });

});
