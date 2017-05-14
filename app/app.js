var angularEverNote = angular.module('AngularEvernote',['ngRoute']);
angularEverNote.filter('timeSpacing',function () {
    return function (inputTime) {
        var date1=new Date(inputTime);  //开始时间
        var date2=new Date();    //结束时间
        var date3=date2.getTime()-date1.getTime()  //时间差的毫秒数

        //计算出相差天数
        var days=Math.floor(date3/(24*3600*1000))
        if(days) return days+'天前';
        //计算出小时数
        var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
        var hours=Math.floor(leave1/(3600*1000))
        if(hours) return hours+'小时前';
        //计算相差分钟数
        var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
        var minutes=Math.floor(leave2/(60*1000))
        if(minutes) return minutes+'分钟前';
        //计算相差秒数
        var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
        var seconds=Math.round(leave3/1000)
        return "刚刚";
    }
});

angularEverNote.filter('substring',function () {
    return function (inptuString,subLength) {
        inptuString = inptuString || '';
        subLength = subLength || 20;
        return inptuString.substr(0,subLength);
    }
});