const { Serializer, MARKS } = require('../../');
const escape = require('../escape');

/**
 * Serialize an inline code to HTML
 * @type {Serializer}
 */
const serialize = Serializer()
    .transformMarkedRange(MARKS.CODE, (state, text, mark) => {
        return `<code>${escape(text)}</code>`;
    });

module.exports = { serialize };
