const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('가위바위보')
		.setDescription('봇과 가위바위보 대결을 합니다!'),
	async execute(interaction) {
        const s = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('가위')
                    .setLabel('가위')
                    .setStyle('PRIMARY'),
            );
        const r = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('바위')
                    .setLabel('바위')
                    .setStyle('PRIMARY'),
            );
        const p = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('보')
                    .setLabel('보')
                    .setStyle('PRIMARY'),
            );
        const embed = new MessageEmbed()
			.setColor('#a6e9dfff')
			.setTitle('가위바위보!')
			.setDescription('무엇을 내실 건가요?');
		await interaction.reply({ephemeral: true, embeds: [embed], components: [s, r, p]});



        const filter = i => i.customId === '가위' && i.user.id === interaction.user.id;

        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

        collector.on('collect', async i => {
            if (i.customId === '가위') {
                await i.update({ content: 'A button was clicked!', components: [] });
            }
        });

        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
	},
};