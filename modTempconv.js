export const createTempconv = (containerName) => {
  let container = document.getElementById(containerName);

  // Create the HTML for the temp conversion
  container.innerHTML = `
  <div>
  <h2>Temperature Converter</h2>
  <div class="dflex">
  <label>Enter number: 
  <input type="number" id="tempval" />
  </label>
  <button id="ctof">C to F</button>
  <button id="ftoc">F to C</button>
  </div>
  <h2 id="tempresult">-- converted temp --</h2>
  </div>
  `;

  const tempresultEl = document.getElementById('tempresult');
  const obj = {
    ctof: () => {
      let value = Number(document.getElementById('tempval').value);
      const convertedvalue = value * 1.8 + 32.0;
      tempresultEl.innerHTML = `${value.toFixed(
        2
      )} &deg;C = ${convertedvalue.toFixed(2)} &deg;F`;
    },
    ftoc: () => {
      let value = Number(document.getElementById('tempval').value);
      const convertedvalue = (value - 32.0) / 1.8;
      tempresultEl.innerHTML = `${value.toFixed(
        2
      )} &deg;F = ${convertedvalue.toFixed(2)} &deg;C`;
    },
  };

  return obj;
};
