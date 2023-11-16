let div = document.getElementById("header-subtitle");
let texts = ["Developing", "Designing", "Sharing"];

function write(str, done) {
  var char = str.split("").reverse();
  var typer = setInterval(function () {
    if (!char.length) {
      clearInterval(typer);
      return setTimeout(done, 500);
    }
    var next = char.pop();
    div.innerHTML += next;
  }, 100);
}

function clean(done) {
  var char = div.innerHTML;
  var nr = char.length;
  var typer = setInterval(function () {
    if (nr-- == 0) {
      clearInterval(typer);
      return done();
    }
    div.innerHTML = char.slice(0, nr);
  }, 100);
}

function footer(content, el) {
  var current = -1;
  function prox(cb) {
    if (current < content.length - 1) current++;
    else current = 0;
    var str = content[current];
    write(str, function () {
      clean(prox);
    });
  }
  prox(prox);
}
footer(texts);
