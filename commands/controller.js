const { EmbedBuilder } = require("discord.js");
const { joinVoiceChannel, createAudioPlayer, NoSubscriberBehavior } = require('@discordjs/voice');
const config = require("../config.json");
// lourity
module.exports = {
    name: "voice",
    description: 'Destek botunu ses kanalına sokarsınız.',
    type: 1,
    options: [{
        type: 1,
        name: 'controller',
        description: 'Destek botunu ses kanalına sokarsınız.'
    }],
    run: async (client, interaction) => {

        const embed = new EmbedBuilder()
            .setColor("Red")
            .setAuthor({ name: `${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL() })
            .setDescription("```ansi\n[2;35mYeterli yetkiniz bulunmamakta![0m```")
            .setFooter({ text: "Lourity © 2025", iconURL: interaction.guild.iconURL() })
            .setTimestamp()

        if (!interaction.user.id === config.OWNER) return interaction.reply({ embeds: [embed], ephemeral: true })

        const voiceChannel = config.VOİCE;

        if (voiceChannel) {
            const connection = joinVoiceChannel({
                channelId: voiceChannel,
                guildId: interaction.guild.id,
                adapterCreator: interaction.guild.voiceAdapterCreator
            });

            const player = createAudioPlayer({
                behaviors: {
                    noSubscriber: NoSubscriberBehavior.Pause,
                }
            })

            connection.subscribe(player);


            return interaction.reply({ embeds: [embed.setColor("Green").setDescription("```ansi\n[2;36mBaşarıyla ses kanalına giriş yaptım! [0m```")] })
        } else {
            return interaction.reply({ embeds: [embed.setDescription("```ansi\n[2;36m[2;35mBir sorun oluştu![0m[2;36m[0m```")] })
        }
    }
}
