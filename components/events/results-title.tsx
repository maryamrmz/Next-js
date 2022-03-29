import { VFC } from 'react';

import Button from 'components/ui/button';

interface ResultsTitleProps {
  date: Date;
}

const ResultsTitle: VFC<ResultsTitleProps> = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show All Events</Button>
    </section>
  );
};

export default ResultsTitle;
