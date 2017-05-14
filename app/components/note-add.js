angular.module('AngularEvernote').component('noteAdd',{
    templateUrl:'templates/note-add.html',
    controller:function ($scope,noteService,noticeService,notebookService,$location,$timeout,$window) {
        $scope.refreshNoteList = function () {
            $scope.noteListArray = noteService.getNoteList();
        }

        $scope.refreshNoteList();
        $scope.notebookListArray = notebookService.getNotebookList();

        $scope.addNewNote = function () {
            noteService.doInsertNote($scope.noteTitle,$scope.noteContent,$scope.newNoteBeBook.id);
            angular.element(document).find("#newNoteModal").modal('hide');
            noticeService.showSuccess("笔记创建成功");
            $scope.refreshNoteList();

            $timeout(function () {
                $location.url("/");
            },2000);
        }
        
        $scope.goBack = function () {
            $window.history.back();
        }
    }
})