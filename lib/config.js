// App configuration.
module.exports = {
  // The session locks after this many minutes of inactivity.
  SESSION_TIMEOUT_MINUTES: Number(process.env.SESSION_TIMEOUT_MINUTES) || 15,
};
