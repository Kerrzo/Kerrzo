const r = new rive.Rive({
    src: '42logo.riv',
    canvas: document.getElementById('canvas'),
    layout: new rive.Layout({fit: 'fill'}),                
});

const revealButton = document.getElementById('reveal');
const questionButton = document.getElementById('question');
const answerButton = document.getElementById('answer');
const blackButton = document.getElementById('black');
const whiteButton = document.getElementById('white');


revealButton.onclick = _ =>                                 
        r.play('Reveal');

questionButton.onclick = _ =>               
        r.play('Question');

answerButton.onclick = _ =>               
        r.play('Answer');

blackButton.onclick = _ =>                
        r.play('Black');

whiteButton.onclick = _ =>                
        r.play('White');
                