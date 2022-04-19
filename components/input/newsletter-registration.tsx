import { FormEvent, useRef, VFC } from 'react';

const NewsletterRegistration: VFC = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  const registrationHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current?.value;

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  };

  return (
    <section className="m-auto">
      <h2 className="my-4 text-center font-bold">Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className="flex justify-center ">
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            className="px-4"
            ref={emailInputRef}
          />
          <button className="flex items-center justify-between rounded-md bg-emerald-500 p-2 text-white">
            Register
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
