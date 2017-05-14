angular.module('AngularEvernote').component('noteList',{
    templateUrl:'templates/note-list.html',
    controller:function (noteService,$scope,notebookService,noticeService,$routeParams) {

        if($routeParams && $routeParams['notebookId']){
            $scope.filterNotebook = {id:$routeParams['notebookId']};
        }

        $scope.pageTitle = "AngularEvernote";

        $scope.refreshNoteList = function (notebookId) {
            $scope.noteListArray = noteService.getNoteList(notebookId);
        }
        $scope.refreshNotebookList = function () {
           $scope.notebookListArray = notebookService.getNotebookList();
        }
        $scope.refreshNoteList($routeParams['notebookId']);
        $scope.refreshNotebookList();

        $scope.doSubmit = function () {
            if(!$scope.currentNoteId) return;
            noteService.updateNote($scope.currentNoteId,$scope.noteTitle,$scope.noteContent,$scope.currentSelectNoteBook.id);
            $scope.refreshNoteList();
            $scope.refreshNotebookList();
        }

        $scope.editNote = function (note) {
            $scope.currentNoteId = note.id;
            $scope.noteTitle = note.title;
            $scope.noteContent = note.content;
            $scope.currentSelectNoteBook = {"id":note.noteBookId};
        }

        $scope.deleteNote = function () {
            if(window.confirm("确认删除这条笔记吗？")){
                noteService.doDeleteNote($scope.currentNoteId);
                noticeService.showSuccess("删除成功！");
                $scope.refreshNoteList();
                $scope.refreshNotebookList();
            }
        }
        
        $scope.filterNotebookFunc = function () {
            $scope.refreshNoteList($scope.filterNotebook.id);
        }
    }
});