// functions/_middleware.js
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  if (url.pathname === '/set-webhook') {
    const webhookUrl = `https://${url.hostname}/webhook`;
    return Response.redirect(
      `https://api.telegram.org/bot${env.BOT_TOKEN}/setWebhook?url=${webhookUrl}`
    );
  }
  
  return await context.next();
    }
