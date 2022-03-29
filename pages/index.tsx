import type { NextPage } from 'next';

import { getFeaturedEvents } from 'dummy-data';
import EventList from 'components/events/event-list';

const Home: NextPage = () => {
  const featuredEvents = getFeaturedEvents();

  return <EventList items={featuredEvents} />;
};

export default Home;
