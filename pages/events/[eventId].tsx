import { useRouter } from 'next/router';
import { VFC } from 'react';

import { getEventById } from 'dummy-data';
import EventSummary from 'components/event-detail/event-summary';
import EventLogistics from 'components/event-detail/event-logistics';
import EventContent from 'components/event-detail/event-content';
import Comments from 'components/input/comments';

const EventDetailPage: VFC = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId as string);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </div>
      <Comments eventId={event.id} />
    </>
  );
};

export default EventDetailPage;
