import { VFC } from 'react';

interface EventSummaryProps {
  title: string;
}

const EventSummary: VFC<EventSummaryProps> = ({ title }) => {
  return (
    <h2 className="h-[30vh] w-full bg-emerald-500 pt-12 text-center text-4xl font-medium text-white md:text-6xl">
      {title}
    </h2>
  );
};

export default EventSummary;
