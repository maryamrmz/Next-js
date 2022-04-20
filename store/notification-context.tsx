import { createContext, useState, useEffect, FC } from 'react';

type Notification =
  | { title: string; message: string; status: string | 'success' | 'error' }
  | undefined
  | null;

interface NotificationContextType {
  notification: Notification;
  showNotification: (notificationData: any) => void;
  hideNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType>({
  notification: null, // { title, message, status }
  showNotification: (notificationData: Notification) => {},
  hideNotification: () => {},
});

export const NotificationContextProvider: FC = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState<Notification>();

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === 'success' ||
        activeNotification.status === 'error')
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  const showNotificationHandler = (notificationData: Notification) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
