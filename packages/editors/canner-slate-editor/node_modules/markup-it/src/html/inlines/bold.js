const { Serializer, MARKS } = require('../../');

/**
 * Serialize a bold text to HTML
 * @type {Serializer}
 */
const serialize = Serializer()
    .transformMarkedRange(MARKS.BOLD, (state, text, mark) => {
        return `<b>${text}</b>`;
    });

module.exports = { serialize };
