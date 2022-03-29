import { useRouter } from 'next/router';
import { VFC } from 'react';

import { getFilteredEvents } from 'dummy-data';
import EventList from 'components/events/event-list';
import ResultsTitle from 'components/events/results-title';
import Button from 'components/ui/button';

const FilteredEvents: VFC = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = Number(filteredYear);
  const numMonth = Number(filteredMonth);

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <p>Invalid filter. Please adjust your values!</p>;
        <Button link="/events">Show All Events</Button>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <p>No events found for the chosen filter!</p>
        <Button link="/events">Show All Events</Button>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />;
    </>
  );
};

export default FilteredEvents;
