angular.module('AngularEvernote').factory('notebookService',function (commonService) {

    return {
        getNotebookList:function () {
            var notebookListString = window.localStorage.getItem(this.getNotebookListKey())
            return  notebookListString ? JSON.parse(notebookListString) : [];
        },
        doAddNotebook:function (notebookTitle) {
            var noteObj = {
                id:commonService.getUniqId(),
                title:notebookTitle,
                noteCount:0
            }
            var notebookListArray = this.getNotebookList();
            notebookListArray.push(noteObj);
            window.localStorage.setItem(this.getNotebookListKey(),JSON.stringify(notebookListArray));
        },
        doDeleteNotebook:function (notebookId) {
            var notebookListArray = this.getNotebookList()
            for(var i in notebookListArray)
            {
                if(notebookListArray[i]['id']==notebookId){
                    notebookListArray.splice(i,1);
                }
            }
            window.localStorage.setItem(this.getNotebookListKey(),JSON.stringify(notebookListArray))
            // $rootScope.countNotebookNotes();
        },
        getNotebookListKey:function () {
            return 'notebookList';
        }
    }
});