angular.module('AngularEvernote').factory('commonService',function () {
    return {
        getUniqId : function () {
            return new Date().getTime()+""+parseInt(Math.random()*10);
        }
    }
})