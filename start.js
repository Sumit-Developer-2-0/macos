// start.js
export async function onRequest(context) {
  const { env } = context;
  const buttons = [
    [{ text: "👨‍💻 Developer", url: `tg://openmessage?user_id=${env.ADMIN_ID}` }],
    [{ text: "🔊 Updates", url: "https://t.me/addlist/P9nJIi98NfY3OGNk" }],
    [{ text: "✅ Verify Join", callback_data: "/join" }]
  ];

  return new Response(JSON.stringify({
    method: "sendPhoto",
    photo: "https://t.me/kajal_developer/9",
    caption: "*⭐️ To Use This Bot You Need To Join All Channels -*",
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: buttons }
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
