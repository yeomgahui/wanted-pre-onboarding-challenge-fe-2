/**
 * @file Todo를 구현하기 위한 문서입니다. <pre onboarding challenge fe-2[사전과제]>
 * @author Gahui yeom
 * @see {@link }
 */

/**
 * @typedef {Object} ToDo
 * @property {number} id - ToDo id
 * @property {string} content - ToDo 상세 내용
 * @property {boolean} isDone - ToDo 종료 여부
 * @property {string} categories - ToDo 분류
 * @property {string} [tags] - 추가하고 싶은 태그
 */

/**
 * @type {ToDo}
 */
const ToDo = {
	id,
	content,
	isDone,
	categories,
	tags
};

/**
 * 
 * @param {ToDo} ToDo - ToDo Object
 * @param {string} ToDo.content - ToDo 상세내용 
 * @param {string} ToDo.categories - ToDo 분류
 * @param {string} [ToDo.tags] - 추가하고 싶은 태그
 */
function createToDo({content, categories, tags}){}

/**
 * @param {number} [id] - 특정 ToDo 조회용
 * @returns {Object} ToDo 가져오기
 */
function readToDo(id){}


/**
 * @param {ToDo} ToDo - ToDo Object
 * @param {string} ToDo.content - ToDo 상세 내용
 * @param {string} ToDo.categories - ToDo 분류
 * @param {boolean} ToDo.isDone - ToDo 완료 여부
 * @param {string} [ToDo.tags] - 추가하고 싶은 태그
 */
function updateToDo(todo){}


/**
 * @param {null} - 모든 목록 삭제
 * @param {ToDo} [ToDo] - ToDo Object
 * @param {number} [ToDo.id] - 특정 ToDo 제거용
 * @param {string} [ToDo.tags.tagName] - 특정 ToDo의 특정 태그 제거용
 * @param {string} [ToDo.tags] - 특정 ToDo의 모든 태그 제거
 */
function deleteToDo({id, tags}){}