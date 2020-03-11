const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const radioactiveDecayConst = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  sampleActivity = parseFloat(sampleActivity);
  if (sampleActivity <= 0 ||
    sampleActivity > MODERN_ACTIVITY ||
    sampleActivity === undefined ||
    isNaN(sampleActivity)) return false //  type of NaN is number,so unsuitable; NaN === NaN false, so isNaN to be used
  const ratioActivities = MODERN_ACTIVITY / sampleActivity;
  let result = Math.ceil(Math.log(ratioActivities) / radioactiveDecayConst);
  return result;
  //  alternative way, inverted conditons, to return false
  //return (
  //  sampleActivity > 0 &&
  //  sampleActivity < MODERN_ACTIVITY &&
  //  sampleActivity !== undefined &&
  //  !isNaN(sampleActivity) &&
  //  result);
};
