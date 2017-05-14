
//所有tooltip初始化
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//左侧笔记高度设置
$("#note-wrap").height($(window).height()-$("#note-wrap").prev().height()-20);

$("#detail-wrap").height($(window).height()-$("#detail-wrap").prev().prev().height()-20);

$("#detail-wrap textarea").height($("#detail-wrap").height()-$("#detail-wrap .form-group").eq(0).outerHeight());