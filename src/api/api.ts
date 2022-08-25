const randomApi = "https://jsonplaceholder.typicode.com";

export const search = async (type?: ApiType) => {
  let prefix = "posts";

  if (type && type == ApiType.TODOS) {
    prefix = "todos";
  }
  try {
    const response = await fetch(`${randomApi}/${prefix}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
      method: "GET",
    });
    return response.json();
  } catch (e) {
    console.log("Failed to fetch data");
    return;
  }
};

export enum ApiType {
  POSTS,
  TODOS,
}
