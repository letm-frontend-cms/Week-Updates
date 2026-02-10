/**
 * Simulates @grff/ui-library: included in bundle at BUILD time.
 * Loaded synchronously when the app starts (require).
 */
module.exports = {
  name: '@grff/ui-library',
  components: ['Button', 'Card', 'Alert'],
  loadedAt: 'build-time',
};
