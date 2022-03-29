import { render } from '@testing-library/react';
import HomePage from 'pages/index';

const dummy_data = [
  {
    id: 'es2',
    title: 'Networking for introverts',
    isFeatured: true,
  },
];

describe('HomePage', () => {
  it('should render the data', () => {
    const { getByText } = render(<HomePage />);

    const title = getByText(dummy_data[0].title);

    expect(title).toBeInTheDocument();
  });
});
