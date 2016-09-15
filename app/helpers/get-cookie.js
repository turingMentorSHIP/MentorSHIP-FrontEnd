import Ember from 'ember';

export function getCookie(params) {
  var value = cookieValueFromKey(params);
  var result = cleanString(value);
  return result;
}

function cookieValueFromKey (cname) {
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

function cleanString(stringValue){
  return stringValue.replace('27%', '@');
};

export default Ember.Helper.helper(getCookie);
