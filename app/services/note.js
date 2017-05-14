angular.module('AngularEvernote').factory('noteService',function (commonService,notebookService) {
    return {

        /**
         * 获取笔记列表
         *
         * @returns {Array}
         */
        getNoteList:function (notebookId) {
            var noteListString = window.localStorage.getItem(this.getNoteListKey());
            var noteListArray =  noteListString ? JSON.parse(noteListString) : [];
            if(notebookId){
                var returnNoteList = [];
                for (var i in noteListArray)
                {
                    if(noteListArray[i]['noteBookId']==notebookId) returnNoteList.push(noteListArray[i]);
                }
                return returnNoteList;
            }
            return noteListArray;
        },
        /**
         * 新增笔记
         *
         * @param noteTitle    笔记标题
         * @param noteContent  笔记内容
         * @param notebookId   所有笔记本
         */
        doInsertNote:function (noteTitle,noteContent,notebookId) {
            var noteObj = {
                id:commonService.getUniqId(),
                title:noteTitle,
                content:noteContent,
                createTime:new Date(),
                noteBookId:notebookId
            }
            var noteListArray = this.getNoteList();
            noteListArray.push(noteObj);
            window.localStorage.setItem(this.getNoteListKey(),JSON.stringify(noteListArray));
            this.countNotebookNotes();
        },
        /**
         * 修改笔记
         *
         * @param noteId       笔记id
         * @param noteTitle    笔记标题
         * @param noteContent  笔记内容
         * @param notebookId   笔记所属笔记本id
         */
        updateNote:function (noteId,noteTitle,noteContent,notebookId) {
            var noteListArray = this.getNoteList()
            for(var i in noteListArray)
            {
                if(noteListArray[i]['id']==noteId){
                    noteListArray[i]['title'] = noteTitle;
                    noteListArray[i]['content'] = noteContent;
                    noteListArray[i]['noteBookId'] = notebookId;
                }
            }
            window.localStorage.setItem(this.getNoteListKey(),JSON.stringify(noteListArray));
            this.countNotebookNotes();
        },
        doDeleteNote:function (noteId) {
            var noteListArray = this.getNoteList()
            for(var i in noteListArray)
            {
                if(noteListArray[i]['id']==noteId){
                    noteListArray.splice(i,1);
                }
            }
            window.localStorage.setItem(this.getNoteListKey(),JSON.stringify(noteListArray));
            this.countNotebookNotes();
        },
        getNoteListKey:function () {
            return 'noteList';
        },
        countNotebookNotes: function () {
            var notes = this.getNoteList(),notebooks = notebookService.getNotebookList(),noteBookMap = {};
            for (var i in notes)
            {
                if(!noteBookMap[notes[i]['noteBookId']]){
                    noteBookMap[notes[i]['noteBookId']] = 1;
                }else{
                    noteBookMap[notes[i]['noteBookId']] +=1;
                }
            }

            for (i in notebooks )
            {
                if(noteBookMap[notebooks[i]['id']]){
                    notebooks[i]['noteCount'] = noteBookMap[notebooks[i]['id']];
                }
            }
            window.localStorage.setItem(notebookService.getNotebookListKey(),JSON.stringify(notebooks))
        }
    };

})