const randomApi = "https://jsonplaceholder.typicode.com";

export const search = async (type?:ApiType) => {
  let prefix = "posts";

  if(type && type == ApiType.TODOS) {
    prefix = "todos";
  }
  const response = await fetch(`${randomApi}/${prefix}`, {headers: {"Access-Control-Allow-Origin": "*"}, method: "GET"});
  return response.json();
};

export enum ApiType {
  POSTS,
  TODOS
};