var buttons = [
  [{ text: "👨‍💻 Developer", url: "tg://openmessage?user_id=6449612223" }],
  [{ text: "🔊 Updates", url: "https://t.me/addlist/P9nJIi98NfY3OGNk" }],
  [{ text: "✅", callback_data: "/join" }]
];

var messageText = "*⭐️ To Usᴇ Tʜɪs Bᴏᴛ Yᴏᴜ Nᴇᴇᴅ Tᴏ Jᴏɪɴ Aʟʟ Cʜᴀɴɴᴇʟs -*";

var photoUrl = "https://t.me/kajal_developer/9";

Api.sendPhoto({
  photo: photoUrl,
  caption: messageText,
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: buttons
  }
});
