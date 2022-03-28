const DUMMY_EVENTS = [
  {
    id: 'es1',
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    image: 'images/coding-event.jpg',
    location: 'Somestreet 25, 12345 San Somewhereo',
    isFeatured: false,
    date: '2021-05-12',
  },
  {
    id: 'es2',
    title: 'Networking for introverts',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    image: 'images/introvert-event.jpg',
    location: 'New Wall Street 5, 98765 New York',
    isFeatured: true,
    date: '2021-05-30',
  },
  {
    id: 'es3',
    title: 'Networking for extroverts',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    image: 'images/introvert-event.jpg',
    location: 'My Street 12, 10115 Broke City',
    isFeatured: true,
    date: '2022-04-10',
  },
];

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getFilteredEvents(dateFilter: any) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id: string) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
