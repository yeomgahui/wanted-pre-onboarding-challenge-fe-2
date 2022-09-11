/**
 * @file Todo 구현 문서
 * @author yeomgahui
 * @see {@link https://yeomgahui.github.io/wanted-pre-onboarding-challenge-fe-2/}
 */

/**
 * Todo type definition
 * @typedef Todo Todo 객체
 * @type {object}
 * @property {number} id Todo의 고유 식별 값
 * @property {string} contents Todo의 내용
 * @property {boolean} isDone Todo의 완료 여부
 * @property {string} category Todo의 카테고리
 * @property {string[]} tags Todo의 태그
 */

/**
 * Class representing Todo
 */
class Todos {

    constructor() {
        this.TodoList = [];
    }

    /**
     * add Todo
     * @param {Object} Todo
     */
    addTodo(todo) {
        const {contents} = todo;
        if(!contents){
            throw Error('내용을 입력해주세요.');
        }
        this.TodoList.push(todo);
    }

    /**
     * read Todo By Id OR if id is null
     * @param {?number} id 
     * @returns {Todo}
     */
    readTodo(id) {
        return this.TodoList.find(todo => id === todo.id) ?? this.TodoList;
    }

    /**
     * read all Todo
     * @return {Todo[]}
     */
    readAllTodo(){
        
    }




// ID를 제외한 모든 속성을 수정할 수 있다.
// 특정 할 일의 특정 태그를 수정할 수 있다.

    /**
     * update Todo By ID
     * @param {!number} id
     * @param {Object} Todo
     * @param {string} Todo.contents
     * @param {string} Todo.category
     */
    updateTodo(id, {contents, category}) {
        
    }

    /**
     * 
     * @param {number} id - Todo Id 
     * @param {string} oldTag
     * @param {string} newTag
     */
    updateTagTodo(id, oldTag, newTag){}

    /**
     * remove Todo List By Id if id is null, remove all
     * @param {?number} Todo.id
     */
    removeTodo(id){
        if(!id){
            
        }
    }

    /**
     * remove TodoTag By id and tagIndex, if tagIndex is null, remove all tag
     * @param {!number} id
     * @param {string} tag
     */
    removeTodoTag(id, tag){}


}

const todo = new Todos();
const todoItem1 = {
    id: 1,
    isDone: false,
    contents: 'test',
    category: 'buisiness',
    tags: ['monday','sunday']
}

const todoItem2 = {
    id: 2,
    contents: 'ewr',
    isDone: false,
    category: 'buisiness',
    tags: ['monday','sunday']
}

todo.addTodo(todoItem1);
todo.addTodo(todoItem2);

console.log('TodoList : ',todo.readTodo(2));