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
		const targetIndex = this.todoList.findIndex(todo=> todo.id === selectedId);
		if(targetIndex < 0){
			throw new Error('Cannot find Todo Item');
		}
		return this.todoList[targetIndex] = {...this.todoList[targetIndex], ...fieldsUpdate};
	}

	toggleIsDone(selectedId: Todo['id']){
		const targetItem = this.todoList.find(todo => todo.id === selectedId);
		if(!targetItem){
			throw Error('Cannot find Todo Item');
		}
		targetItem.isDone = !targetItem.isDone;
		return targetItem;
	}

	updateTodoTagById(selectedId: Todo['id'], oldTag: string, newTag:string){
		const targetItem = this.todoList.find(todo => todo.id === selectedId);
		if(!targetItem){
			throw Error('Cannot find Todo Item');
		}
		const targetTagIndex = targetItem.tags.findIndex(tag => tag === oldTag);
		if(targetTagIndex < 0){
			throw Error('Cannot find tag');
		}
		targetItem.tags[targetTagIndex] = newTag;
		return targetItem;
	}
	deleteTodoById(selectedId: Todo['id']){
		const targetIndex = this.todoList.findIndex(todo=> todo.id === selectedId);
		if(targetIndex < 0){
			throw new Error('Cannot find Todo Item');
		}
		this.todoList.splice(targetIndex,1);
		return this.todoList;
	}

	deleteAllTodo(){
		this.todoList = [];
		return this.todoList;
	}

	deleteTodoTag(selectedId: Todo['id'], tagName: string){
		const targetItem = this.todoList.find(todo=> todo.id === selectedId);
		if(!targetItem){
			throw new Error('Cannot find Todo Item');
		}
		const targetTagIndex = targetItem.tags.indexOf(tagName);
		if(targetTagIndex < 0){
			throw new Error('Cannot find Todo Tag');
		}
		targetItem.tags.splice(targetTagIndex, 1);
		return targetItem;
	}

	deleteAllTodoTag(selectedId: Todo['id']){
		const targetItem = this.todoList.find(todo=> todo.id === selectedId);
		if(!targetItem){
			throw new Error('Cannot find Todo Item');
		}
		targetItem.tags = [];
		return targetItem;
	}

}

const todoInstance = new Todos();

const newTodo = {
	contents: '타입스크립트',
	category: 'work',
	tags: ['monday', 'tuesday']
}
const newTodo2 = {
	contents: '자바',
	category: 'work',
	tags: ['monday', 'wendesday']
}
const todoItem = todoInstance.addTodo(newTodo);
const todoItem2 = todoInstance.addTodo(newTodo2);
console.log(todoInstance.readAllTodo());

//-------------------------------------------------------

// todoInstance.updateTodoById(todoItem.id, { contents: 'coding'});
// todoInstance.toggleIsDone('todoItem.id');
todoInstance.updateTodoTagById(todoItem.id,'monday', 'sunday')
console.log(todoInstance.readAllTodo());

//----------------------------------------------------
// todoInstance.deleteTodoById(todoItem.id);
todoInstance.deleteTodoTag(todoItem.id, "sunday");
console.log(todoInstance.readAllTodo());

