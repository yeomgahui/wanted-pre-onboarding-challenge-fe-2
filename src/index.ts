interface Todo {
	readonly id: string;
	contents: string;
	category: string;
	isDone: boolean;
	tags: string[];
}

interface CreateTodo extends Todo {
	isDone: false;
}

class Todos {
	todoList: Todo[];
	constructor() {
		this.todoList = [];
	}

	addTodo(todo:Omit<CreateTodo, 'id' | 'isDone'>){
		const todoItem: CreateTodo =  {
			id: String(Date.now()),
			contents: todo.contents,
			isDone: false,
			category: todo.category,
			tags: todo.tags
		}
		this.todoList.push(todoItem);
		return todoItem;
	}

	readTodoById(selectedId: Todo['id']){
		return this.todoList.filter( todo =>  todo.id === selectedId);
	}
	readAllTodo(){
		return this.todoList;
	}

	updateTodoById(selectedId: Todo['id'], fieldsUpdate: Partial<Pick<Todo, 'contents' | 'category'>>){
		let targetIndex = this.todoList.findIndex(todo=> todo.id === selectedId);
		if(targetIndex < 0){
			throw new Error('없는 Item입니다.');
		}
		return this.todoList[targetIndex] = {...this.todoList[targetIndex], ...fieldsUpdate};
	}
	toggleIsDone(selectedId: Todo['id']){
		let targetIndex = this.todoList.findIndex(todo => todo.id === selectedId);
		if(targetIndex < 0){
			throw new Error('해당 ID는 ')
		}
	}

}

const todoInstance = new Todos();

const newTodo = {
	contents: '타입스크립트',
	category: 'work',
	tags: ['monday', 'tuesday']
}
const todoItem = todoInstance.addTodo(newTodo);
console.log(todoInstance.readTodoById(todoItem.id));

//-------------------------------------------------------

todoInstance.updateTodoById(todoItem.id, { isDone: 'coding'});
console.log(todoInstance.readTodoById(todoItem.id));

