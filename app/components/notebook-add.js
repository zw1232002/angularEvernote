angular.module('AngularEvernote').component('notebookAdd',{
    templateUrl:'templates/notebook-add.html',
    controller:function ($scope,notebookService,noticeService,$timeout,$location,$window) {
        $scope.addNotebook = function () {
            notebookService.doAddNotebook($scope.newNoteBookTitle);
            noticeService.showSuccess("新增成功！");

            $timeout(function () {
                $location.url("/notebook/list");
            },2000);
        },
        $scope.goBack = function () {
            $window.history.back();
        }
    }
});