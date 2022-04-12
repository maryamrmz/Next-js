import type { NextPage } from 'next';
import Head from 'next/head';

import { getFeaturedEvents } from 'dummy-data';
import EventList from 'components/events/event-list';
import NewsletterRegistration from 'components/input/newsletter-registration';

const Home: NextPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </div>
  );
};

export default Home;
