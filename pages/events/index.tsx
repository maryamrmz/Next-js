import { VFC } from 'react';
import { getAllEvents } from 'dummy-data';
import EventList from 'components/events/event-list';
import { useRouter } from 'next/router';

import EventSearch from 'components/events/event-search';

const AllEvents: VFC = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (
    year: string | undefined,
    month: string | undefined
  ) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />;
    </>
  );
};

export default AllEvents;
