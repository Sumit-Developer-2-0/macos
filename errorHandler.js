// errorHandler.js
export async function onRequest(context) {
  const { request } = context;
  try {
    // Your main bot logic here
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
