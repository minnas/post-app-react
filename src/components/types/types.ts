export interface Item {
  id: string,
  title: string
};
export interface Post extends Item {
  userId: string,
  body?: string
};
export interface Todo extends Post {
  completed: boolean
};


