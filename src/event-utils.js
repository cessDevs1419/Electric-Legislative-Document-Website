
let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Webminar Event',
    start: todayStr + 'T10:00:00',
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T10:00:00',
  },
  {
    id: createEventId(),
    title: 'Weekly Meeting',
    start: todayStr + 'T10:00:00',
  }
];

export function createEventId() {
  return String(eventGuid++);
}

export function formatDateTime(dateTimeString) {
  const date = new Date(dateTimeString);
  const options = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  return date.toLocaleString('en-US', options).replace(':', ' ');
}
