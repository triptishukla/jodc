var title = document.getElementById('intro');

var typewriter = new Typewriter(title, {
    loop: true
});

typewriter.typeString('JODC')
    .pauseFor(2500)
    .deleteAll()
    .typeString('JIIT Open Dev Circle ')
   
    .start();