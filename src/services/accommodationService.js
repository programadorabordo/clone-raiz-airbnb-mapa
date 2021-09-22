import accommodationsMock from '../../data/mock.js';

async function getAccommodations() {
  return accommodationsMock.data.dora.exploreV3.sections[2].items;
}

export default {
  getAccommodations
};