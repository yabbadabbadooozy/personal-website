const updateLastUpdated = () => {
  const target = document.querySelector('[data-autodate]');
  if (!target) return;

  const modified = new Date(document.lastModified);
  if (Number.isNaN(modified.getTime())) return;

  const fmt = new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  target.textContent = fmt.format(modified);
  target.setAttribute('datetime', modified.toISOString().split('T')[0]);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateLastUpdated);
} else {
  updateLastUpdated();
}
