const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('핑')
		.setDescription('퐁!'),
	async execute(interaction) {
		await interaction.reply('퐁!');
	},
};