import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

import Ingredient from './index';

describe('<Ingredient />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

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

  test('onMouseEnter and onMouseLeave triggers prop onHighlight function', () => {
    const onHighlight = jest.fn();
    const component = render(
      <Ingredient ingredient="A tasty pie" onHighlight={onHighlight} Component="li" />
    );
    fireEvent.mouseOver(component.getByRole('listitem'));
    expect(onHighlight).toHaveBeenNthCalledWith(1, 'A tasty pie');
    fireEvent.mouseLeave(component.getByRole('listitem'));
    expect(onHighlight).toHaveBeenNthCalledWith(2, null);
  });

  test('When component is highlighted, render with highlight class', () => {
    const component = render(
      <Ingredient ingredient="A tasty pie" Component="li" isHighlighted />
    );
    expect(component.getByRole('listitem')).toHaveClass('hover');
  });
});
