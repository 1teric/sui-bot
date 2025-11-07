const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('테스트')
		.setDescription('버튼 테스트 입니다!'),
	async execute(interaction) {
        const embed = new MessageEmbed()
			.setColor('#a6e9dfff')
			.setTitle('테스트!')
			.setDescription('야호');
		await interaction.reply({content:'', embeds: [embed]});
	},
};
