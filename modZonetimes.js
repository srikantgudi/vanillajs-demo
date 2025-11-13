import { DateTime } from 'luxon';

export const createZonetimes = (containerName) => {
  let container = document.getElementById(containerName);
  let srcZone;
  let srcDt;
  let targetZone;

  const idElem = (id) => document.getElementById(id);

  // Create the HTML for the zone times
  container.innerHTML = `
  <div>
  <h2>Zone Times Viewer</h2>
  <div class="dflex">
  <select id='selzone'>
    <option value=''>- Select -</option>
    <option value='America/Los_Angeles'>US-West</option>
    <option value='America/New_York'>US-East</option>
    <option value='America/Sao_Paulo'>Sao Paulo</option>
    <option value='Europe/London'>UK</option>
    <option value='Europe/Paris'>France</option>
    <option value='Europe/Berlin'>Germany</option>
    <option value='Europe/Moscow'>Moscow</option>
    <option value='Asia/Kolkata'>India</option>
    <option value='Asia/Tokyo'>Japann</option>
    <option value='Pacific/Auckland'>New Zealand</option>
  </select>
    </div>
    <h3 id="timeresult">-- selected zone time --</h3>
    <svg viewBox='-50 -50 100 100' width='400'>
      <circle r='49' fill='lightcyan' />
      <line id='srchrhand' x1='-4' x2='30' stroke='navy' stroke-linecap='round' />
      <line id='srcmihand' x1='-4' x2='42' stroke='navy' stroke-linecap='round' />
    </svg>
  </div>
  `;

  const timeresultEl = document.getElementById('timeresult');

  const obj = {
    showzonetime: (zone) => {
      srcZone = zone;
      srcDt = DateTime.now().setZone(zone);
      timeresultEl.innerHTML = srcDt.toFormat('EEE dd MMM HH:mm:ss a z (Z)');
      const ang = obj.getSrcAng();
      idElem('srchrhand').setAttribute('transform', `rotate(${ang.h})`);
      idElem('srcmihand').setAttribute('transform', `rotate(${ang.m})`);
    },
    getSource: () => {
      return srcZone;
    },
    getSrcAng: () => {
      return {
        h: srcDt.hour * 30 + srcDt.minute / 2 - 90,
        m: srcDt.minute * 6 + srcDt.second / 10 - 90,
      };
    },
  };

  return obj;
};
