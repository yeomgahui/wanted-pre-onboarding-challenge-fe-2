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
 * read Todo By Id OR if id is null, return all Todo's
 * @param {?number} id 
 * @returns {(Todo| Todo[])}
 */
const readTodo = (id) => {};

/**
 * update Todo By ID
 * @param {number} id
 * @param {Object} Todo
 * @param {string} Todo.contents
 * @param {string} Todo.category
 * @param {string} [Todo.tags]
 */
const updateTodo = (id, {contents, category, tags}) => {}


/**
 * remove Todo List By Id if id is null, remove all
 * @param {?number} Todo.id
 */
const removeTodo = (id) => {}

/**
 * remove TodoTag By id and tagIndex, if tagIndex is null, remove all tag
 * @param {number} id
 * @param {?number} tagIndex
 */
const removeTodoTag = (id, tagIndex) => {}





