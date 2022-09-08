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
 * @property {string} [tags] Todo의 태그
 */

/**
 * @type {Todo}
 */
const Todo = {
};

/**
 * create Todo List
 * @param {Object} Todo - Todo 객체
 * @param {string} Todo.contents - Todo의 내용
 * @param {string} Todo.category - Todo 카테고리
 * @param {string} [Todo.tags] - Todo 태그
 */
const createTodo = ({contents, category, tags = []}) => {}

/**
 * read Todo By Id or if id is null return all Todo's
 * @param {?number} id 
 * @returns {(Todo| Todo[])}
 */
const readTodo = (id) => {};

// UPDATE
// ID를 제외한 모든 속성을 수정할 수 있다.
// 특정 할 일의 특정 태그를 수정할 수 있다.

/**
 * update Todo By ID
 * @param {?number} id
 * 
 */
const updateTodo = (id, {contents, category, tags}) => {}


// ID를 기반으로 특정 할 일을 삭제할 수 있다.
// 모든 할 일을 제거할 수 있다.
// 특정 할 일의 특정 태그를 삭제할 수 있다.
// 특정 할 일의 모든 태그를 제거할 수 있다.

/**
 * remove Todo List
 * @param {number} Todo.id
 */
const removeTodo = (id) => {}

/**
 * remove All Todo List
 */
const removeAllTodo = () => {}

