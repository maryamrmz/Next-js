import { FaCalendarMinus, FaMapMarkerAlt } from 'react-icons/fa';
import { VFC } from 'react';

interface EventLogisticsProps {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

const EventLogistics: VFC<EventLogisticsProps> = ({
  date,
  address,
  image,
  imageAlt,
}) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = address.replace(', ', '\n');

  return (
    <section className="absolute top-48 flex w-1/2 items-center justify-center rounded-md bg-slate-800 p-10 text-white">
      <img
        src={`/${image}`}
        alt={imageAlt}
        className="mr-10 h-64 w-64 items-center rounded-full border-4 border-white object-cover"
      />
      <div>
        <div className="my-5">
          <div className="mb-2">
            <FaCalendarMinus />
          </div>
          <time>{humanReadableDate}</time>
        </div>
        <div className="my-5">
          <div className="mb-2">
            <FaMapMarkerAlt />
          </div>
          <address>{formattedAddress}</address>
        </div>
      </div>
    </section>
  );
};

export default EventLogistics;
