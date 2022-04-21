import { FC, ComponentType } from 'react';

interface LogisticsItemProps {
  icon: ComponentType;
}

const LogisticsItem: FC<LogisticsItemProps> = ({ icon: Icon, children }) => {
  return (
    <li className="flex items-center text-center">
      <span className="mr-4">
        <Icon />
      </span>
      <span>{children}</span>
    </li>
  );
};

export default LogisticsItem;
