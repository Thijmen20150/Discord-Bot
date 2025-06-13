const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('changelog')
    .setDescription('Plaats een changelog update')
    .addStringOption(option =>
      option.setName('inhoud')
        .setDescription('Wat is er nieuw?')
        .setRequired(true)
    ),

  async execute(interaction) {
    const allowedRoleId = '1379145076541882381'; // 🔁 Vervang dit met je echte rol-ID
    const member = interaction.member;

    // Controleer of de gebruiker de juiste rol-ID heeft
    if (!member.roles.cache.has(allowedRoleId)) {
      return interaction.reply({
        content: 'Je hebt geen toestemming om dit commando te gebruiken.',
        ephemeral: true
      });
    }

    const inhoud = interaction.options.getString('inhoud');

    const staffEmbed = new EmbedBuilder()
      .setAuthor({ name: 'Alkmaar Developer' })
      .setDescription('Er zijn nieuwe changelogs')
      .setColor('#00FFFF');

    const changelogEmbed = new EmbedBuilder()
      .setDescription(` ${inhoud}`)
      .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })
      .setColor('#00FFFF');

    await interaction.reply({ embeds: [staffEmbed, changelogEmbed] });
  },
};
