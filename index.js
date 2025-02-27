const { EmbedBuilder, ButtonStyle, Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, ButtonBuilder } = require("discord.js");
const { findOnlineMembers } = require('./lib');
const client = new Client({ intents: Object.values(GatewayIntentBits), shards: "auto", partials: [Partials.Message, Partials.Channel, Partials.GuildMember, Partials.Reaction, Partials.GuildScheduledEvent, Partials.User, Partials.ThreadMember] });
const { joinVoiceChannel, createAudioPlayer, createAudioResource, NoSubscriberBehavior } = require('@discordjs/voice');
const { join } = require('path');
const config = require("./config.json");
const db = require("croxydb")
// lourity
global.client = client;
client.commands = (global.commands = []);
const { readdirSync } = require("fs")
readdirSync('./commands').forEach(f => {
    if (!f.endsWith(".js")) return;

    const props = require(`./commands/${f}`);

    client.commands.push({
        name: props.name.toLowerCase(),
        description: props.description,
        options: props.options,
        dm_permission: false,
        type: 1
    });

    console.log(`[COMMAND] ${props.name} komutu yüklendi.`)

});
readdirSync('./events').forEach(e => {

    const eve = require(`./events/${e}`);
    const name = e.split(".")[0];

    client.on(name, (...args) => {
        eve(client, ...args)
    });
    console.log(`[EVENT] ${name} eventi yüklendi.`)
});


client.login(config.TOKEN)

process.on("unhandledRejection", (reason, p) => {
    console.log(" [Error] :: Unhandled Rejection/Catch");
    console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
    console.log(" [Error] :: Uncaught Exception/Catch");
    console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(" [Error] :: Uncaught Exception/Catch (MONITOR)");
    console.log(err, origin);
});

client.on("voiceStateUpdate", async (newState, oldState) => {
    if (oldState.channel.id !== config['VOİCE']) return;
    if (newState.member?.user.bot) return;

    if (oldState && oldState.channel?.type === ChannelType.GuildVoice) {
        const connection = joinVoiceChannel({
            channelId: config.VOİCE,
            guildId: newState.guild.id,
            adapterCreator: newState.guild.voiceAdapterCreator
        });

        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            }
        })

        const member = await newState.guild.members.fetch(newState.member.id);

        const tickets_row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setEmoji("🛒")
                    .setLabel("Sipariş Sorunları")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("order_problems" + member.user.id)
            )
            .addComponents(
                new ButtonBuilder()
                    .setEmoji("🔂")
                    .setLabel("Telafi")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("refill" + member.user.id)
            )
            .addComponents(
                new ButtonBuilder()
                    .setEmoji("🏘️")
                    .setLabel("Altbayilik")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("subofficer" + member.user.id)
            )
            .addComponents(
                new ButtonBuilder()
                    .setEmoji("🎫")
                    .setLabel("Sorunum bunlar değil")
                    .setStyle(ButtonStyle.Secondary)
                    .setCustomId("other_problems" + member.user.id)
            )

        setTimeout(() => {

            const ticket_button = new EmbedBuilder()
                .setColor("DarkButNotBlack")
                .setAuthor({ name: `${member.user.username}`, iconURL: member.user.displayAvatarURL() })
                .setDescription("```ansi\n[2;34mDestek almak istediğiniz konunun butonuna tıklayınız.[0m [2;35mİşlemi iptal etmek için ses kanalından ayrılabilirsiniz.[0m```")
                .setFooter({ text: "Lourity © 2025", iconURL: member.guild.iconURL() })
                .setTimestamp()

            member.send({ embeds: [ticket_button], components: [tickets_row] }).then((msg) => {
                setTimeout(() => {
                    msg.delete()
                }, 80 * 1000)
            }).catch(e => {
                const resource = createAudioResource(join(__dirname, './voices/welcome_voice_error.mp3'));

                player.play(resource);
                connection.subscribe(player);
                return;
            })

            const resource = createAudioResource(join(__dirname, './voices/welcome_voice.mp3'));
            player.play(resource);
            connection.subscribe(player);
        }, 3000);
    }

    if (newState && newState.channel?.type === ChannelType.GuildVoice) {
        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            }
        })
        player.stop()
    }
});

client.on("interactionCreate", async interaction => {
    if (interaction.customId === "order_problems" + interaction.user.id) {

        const numbers_one = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("1")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("number_one" + interaction.user.id)
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("2")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("number_two" + interaction.user.id)
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("3")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("number_three" + interaction.user.id)
            )

        const numbers_two = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("4")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("number_four" + interaction.user.id)
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("5")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("number_five" + interaction.user.id)
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("6")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("number_six" + interaction.user.id)
            )

        const numbers_three = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("7")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("number_seven" + interaction.user.id)
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("8")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("number_eight" + interaction.user.id)
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("9")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("number_nine" + interaction.user.id)
            )

        const numbers_four = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("🫡")
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true)
                    .setCustomId("disabled_button" + interaction.user.id)
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("0")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("number_zero" + interaction.user.id)
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("◀️")
                    .setStyle(ButtonStyle.Secondary)
                    .setCustomId("number_delete" + interaction.user.id)
            )
            .addComponents(
                new ButtonBuilder()
                    .setLabel("✅")
                    .setStyle(ButtonStyle.Success)
                    .setCustomId("number_send" + interaction.user.id)
            )

        const order_problems_embed = new EmbedBuilder()
            .setColor("DarkButNotBlack")
            .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
            .setDescription("```ansi\n[2;34mButonları kullanarak sipariş id'nizi girin.[0m [2;35mİşlemi iptal etmek için ses kanalından ayrılabilirsiniz.[0m```")
            .setFooter({ text: "Lourity © 2025", iconURL: interaction.user.displayAvatarURL() })
            .setTimestamp()

        const connection = joinVoiceChannel({
            channelId: config.VOİCE,
            guildId: config.GUİLD,
            adapterCreator: config.GUİLD.voiceAdapterCreator
        });
        const resource = createAudioResource(join(__dirname, './voices/order_problems_voice.mp3'));
        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            }
        })
        player.play(resource);
        connection.subscribe(player);

        return interaction.update({ embeds: [order_problems_embed], components: [numbers_one, numbers_two, numbers_three, numbers_four] })
    }


    if (interaction.customId === 'refill' + interaction.user.id) {
        const refill_embed = new EmbedBuilder()
            .setColor("DarkButNotBlack")
            .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
            .setDescription("```ansi\n[2;34mTelafi yaptırmak istediğiniz sipariş id'lerini giriniz.[0m [2;35mİşlemi iptal etmek için ses kanalından ayrılabilirsiniz.[0m```")
            .setFooter({ text: "Lourity © 2025", iconURL: interaction.user.displayAvatarURL() })
            .setTimestamp()

        const connection = joinVoiceChannel({
            channelId: config.VOİCE,
            guildId: config.GUİLD,
            adapterCreator: config.GUİLD.voiceAdapterCreator
        });
        const resource = createAudioResource(join(__dirname, './voices/refill_voice.mp3'));
        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            }
        })
        player.play(resource);
        connection.subscribe(player);

        interaction.update({ embeds: [refill_embed], components: [] })

        const collector = interaction.channel.createMessageCollector({ time: 50000 })

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
                    var resource = createAudioResource(join(__dirname, './voices/support_waiting_voice.mp3'));

                    player.play(resource);
                    connection.subscribe(player);
                } else {
                    var resource = createAudioResource(join(__dirname, './voices/not_online_owner_voice.mp3'));

                    player.play(resource);
                    connection.subscribe(player);
                }

                interaction.channel.send({ embeds: [description_success] })

                const main_log_embed = new EmbedBuilder()
                    .setColor("ecde71")
                    .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
                    .setDescription(`\`\`\`ansi\n[2;33m[2;32m${interaction.user.tag} adlı üye telafi için talep açtı.[0m[2;33m[0m\`\`\`\n> #️⃣ Girilen Mesaj:\n\`\`\`ansi\n[2;35m[2;36m${problem}[0m[2;35m[0m\`\`\``)
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


    if (interaction.customId === 'subofficer' + interaction.user.id) {
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
        const resource = createAudioResource(join(__dirname, './voices/officer_voice.mp3'));
        player.play(resource);
        connection.subscribe(player);

        const subofficer_embed = new EmbedBuilder()
            .setColor("DarkButNotBlack")
            .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
            .setDescription("```ansi\n[2;34mAşağıdaki butonları kullanarak altbayilik hakkında bilgi alabilirsiniz.[0m [2;35mİşlemi iptal etmek için ses kanalından ayrılabilirsiniz.[0m```\n[**Altbayilik sayfası ↗️**](https://seninpanelin.com.tr/child-panels)")
            .setFooter({ text: "Lourity © 2025", iconURL: interaction.user.displayAvatarURL() })
            .setTimestamp()

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setEmoji("❔")
                    .setLabel("Altbayilik Nedir?")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("subofficer_what")
            )
            .addComponents(
                new ButtonBuilder()
                    .setEmoji("🛒")
                    .setLabel("Altbayilik Nasıl Alınır?")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("subofficer_where")
            )
            .addComponents(
                new ButtonBuilder()
                    .setEmoji("💵")
                    .setLabel("Altbayilik Ücretleri Nelerdir?")
                    .setStyle(ButtonStyle.Primary)
                    .setCustomId("subofficer_money")
            )

        interaction.update({ embeds: [subofficer_embed], components: [row] })
    }
})
