module.exports = function calculateNumber (a, b) {
  const r = Math.round;
  return r(a) + r(b);
};
