export const createCounter = (containerName, initialValue = 0) => {
  let value = initialValue;
  let container = document.getElementById(containerName);

  // Create the HTML for the counter
  container.innerHTML = `
    <div>
      <h2>Counter module</h2>
      <h3 id="countervalue">${value}</h3>
      <div class="dflex">
        <button id="dec">-</button>
        <button id="inc">+</button>
        <button id="zero">0</button>
      </div>
    </div>
  `;

  const counteValueEl = document.getElementById('countervalue');
  const obj = {
    refresh: (newval = value) => {
      counteValueEl.innerHTML = newval;
    },
    increment: (delta = 1) => {
      value += delta;
      obj.refresh(value);
    },

    decrement: (delta = 1) => {
      value -= delta;
      obj.refresh(value);
    },

    reset: () => {
      value = 0;
      obj.refresh(value);
    },
  };

  return obj;
};
