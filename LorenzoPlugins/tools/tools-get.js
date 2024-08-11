const axios = require('axios');

const util = require('util');

const {

	downloadContentFromMessage,

    BufferJSON,

    WA_DEFAULT_EPHEMERAL,

    WABinary,

    generateWAMessageFromContent,

    proto,

    generateWAMessageContent,

    generateWAMessage,

    prepareWAMessageMedia,

    areJidsSameUser,

    InteractiveMessage,

    getContentType

} = require('@whiskeysockets/baileys')

module.exports = {

	type: 'tools',

	command: ['get'],

	operate: async (context) => {

		const {

			LorenzoBotInc,

			m,

			q: text,

			prefix,

			command,

			replygcLorenzo

		} = context;

		// Ensure text is a string

		if (typeof text !== 'string' || !text.trim()) {

			return replygcLorenzo(`Add Input (Link)\n\nExample: ${prefix + command} https://example.com`);

		}

		// Function to validate if the input is a URL

		const isUrl = (url) => {

			return url.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi);

		};

		// Attempt to validate the URL

		const urlMatch = isUrl(text);

		if (!urlMatch) {

			return replygcLorenzo('Invalid URL provided. Please provide a valid URL.\n\nExample: ${prefix + command} https://example.com');

		}

		const url = urlMatch[0]; // Use the first match

		try {

			// Fetch data from the URL

			const res = await axios.get(url);

			// Check the content type of the response

			if (!/json|html|plain/.test(res.headers['content-type'])) {

				return replygcLorenzo(`The content type of the provided URL is not supported.\n\nSupported types: json, html, plain text.`);

			}

			// Reply with the fetched data

			replygcLorenzo(util.format(res.data));

		} catch (e) {

			// Handle any errors that occur during the fetch

			replygcLorenzo(`Error fetching data from the provided URL: ${util.format(e.message)}`);

		}

	}

};