// @ts-check

module.exports = {
    /** 
     * @param {import('discord.js').Guild} guild
     * @param {string} roleId
     * 
     * @returns {Promise<number>}
     */
    async findOnlineMembers(guild, roleId) {
        const onlineMembers = await guild.members.fetch({ withPresences: true });
        const filteredOnlineMembers = onlineMembers.filter(member => member.roles.cache.has(roleId) && member.presence?.status === 'online');
        const filteredDndMembers = onlineMembers.filter(member => member.roles.cache.has(roleId) && member.presence?.status === 'dnd');
        const filteredIdleMembers = onlineMembers.filter(member => member.roles.cache.has(roleId) && member.presence?.status === 'idle');

        return filteredOnlineMembers.size + filteredDndMembers.size + filteredIdleMembers.size;
    }
}
// lourity