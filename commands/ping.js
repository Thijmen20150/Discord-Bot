const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Geeft pong terug!'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  }
};
