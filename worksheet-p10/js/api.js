const URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchNews() {
  const response = await fetch(URL);

  console.log("status", response.status, "ok", response.ok);

  if (!response.ok) {
    throw new Error("status " + response.status);
  }

  return response.json();
}
