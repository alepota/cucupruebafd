let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:CUCU BOT;;\nFN:CUCU BOT\nORG:CUCU BOT\nTITLE:\nitem1.TEL;waid=593982550410:593982550410\nitem1.X-ABLabel:CUCU BOT\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:CUCU BOT\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'CUCU BOT⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
