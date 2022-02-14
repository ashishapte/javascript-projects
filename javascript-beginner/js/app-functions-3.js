// Functions

// Functions inside objects
// Property  methods
// they are called methods when defined inside objects

const todo = {
  add: function(){
    console.log('Add todo');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

// Adding function to object outside of original definition later
todo.delete = function(){
  console.log('Todo delete');
}



todo.add();
todo.edit(22);
todo.delete();
