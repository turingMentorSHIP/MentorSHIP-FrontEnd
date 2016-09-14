'use strict';

var utils = require('./utils');

/**
 * Expose `helpers`
 */

var cookies = module.exports;

cookies.setCookie = function(cname, cvalue, exdays) {
    document.cookie = cname + "=" + cvalue
};

cookies.getCookie = function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

cookies.checkCookie = function() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
};
