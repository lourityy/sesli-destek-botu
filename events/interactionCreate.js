const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js");
const db = require("croxydb");
const { readdirSync } = require("fs");
const { joinVoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberBehavior } = require('@discordjs/voice');
const { join } = require('path');
const config = require("../config.json");
const { findOnlineMembers } = require('../lib');
// lourity
module.exports = async (client, interaction) => {

  if (interaction.isChatInputCommand()) {

    if (!interaction.guildId) return;

    readdirSync('./commands').forEach(f => {

      const cmd = require(`../commands/${f}`);

      if (interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {

        return cmd.run(client, interaction, db);
      }
    });
  }

  if (interaction.customId === "number_one" + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })

    if (interaction.message.content.toString().length > 3) {
      const resource = createAudioResource(join(__dirname, '../voices/max_number_voice.mp3'));
      player.play(resource);
      connection.subscribe(player);
      interaction.update({ content: `${interaction.message.content}` })
      return;
    }

    const resource = createAudioResource(join(__dirname, '../voices/one_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);

    interaction.update({ content: `${interaction.message.content}1` })
  }

  if (interaction.customId === "number_two" + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })

    if (interaction.message.content.toString().length > 3) {
      const connection = joinVoiceChannel({
        channelId: config.VOİCE,
        guildId: config.GUİLD,
        adapterCreator: config.GUİLD.voiceAdapterCreator
      });
      const player = createAudioPlayer({
        behaviors: {
          noSubscriber: NoSubscriberBehavior.Pause,
        }
      })

      const resource = createAudioResource(join(__dirname, '../voices/max_number_voice.mp3'));
      player.play(resource);
      connection.subscribe(player);
      interaction.update({ content: `${interaction.message.content}` })
      return;
    }
    const resource = createAudioResource(join(__dirname, '../voices/two_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);

    interaction.update({ content: `${interaction.message.content}2` })
  }

  if (interaction.customId === "number_three" + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })

    if (interaction.message.content.toString().length > 3) {
      const resource = createAudioResource(join(__dirname, '../voices/max_number_voice.mp3'));
      player.play(resource);
      connection.subscribe(player);
      interaction.update({ content: `${interaction.message.content}` })
      return;
    }
    const resource = createAudioResource(join(__dirname, '../voices/three_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);

    interaction.update({ content: `${interaction.message.content}3` })
  }

  if (interaction.customId === "number_four" + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })
    if (interaction.message.content.toString().length > 3) {
      const resource = createAudioResource(join(__dirname, '../voices/max_number_voice.mp3'));
      player.play(resource);
      connection.subscribe(player);
      interaction.update({ content: `${interaction.message.content}` })
      return;
    }
    const resource = createAudioResource(join(__dirname, '../voices/four_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);

    interaction.update({ content: `${interaction.message.content}4` })
  }

  if (interaction.customId === "number_five" + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })
    if (interaction.message.content.toString().length > 3) {
      const resource = createAudioResource(join(__dirname, '../voices/max_number_voice.mp3'));
      player.play(resource);
      connection.subscribe(player);
      interaction.update({ content: `${interaction.message.content}` })
      return;
    }
    const resource = createAudioResource(join(__dirname, '../voices/five_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);

    interaction.update({ content: `${interaction.message.content}5` })
  }

  if (interaction.customId === "number_six" + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })
    if (interaction.message.content.toString().length > 3) {
      const resource = createAudioResource(join(__dirname, '../voices/max_number_voice.mp3'));
      player.play(resource);
      connection.subscribe(player);
      interaction.update({ content: `${interaction.message.content}` })
      return;
    }
    const resource = createAudioResource(join(__dirname, '../voices/six_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);

    interaction.update({ content: `${interaction.message.content}6` })
  }

  if (interaction.customId === "number_seven" + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })
    if (interaction.message.content.toString().length > 3) {
      const resource = createAudioResource(join(__dirname, '../voices/max_number_voice.mp3'));
      player.play(resource);
      connection.subscribe(player);
      interaction.update({ content: `${interaction.message.content}` })
      return;
    }
    const resource = createAudioResource(join(__dirname, '../voices/seven_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);

    interaction.update({ content: `${interaction.message.content}7` })
  }

  if (interaction.customId === "number_eight" + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })
    if (interaction.message.content.toString().length > 3) {
      const resource = createAudioResource(join(__dirname, '../voices/max_number_voice.mp3'));
      player.play(resource);
      connection.subscribe(player);
      interaction.update({ content: `${interaction.message.content}` })
      return;
    }
    const resource = createAudioResource(join(__dirname, '../voices/eight_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);

    interaction.update({ content: `${interaction.message.content}8` })
  }

  if (interaction.customId === "number_nine" + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })
    if (interaction.message.content.toString().length > 3) {
      const resource = createAudioResource(join(__dirname, '../voices/max_number_voice.mp3'));
      player.play(resource);
      connection.subscribe(player);
      interaction.update({ content: `${interaction.message.content}` })
      return;
    }
    const resource = createAudioResource(join(__dirname, '../voices/nine_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);

    interaction.update({ content: `${interaction.message.content}9` })
  }

  if (interaction.customId === "number_zero" + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })
    if (interaction.message.content.toString().length > 3) {
      const resource = createAudioResource(join(__dirname, '../voices/max_number_voice.mp3'));
      player.play(resource);
      connection.subscribe(player);
      interaction.update({ content: `${interaction.message.content}` })
      return;
    }
    const resource = createAudioResource(join(__dirname, '../voices/zero_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);

    interaction.update({ content: `${interaction.message.content}0` })
  }

  if (interaction.customId === "number_delete" + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })
    if (interaction.message.content.toString().length <= 0) {
      const resource = createAudioResource(join(__dirname, '../voices/no_deleted_numbers_voice.mp3'));
      player.play(resource);
      connection.subscribe(player);
      interaction.update({ content: " " })
      return;
    }

    const resource = createAudioResource(join(__dirname, '../voices/number_delete_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);

    const content_message = interaction.message.content.slice(0, interaction.message.content.toString().length - 1)

    interaction.update({ content: `${content_message}` })
  }

  if (interaction.customId === "number_send" + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })
    if (interaction.message.content.toString().length <= 0) {
      const resource = createAudioResource(join(__dirname, '../voices/not_id_voice.mp3'));
      player.play(resource);
      connection.subscribe(player);
      interaction.update({ content: " " })
      return;
    }

    const resource = createAudioResource(join(__dirname, '../voices/support_description_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);

    const description_embed = new EmbedBuilder()
      .setColor("DarkButNotBlack")
      .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
      .setDescription("```ansi\n[2;32m[2;34mSorununuzu kısaca açıklayın, ve buraya gönderin.[0m[2;32m[0m [2;35mİşlemi iptal etmek için ses kanalından ayrılabilirsiniz.[0m```")
      .setFooter({ text: "Lourity © 2025", iconURL: interaction.user.displayAvatarURL() })
      .setTimestamp()

    interaction.update({ embeds: [description_embed], components: [] })

    const collector = interaction.channel.createMessageCollector({ time: 50000 })

    collector.on("collect", async (msg) => {
      // Lourityyy
      var problem = msg.content
      if (problem) {

        collector.stop()

        const description_success = new EmbedBuilder()
          .setColor("DarkButNotBlack")
          .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
          .setDescription(`\`\`\`ansi\n[2;33m[2;32mBaşarıyla bildirimin yetkililerimize gönderildi, birazdan yanıt vereceklerdir.[0m[2;33m[0m\`\`\`\n> #️⃣ Sipariş İD:\n\`\`\`ansi\n[2;35m[2;36m${interaction.message.content || "sipariş id belirtilmedi"}[0m[2;35m[0m\`\`\`\n> 💬 Sorun Açıklaması:\n\`\`\`ansi\n[2;31m${problem}[0m\`\`\``)

        const guild = await interaction.client.guilds.fetch(config["GUİLD"]);

        const membersSize = await findOnlineMembers(guild, config.ROLE);

        if (membersSize >= 1) {
          const resource = createAudioResource(join(__dirname, '../voices/support_waiting_voice.mp3'));

          player.play(resource);
          connection.subscribe(player);
        } else {
          const resource = createAudioResource(join(__dirname, '../voices/not_online_owner_voice.mp3'));

          player.play(resource);
          connection.subscribe(player);
        }

        interaction.channel.send({ embeds: [description_success] })

        const main_log_embed = new EmbedBuilder()
          .setColor("ecde71")
          .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
          .setDescription(`\`\`\`ansi\n[2;33m[2;32m${interaction.user.tag} adlı üye sipariş sorunu talebi açtı.[0m[2;33m[0m\`\`\`\n> #️⃣ Sipariş İD:\n\`\`\`ansi\n[2;35m[2;36m${interaction.message.content}[0m[2;35m[0m\`\`\`\n> 💬 Sorun Açıklaması:\n\`\`\`ansi\n[2;31m${problem}[0m\`\`\``)
          .setThumbnail(interaction.user.displayAvatarURL())
          .setFooter({ text: "Lourity © 2025", iconURL: interaction.user.displayAvatarURL() })
          .setTimestamp()

        const row = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setEmoji("📨")
              .setLabel("Geri Mesaj Gönder")
              .setStyle(ButtonStyle.Secondary)
              .setCustomId("remessage")
          )
          .addComponents(
            new ButtonBuilder()
              .setEmoji("🔴")
              .setLabel("Talebi Sil")
              .setStyle(ButtonStyle.Danger)
              .setCustomId("deleteticket")
          )

        const ready_row = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setEmoji("🔂")
              .setLabel("Telafiniz Alındı")
              .setStyle(ButtonStyle.Primary)
              .setCustomId("refill_ready")
          )
          .addComponents(
            new ButtonBuilder()
              .setEmoji("⏲️")
              .setLabel("Telafi 24 Saat")
              .setStyle(ButtonStyle.Primary)
              .setCustomId("24refill_ready")
          )
          .addComponents(
            new ButtonBuilder()
              .setEmoji("⛔")
              .setLabel("İptal Edilecek")
              .setStyle(ButtonStyle.Primary)
              .setCustomId("cancel_ready")
          )
          .addComponents(
            new ButtonBuilder()
              .setEmoji("⏭️")
              .setLabel("Hızlandırma İşlem")
              .setStyle(ButtonStyle.Primary)
              .setCustomId("speed_ready")
          )
          .addComponents(
            new ButtonBuilder()
              .setEmoji("☑️")
              .setLabel("İşlem Sağlıyoruz")
              .setStyle(ButtonStyle.Primary)
              .setCustomId("process_ready")
          )

        client.channels.cache.get(config.LOG).send({ embeds: [main_log_embed], components: [row, ready_row] }).then((remessage) => {
          db.set(`memberdata_${remessage.id}`, { user: interaction.user.id, id: interaction.message.content, problem: problem })
        });
      }
    })
  }

  const lourity_messagesender = new ModalBuilder()
    .setCustomId('form')
    .setTitle('Üyeye Mesaj Gönder')
  const a1 = new TextInputBuilder()
    .setCustomId('textmenu')
    .setLabel('Mesaj Yazınız')
    .setStyle(TextInputStyle.Short)
    .setMinLength(3)
    .setPlaceholder('Mesaj giriniz')
    .setRequired(true)

  const row = new ActionRowBuilder().addComponents(a1);
  lourity_messagesender.addComponents(row);

  if (interaction.customId === "remessage") {
    await interaction.showModal(lourity_messagesender);
  }

  if (interaction.customId === 'form') {
    const owner_message = interaction.fields.getTextInputValue("textmenu")
    const memberdata = db.get(`memberdata_${interaction.message.id}`)

    if (!memberdata) {
      interaction.message.delete().catch(e => { })
    }

    const remessage_embed = new EmbedBuilder()
      .setColor("DarkButNotBlack")
      .setAuthor({ name: `Cevaplayan: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
      .setDescription(`Destek mesajınız yanıtlandı:\n\`\`\`ansi\n[2;37m${owner_message}[0m\`\`\`\n> #️⃣ Sipariş İD:\n\`\`\`ansi\n[2;35m[2;36m${memberdata.id || "sipariş id belirtilmemiş"}[0m[2;35m[0m\`\`\`\n> 💬 Sorun Açıklaması:\n\`\`\`ansi\n[2;31m${memberdata.problem}[0m\`\`\``)
      .setThumbnail(interaction.user.displayAvatarURL())
      .setTimestamp()

    client.users.cache.get(memberdata.user).send({ embeds: [remessage_embed] }).then((result) => {
      interaction.update({ content: `Verilen cevap: **${owner_message}**`, components: [] })
      client.channels.cache.get(config.REMESSAGE).send({ content: `\`🟢\` <@${memberdata.user || "bulunamadı"}> | Destek talebin dm üzerinden cevaplandı.` })
      db.delete(`memberdata_${interaction.message.id}`)
    }).catch((err) => {
      interaction.update({ content: "`🔴` Üyeye mesaj gönderilemedi!", components: [] })
      client.channels.cache.get(config.REMESSAGE).send({ content: `\`🔴\` <@${memberdata.user || "bulunamadı"}> | Bir hata yüzünden sana mesaj gönderemedim, lütfen tekrar talep aç.` })
      db.delete(`memberdata_${interaction.message.id}`)
    });
  }

  if (interaction.customId === 'deleteticket') {
    const memberdata = db.get(`memberdata_${interaction.message.id}`)
    if (memberdata) {
      const remessage_embed = new EmbedBuilder()
        .setColor("DarkButNotBlack")
        .setAuthor({ name: `Silen: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
        .setDescription(`Destek talebiniz yetkililer tarafından silindi, bunun bir hata olduğunu düşünüyorsanız tekrar açın.`)
        .setThumbnail(interaction.user.displayAvatarURL())
        .setTimestamp()

      client.users.cache.get(memberdata.user).send({ embeds: [remessage_embed] }).then((result) => {
        interaction.update({ content: "Talep silinmiş.", components: [] })
        client.channels.cache.get(config.REMESSAGE).send({ content: `\`🔴\` <@${memberdata.user || "bulunamadı"}> | Destek talebiniz silindi, bunun bir hata olduğunu düşünüyorsan lütfen tekrar aç.` })
        db.delete(`memberdata_${interaction.message.id}`)
      }).catch((err) => {
        interaction.update({ content: "Talep silinmiş.", components: [] })
        interaction.reply({ content: "`🔴` Talep başarıyla silindi!", ephemeral: true })
        client.channels.cache.get(config.REMESSAGE).send({ content: `\`🔴\` <@${memberdata.user || "bulunamadı"}> | Destek talebiniz silindi, bunun bir hata olduğunu düşünüyorsan lütfen tekrar aç.` })
        db.delete(`memberdata_${interaction.message.id}`)
      });
    }
  }

  if (interaction.customId === 'refill_ready') {
    const memberdata = db.get(`memberdata_${interaction.message.id}`)
    if (memberdata) {
      const refill_ready = new EmbedBuilder()
        .setColor("DarkButNotBlack")
        .setAuthor({ name: `Cevaplayan: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
        .setDescription(`Telafiniz alınmıştır, en kısa sürede gönderilecektir.`)
        .setThumbnail(interaction.user.displayAvatarURL())
        .setTimestamp()

      client.users.cache.get(memberdata.user).send({ embeds: [refill_ready] }).then((result) => {
        client.channels.cache.get(config.REMESSAGE).send({ content: `\`🟢\` <@${memberdata.user || "bulunamadı"}> | Destek talebin dm üzerinden cevaplandı.` })
        db.delete(`memberdata_${interaction.message.id}`)
        interaction.update({ content: "Verilen Cevap: **Telafiniz alınmıştır, en kısa sürede gönderilecektir.**", components: [] })
      }).catch((err) => {
        client.channels.cache.get(config.REMESSAGE).send({ content: `\`🔴\` <@${memberdata.user || "bulunamadı"}> | Bir hata yüzünden sana mesaj gönderemedim, lütfen tekrar talep aç.` })
        db.delete(`memberdata_${interaction.message.id}`)
        interaction.update({ components: [] })
      });
    }
  }

  if (interaction.customId === '24refill_ready') {
    const memberdata = db.get(`memberdata_${interaction.message.id}`)
    if (memberdata) {
      const refill24_ready = new EmbedBuilder()
        .setColor("DarkButNotBlack")
        .setAuthor({ name: `Cevaplayan: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
        .setDescription(`Telafi yapabilmek için siparişin üzerinden 24 saat geçmesi gerekmektedir.`)
        .setThumbnail(interaction.user.displayAvatarURL())
        .setTimestamp()

      client.users.cache.get(memberdata.user).send({ embeds: [refill24_ready] }).then((result) => {
        client.channels.cache.get(config.REMESSAGE).send({ content: `\`🟢\` <@${memberdata.user || "bulunamadı"}> | Destek talebin dm üzerinden cevaplandı.` })
        db.delete(`memberdata_${interaction.message.id}`)
        interaction.update({ content: "Verilen Cevap: **Telafi yapabilmek için siparişin üzerinden 24 saat geçmesi gerekmektedir.**", components: [] })
      }).catch((err) => {
        client.channels.cache.get(config.REMESSAGE).send({ content: `\`🔴\` <@${memberdata.user || "bulunamadı"}> | Bir hata yüzünden sana mesaj gönderemedim, lütfen tekrar talep aç.` })
        db.delete(`memberdata_${interaction.message.id}`)
        interaction.update({ components: [] })
      });
    }
  }
  // lourity
  if (interaction.customId === 'cancel_ready') {
    const memberdata = db.get(`memberdata_${interaction.message.id}`)
    if (memberdata) {
      const refill24_ready = new EmbedBuilder()
        .setColor("DarkButNotBlack")
        .setAuthor({ name: `Cevaplayan: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
        .setDescription(`İptal için işlem sağladım, uygunsa en kısa sürede iptal edilecektir.`)
        .setThumbnail(interaction.user.displayAvatarURL())
        .setTimestamp()

      client.users.cache.get(memberdata.user).send({ embeds: [refill24_ready] }).then((result) => {
        client.channels.cache.get(config.REMESSAGE).send({ content: `\`🟢\` <@${memberdata.user || "bulunamadı"}> | Destek talebin dm üzerinden cevaplandı.` })
        db.delete(`memberdata_${interaction.message.id}`)
        interaction.update({ content: "Verilen Cevap: **İptal için işlem sağladım, uygunsa en kısa sürede iptal edilecektir.**", components: [] })
      }).catch((err) => {
        client.channels.cache.get(config.REMESSAGE).send({ content: `\`🔴\` <@${memberdata.user || "bulunamadı"}> | Bir hata yüzünden sana mesaj gönderemedim, lütfen tekrar talep aç.` })
        db.delete(`memberdata_${interaction.message.id}`)
        interaction.update({ components: [] })
      });
    }
  }

  if (interaction.customId === 'speed_ready') {
    const memberdata = db.get(`memberdata_${interaction.message.id}`)
    if (memberdata) {
      const refill24_ready = new EmbedBuilder()
        .setColor("DarkButNotBlack")
        .setAuthor({ name: `Cevaplayan: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
        .setDescription(`Hızlandırma için işlem sağlandı, en kısa sürede gönderilecektir.`)
        .setThumbnail(interaction.user.displayAvatarURL())
        .setTimestamp()

      client.users.cache.get(memberdata.user).send({ embeds: [refill24_ready] }).then((result) => {
        client.channels.cache.get(config.REMESSAGE).send({ content: `\`🟢\` <@${memberdata.user || "bulunamadı"}> | Destek talebin dm üzerinden cevaplandı.` })
        db.delete(`memberdata_${interaction.message.id}`)
        interaction.update({ content: "Verilen Cevap: **Hızlandırma için işlem sağlandı, en kısa sürede gönderilecektir.**", components: [] })
      }).catch((err) => {
        client.channels.cache.get(config.REMESSAGE).send({ content: `\`🔴\` <@${memberdata.user || "bulunamadı"}> | Bir hata yüzünden sana mesaj gönderemedim, lütfen tekrar talep aç.` })
        db.delete(`memberdata_${interaction.message.id}`)
        interaction.update({ components: [] })
      });
    }
  }

  if (interaction.customId === 'process_ready') {
    const memberdata = db.get(`memberdata_${interaction.message.id}`)
    if (memberdata) {
      const refill24_ready = new EmbedBuilder()
        .setColor("DarkButNotBlack")
        .setAuthor({ name: `Cevaplayan: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
        .setDescription(`Talebiniz üzerine işlem sağlıyoruz efendim.`)
        .setThumbnail(interaction.user.displayAvatarURL())
        .setTimestamp()

      client.users.cache.get(memberdata.user).send({ embeds: [refill24_ready] }).then((result) => {
        client.channels.cache.get(config.REMESSAGE).send({ content: `\`🟢\` <@${memberdata.user || "bulunamadı"}> | Destek talebin dm üzerinden cevaplandı.` })
        db.delete(`memberdata_${interaction.message.id}`)
        interaction.update({ content: "Verilen Cevap: **Talebiniz üzerine işlem sağlıyoruz efendim**", components: [] })
      }).catch((err) => {
        client.channels.cache.get(config.REMESSAGE).send({ content: `\`🔴\` <@${memberdata.user || "bulunamadı"}> | Bir hata yüzünden sana mesaj gönderemedim, lütfen tekrar talep aç.` })
        db.delete(`memberdata_${interaction.message.id}`)
        interaction.update({ components: [] })
      });
    }
  }

  if (interaction.customId === 'subofficer_what') {
    await interaction.deferUpdate()

    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })
    const resource = createAudioResource(join(__dirname, '../voices/whatsubofficer_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);
  }

  if (interaction.customId === 'subofficer_where') {
    await interaction.deferUpdate()

    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })
    const resource = createAudioResource(join(__dirname, '../voices/wheresubofficer_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);
  }

  if (interaction.customId === 'subofficer_money') {
    await interaction.deferUpdate()

    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })
    const resource = createAudioResource(join(__dirname, '../voices/moneysubofficer_voice.mp3'));
    player.play(resource);
    connection.subscribe(player);
  }

  if (interaction.customId === 'other_problems' + interaction.user.id) {
    const connection = joinVoiceChannel({
      channelId: config.VOİCE,
      guildId: config.GUİLD,
      adapterCreator: config.GUİLD.voiceAdapterCreator
    });
    const player = createAudioPlayer({
      behaviors: {
        noSubscriber: NoSubscriberBehavior.Pause,
      }
    })

    const collector = interaction.channel.createMessageCollector({ time: 50000 })

    const resource = createAudioResource(join(__dirname, '../voices/small_problems_voice.mp3'));

    player.play(resource);
    connection.subscribe(player);

    const other_problems_embed = new EmbedBuilder()
      .setColor("DarkButNotBlack")
      .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
      .setDescription("```ansi\n[2;34mLütfen sorununuzu kısaca açıklayın.[0m [2;35mİşlemi iptal etmek için ses kanalından ayrılabilirsiniz.[0m```")
      .setFooter({ text: "Lourity © 2025", iconURL: interaction.user.displayAvatarURL() })
      .setTimestamp()

    interaction.update({ embeds: [other_problems_embed], components: [] })

    collector.on("collect", async (msg) => {
      // Lourityyy
      var problem = msg.content
      if (problem) {

        collector.stop()

        const description_success = new EmbedBuilder()
          .setColor("DarkButNotBlack")
          .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
          .setDescription(`\`\`\`ansi\n[2;33m[2;32mBaşarıyla bildirimin yetkililerimize gönderildi, birazdan yanıt vereceklerdir.[0m[2;33m[0m\`\`\`\n> 💬 Girilen Mesaj:\n\`\`\`ansi\n[2;31m${problem}[0m\`\`\``)

        const guild = await interaction.client.guilds.fetch(config["GUİLD"]);

        const membersSize = await findOnlineMembers(guild, config.ROLE);

        if (membersSize >= 1) {
          const resource = createAudioResource(join(__dirname, '../voices/support_waiting_voice.mp3'));

          player.play(resource);
          connection.subscribe(player);
        } else {
          const resource = createAudioResource(join(__dirname, '../voices/not_online_owner_voice.mp3'));

          player.play(resource);
          connection.subscribe(player);
        }

        interaction.channel.send({ embeds: [description_success] })

        const main_log_embed = new EmbedBuilder()
          .setColor("ecde71")
          .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
          .setDescription(`\`\`\`ansi\n[2;33m[2;32m${interaction.user.tag} adlı üye talep açtı.[0m[2;33m[0m\`\`\`\n> 💬 Girilen Mesaj:\n\`\`\`ansi\n[2;31m${problem}[0m\`\`\``)
          .setThumbnail(interaction.user.displayAvatarURL())
          .setFooter({ text: "Lourity © 2025", iconURL: interaction.user.displayAvatarURL() })
          .setTimestamp()

        const row = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setEmoji("📨")
              .setLabel("Geri Mesaj Gönder")
              .setStyle(ButtonStyle.Secondary)
              .setCustomId("remessage")
          )
          .addComponents(
            new ButtonBuilder()
              .setEmoji("🔴")
              .setLabel("Talebi Sil")
              .setStyle(ButtonStyle.Danger)
              .setCustomId("deleteticket")
          )

        const ready_row = new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setEmoji("🔂")
              .setLabel("Telafiniz Alındı")
              .setStyle(ButtonStyle.Primary)
              .setCustomId("refill_ready")
          )
          .addComponents(
            new ButtonBuilder()
              .setEmoji("⏲️")
              .setLabel("Telafi 24 Saat")
              .setStyle(ButtonStyle.Primary)
              .setCustomId("24refill_ready")
          )
          .addComponents(
            new ButtonBuilder()
              .setEmoji("⛔")
              .setLabel("İptal Edilecek")
              .setStyle(ButtonStyle.Primary)
              .setCustomId("cancel_ready")
          )
          .addComponents(
            new ButtonBuilder()
              .setEmoji("⏭️")
              .setLabel("Hızlandırma İşlem")
              .setStyle(ButtonStyle.Primary)
              .setCustomId("speed_ready")
          )
          .addComponents(
            new ButtonBuilder()
              .setEmoji("☑️")
              .setLabel("İşlem Sağlıyoruz")
              .setStyle(ButtonStyle.Primary)
              .setCustomId("process_ready")
          )

        client.channels.cache.get(config.LOG).send({ embeds: [main_log_embed], components: [row, ready_row] }).then((remessage) => {
          db.set(`memberdata_${remessage.id}`, { user: interaction.user.id, id: interaction.message.content, problem: problem })
        });
      }
    })
  }
};
