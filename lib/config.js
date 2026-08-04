// App configuration.
module.exports = {
  // Tightened for security: lock the session sooner if idle.
  SESSION_TIMEOUT_MINUTES: 5,
  // Extended cap so long-running note sessions don't get logged out outright,
  // as long as they stay active within the inactivity window above.
  MAX_SESSION_MINUTES: 30,
};
