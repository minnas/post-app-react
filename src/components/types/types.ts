export interface Item {
  id: string | number,
  title: string
};
export interface Post extends Item {
  userId: string,
  body?: string
};
export interface Todo extends Post {
  completed: boolean;
};
export interface MyTodo extends Item {
  completed: boolean;
};

