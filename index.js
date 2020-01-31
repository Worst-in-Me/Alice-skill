const { reply, pause, audio, buttons } = require('alice-renderer');

reply`
    ${audio('sounds-game-win-1')} ${['Привет', 'т+аджикистан']}! ${pause(500)} Как дел+а?
    ${buttons(['Все отлично', 'Супер'])}
    `;