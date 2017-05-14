angular.module('AngularEvernote').factory('noticeService',function () {
    return {
        showSuccess:function (msg) {
            Lobibox.notify('success', {
                sound: false,
                icon: false,
                size: 'mini',
                position: 'top right',
                delay: 2000,
                msg: msg
            });
        },
        showWarning:function (msg) {
            Lobibox.notify('warning', {
                sound: false,
                icon: false,
                size: 'mini',
                position: 'top right',
                delay: 2000,
                msg: msg
            });
        },
        showError:function (msg) {
            Lobibox.notify('error', {
                sound: false,
                icon: false,
                size: 'mini',
                position: 'top right',
                delay: 2000,
                msg: msg
            });
        },
    }
})