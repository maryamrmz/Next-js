import { VFC } from 'react';
import { FaCalendarMinus, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

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
      <div className="mr-10 flex items-center justify-center rounded-full border-4 border-white">
        <Image
          src={`/${image}`}
          alt={imageAlt}
          width={300}
          height={300}
          className="rounded-full object-cover"
        />
      </div>
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
