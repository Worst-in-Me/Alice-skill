const { reply, pause, audio, buttons } = require('alice-renderer');
const { json } = require('micro');

module.exports = async (req, res) => {

    // Из запроса извлекаются свойства request, session и version.
    const { request, session, version } = await json(req);

    // В тело ответа вставляются свойства version и session из запроса.
    // Подробнее о формате запроса и ответа — в разделе Протокол работы навыка.
    res.end(
        reply`
            ${audio('sounds-game-win-1')} ${['Привет', 'т+аджикистан']}! ${pause(500)} Как дел+а?
            ${buttons(['Все отлично', 'Супер'])}
            `,
    )};
