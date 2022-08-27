export type Item = {
  id: string | number;
  title: string;
};
export type Post = Item & {
  userId: string;
  body?: string;
};
export type Bookmark = Post & {
  postId?: string;
};
export type Todo = Post & {
  completed: boolean;
};
export type MyTodo = Item & {
  completed: boolean;
  externalId?: string;
};
