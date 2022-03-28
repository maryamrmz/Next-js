import { FaArrowRight, FaCalendarMinus, FaMapMarkerAlt } from 'react-icons/fa';

import { Event } from '../shared/EventType';
import Button from '../ui/button';

function EventItem(props: Omit<Event, 'description' | 'isFeatured'>) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `events/${id}`;

  return (
    <li className="mb-6 flex justify-center last:mb-auto">
      <img src={`/${image}`} alt={title} className="w-68 h-48 object-cover" />
      <div className="relative min-w-[350px] bg-slate-100 p-5">
        <div>
          <h2 className="text-xl font-medium">{title}</h2>
        </div>
        <div className="my-2 flex items-center text-zinc-600">
          <FaCalendarMinus />
          <time className="ml-2">{humanReadableDate}</time>
        </div>
        <div className="my-2 flex items-center text-zinc-400">
          <FaMapMarkerAlt />
          <address className="ml-2">{formattedAddress}</address>
        </div>
        <div className="absolute bottom-5 right-5">
          <Button link={exploreLink}>
            <span className="mr-2 text-sm">Explore Event</span>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
