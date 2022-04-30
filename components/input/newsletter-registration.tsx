import { FormEvent, useContext, useRef, VFC } from 'react';

import NotificationContext from 'store/notification-context';

const NewsletterRegistration: VFC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  const notificationCtx = useContext(NotificationContext);

  const registrationHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;

    notificationCtx.showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter.',
      status: 'pending',
    });

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || 'Something went wrong!');
        });
      })
      .then(() => {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Successfully registered for newsletter!',
          status: 'success',
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: 'Error!',
          message: error.message || 'Something went wrong!',
          status: 'error',
        });
      });
  };

  return (
    <section className="m-12 mx-auto w-11/12 max-w-xs">
      <h2 className="text-center font-bold">Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className="flex justify-center ">
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            className="px-4"
            ref={emailInputRef}
            data-testid="email"
          />
          <button
            className="flex items-center justify-between rounded-md bg-emerald-500 p-2 text-white"
            data-testid="register"
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
