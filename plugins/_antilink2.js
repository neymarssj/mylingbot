function antilink2(chat, participants) {
  for (var participant of participants) {
    if (participant.admin === true) {
      return;
    }
    if (data.blacklist.includes(participant.id)) {
      return;
    }
    if (participant.chat.message.includes("http")) {
      conn.kick(chat, participant.id);
      conn.sendMessage(chat, "**Enlace detectado!**", { delete_message: false });
      return 10;
    }
  }
  return;
}

var data = {};
