const randomApi = "https://jsonplaceholder.typicode.com";

export const search = async (type?: ApiType) => {
  let prefix = "posts";

  if (type && type == ApiType.TODOS) {
    prefix = "todos";
  }
  return await fetch(`${randomApi}/${prefix}`, {
    headers: { "Access-Control-Allow-Origin": "*" },
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Could not fetch ${prefix}`);
      }
      return res.json();
    })
    .catch((e) => {
      throw new Error(`Failed to connect to api`);
    });
};

export enum ApiType {
  POSTS,
  TODOS,
}
