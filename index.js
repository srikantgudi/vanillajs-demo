import { createCounter } from './modCounter.js';
import { createTempconv } from './modTempconv.js';
import { createZonetimes } from './modZonetimes.js';

const idElem = (id) => document.getElementById(id);

idElem('counter').addEventListener('click', () => {
  const counter = createCounter('content');
  alert('counter..');

  idElem('dec').addEventListener('click', (e) => {
    counter.decrement();
  });
  idElem('inc').addEventListener('click', () => {
    counter.increment();
  });
  idElem('zero').addEventListener('click', () => {
    counter.reset();
  });
});

idElem('tempconv').addEventListener('click', () => {
  const tempconv = createTempconv('content');
  let tempval = 0;
  let temptype = 'c';

  const tempvalInput = idElem('tempval');

  idElem('ctof').onclick = function () {
    tempconv.ctof();
  };
  idElem('ftoc').onclick = function () {
    tempconv.ftoc();
  };
});

idElem('zonetimes').addEventListener('click', () => {
  const zonetimeComp = createZonetimes('content');
  idElem('selzone').onchange = function (e) {
    zonetimeComp.showzonetime(e.target.value);
  };
});
