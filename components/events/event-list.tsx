import { VFC } from 'react';

import EventItem from './event-item';

type Event = {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  isFeatured: boolean;
  date: string;
};

interface EventListProps {
  items: Event[];
}

const EventList: VFC<EventListProps> = ({ items }) => {
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
};

export default EventList;
