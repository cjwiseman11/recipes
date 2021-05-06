import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Ingredient from './index';

describe('<Ingredient />', () => {
  test('Ingredient is rendered with a span by default', async () => {
    const { container } = render(<Ingredient ingredient="A tasty pie" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test('When a Component is passed, ingredient is rendered with Component', async () => {
    const component = render(<Ingredient ingredient="A tasty pie" Component="li" />);

    expect(component.getByRole('listitem')).toHaveTextContent('A tasty pie');
  });

  test('When info is passed, info text is shown', async () => {
    const component = render(
      <Ingredient ingredient="A tasty pie" Component="li" info="This has some info!" />
    );

    expect(component.getByRole('listitem')).toHaveTextContent('This has some info!');
  });
});
