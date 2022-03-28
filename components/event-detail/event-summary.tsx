import React from 'react';

function EventSummary({ title }: { title: string }) {
  return (
    <h2 className="flex h-64 w-full justify-center bg-emerald-500 pt-12 text-6xl font-medium text-white">
      {title}
    </h2>
  );
}

export default EventSummary;
