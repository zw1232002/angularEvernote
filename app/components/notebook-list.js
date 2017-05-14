angular.module('AngularEvernote').component('notebookList',{
    templateUrl:"templates/notebook-list.html",
    controller:function ($scope,notebookService,noticeService,$location) {
        $scope.refreshNotebookList = function () {
            $scope.notebookListArray = notebookService.getNotebookList()
        }


        $scope.refreshNotebookList();

        $scope.selectNoteBook = function (noteBook) {
            $location.url("/note/"+noteBook.id+"/list");
        }

        $scope.deleteNoteBook = function (notebookId) {
            if(window.confirm("确认删除这个笔记本吗？")){
                notebookService.doDeleteNotebook(notebookId);
                noticeService.showSuccess("删除成功！");
                $scope.refreshNotebookList();
            }
        }
    }
});