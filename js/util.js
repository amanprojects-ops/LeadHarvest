// Maps Scraper — Utility Functions
// Simplified: removed secureFetch, cookie helpers, and auth-related utilities

function getQueryString(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function newTabulator(selector, options) {
  return new Tabulator(selector, options);
}
