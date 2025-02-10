// join.js
export async function onRequest(context) {
  const { request, env } = context;
  const data = await request.json();
  
  if (data.callback_query) {
    const { message, from } = data.callback_query;
    const chatId = message.chat.id;
    const messageId = message.message_id;

    // Delete verification message
    await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/deleteMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        message_id: messageId
      })
    });

    // Check channel membership
    const channels = env.CHANNELS.split(',');
    for (const channel of channels) {
      const member = await checkMembership(env.BOT_TOKEN, from.id, channel);
      if (!member) {
        return new Response(JSON.stringify({
          method: "sendMessage",
          chat_id: from.id,
          text: `❌ You must join ${channel} to use this bot!`
        }), { headers: { 'Content-Type': 'application/json' } });
      }
    }
    
    // Show main menu if all checks pass
    return new Response(JSON.stringify({
      method: "sendMessage",
      chat_id: from.id,
      text: "🤗 Welcome to Lx Bot 🌺",
      reply_markup: {
        keyboard: [
          ["🌺 CP, 🇮🇳 Desi"],
          ["🇬🇧 Forener,🐕‍🦺 Animal"],
          ["💕 Webseries", "💑 Gay Cp"],
          ["💸 𝘽𝙐𝙔 𝙑𝙄𝙋 💸"]
        ],
        resize_keyboard: true
      }
    }), { headers: { 'Content-Type': 'application/json' } });
  }
  return new Response('OK');
}

async function checkMembership(botToken, userId, chatId) {
  const response = await fetch(`https://api.telegram.org/bot${botToken}/getChatMember`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      user_id: userId
    })
  });
  const data = await response.json();
  return data.result?.status !== 'left';
            }
