const axios = require('axios');

module.exports = {
    type: 'convert',
    command: ['shorten', 'shortlink', 'shorturl', 'shortenlink'],
    operate: async (context) => {
        const { LorenzoBotInc, m, q, prefix, command, replygcLorenzo } = context;

        if (!q) {
            await replygcLorenzo(`Add input, Example: *${prefix + command} https://example.com*`);
            return;
        }

        try {
            const { data: tinyUrlShortUrl } = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`);
            await replygcLorenzo(`Shortened Succes\n\n*TinyURL: ${tinyUrlShortUrl}*`);
        } catch (error) {
            console.error('Error shortening URL:', error);
            await replygcLorenzo('Failed to shorten URL. Please try again later.');
        }
    }
};