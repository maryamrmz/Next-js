import EventItem from './event-item';
import { Event } from '../shared/EventType';

function EventList(props: { items: Event[] }) {
  const { items } = props;

  return (
    <ul className="py-12">
      {items.map((event: Event) => (
        <EventItem
          key={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
          id={event.id}
        />
      ))}
    </ul>
  );
}

export default EventList;
