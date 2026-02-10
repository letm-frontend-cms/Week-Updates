/**
 * Simulates a runtime chunk (e.g. analytics widget): loaded at RUNTIME.
 * Fetched on demand via dynamic import(), not in initial bundle.
 */
module.exports = {
  name: 'AnalyticsWidget',
  version: '1.0.0',
  loadedAt: 'runtime',
};
