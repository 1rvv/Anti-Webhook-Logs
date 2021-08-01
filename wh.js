const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { token, prefix } = require('./config.json');

client.login(token);

client.on('webhookUpdate', async (channel ) => {
    const guild = channel.guild;        
    const action = await guild.fetchAuditLogs({ type: "WEBHOOK_CREATE"     }).then(async (audit) => audit.entries.first());
        if (action.executor.id === client.user.id) return;
          const position = channel.position;
          const webhook = await channel.fetchWebhooks();
          const rateLimitPerUser = channel.rateLimitPerUser;
          var newChannel = await channel.clone()
         channel.delete();
        var loggingEmbed = new Discord.MessageEmbed()
    .setTitle('Fz & Irvv')
    .addField(`ID : ${action.executor.tag}`, `**Utilisateur :** ${action.executor}`)
    .setColor("#2f3136")
    .setFooter("Attention, un webhook vient d'être crée.")
    newChannel.setPosition(position);
    newChannel.setRateLimitPerUser(rateLimitPerUser)
    let logChannel = client.channels.cache.get("871084103670329414") // le channel de logs
if(!logChannel) return;
logChannel.send(loggingEmbed)
})
