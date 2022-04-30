import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NewsletterRegistration from './newsletter-registration';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  })
) as jest.Mock;

const getEmailInfoElements = () => ({
  email: screen.getByTestId('email'),
  register: screen.getByTestId('register'),
});

test('should fetch called', () => {
  render(<NewsletterRegistration />);

  const { email, register } = getEmailInfoElements();

  userEvent.type(email, 'dummy-email@gmail.com');
  userEvent.click(register);
  expect(fetch).toHaveBeenCalledTimes(1);
});
