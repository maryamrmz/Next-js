import { useContext, VFC } from 'react';

import NotificationContext from 'store/notification-context';

interface NotificationProps {
  title: string;
  message: string;
  status: string;
}

const Notification: VFC<NotificationProps> = ({ message, status, title }) => {
  const notificationCtx = useContext(NotificationContext);

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = 'bg-green-500';
  }

  if (status === 'error') {
    statusClasses = 'bg-red-500';
  }

  if (status === 'pending') {
    statusClasses = 'bg-yellow-500';
  }

  const activeClasses = `flex justify-between p-2 text-white ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
