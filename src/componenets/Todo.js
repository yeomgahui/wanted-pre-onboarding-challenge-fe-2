class Todo {
	id;
	context= "";
	isDone= false;
	category= '';
	tags = [];
	constructor(todo) {}

	static create(id, category, tags=[],context='', ){}
	static read(id){}
}

export default Todo;