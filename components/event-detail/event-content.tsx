import { FC } from 'react';

const EventContent: FC = ({ children }) => {
  return <div className="absolute bottom-36 text-lg">{children}</div>;
};

export default EventContent;
