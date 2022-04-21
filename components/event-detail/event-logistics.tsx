import { VFC } from 'react';
import { FaCalendarMinus, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

import LogisticsItem from './components/logistics-item';

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
    <section className="-m-12 mx-auto flex w-4/5 max-w-[50rem] flex-col items-center justify-center gap-4 rounded-md bg-slate-800 p-10 text-white md:flex-row">
      <div className="mr-10 flex items-center justify-center rounded-full border-4 border-white">
        <Image
          src={`/${image}`}
          alt={imageAlt}
          width={300}
          height={300}
          className="rounded-full object-cover"
        />
      </div>
      <ul className="flex flex-[3] flex-col items-center justify-center gap-8 md:items-start">
        <LogisticsItem icon={FaCalendarMinus}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={FaMapMarkerAlt}>
          <address>{formattedAddress}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
