import React from 'react';
import userEvent from '@testing-library/user-event';

import AutoComplete from '..';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { render, screen } from '../../../tests/utils';
import Input from '../../input';

describe('AutoComplete', () => {
  mountTest(AutoComplete);
  rtlTest(AutoComplete);

  it('AutoComplete with custom Input render perfectly', async () => {
    render(
      <AutoComplete dataSource={['12345', '23456', '34567']}>
        <textarea />
      </AutoComplete>,
    );

    expect(screen.getByRole('combobox')).toBeInTheDocument();

    // should show options when type in input
    await userEvent.type(screen.getByRole('combobox'), '123');

    // should not filter data source by default
    expect(screen.getByTitle('12345')).toBeInTheDocument();
    expect(screen.getByTitle('23456')).toBeInTheDocument();
    expect(screen.getByTitle('34567')).toBeInTheDocument();
  });

  it('AutoComplete should work when dataSource is object array', async () => {
    render(
      <AutoComplete
        dataSource={[
          { text: 'text', value: 'value' },
          { text: 'abc', value: 'xxx' },
        ]}
      >
        <input />
      </AutoComplete>,
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    await userEvent.type(screen.getByRole('combobox'), 'a');

    // should not filter data source by default
    expect(screen.getByTitle('text')).toBeInTheDocument();
    expect(screen.getByTitle('abc')).toBeInTheDocument();
  });

  it('AutoComplete throws error when contains invalid dataSource', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(
      // @ts-ignore
      <AutoComplete dataSource={[() => {}]}>
        <textarea />
      </AutoComplete>,
    );

    expect(spy).toHaveBeenCalled();
  });

  it('legacy dataSource should accept react element option', () => {
    render(<AutoComplete open dataSource={[<span key="key">ReactNode</span>]} />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByTitle(/reactnode/i)).toBeInTheDocument();
  });

  it('legacy AutoComplete.Option should be compatible', async () => {
    render(
      <AutoComplete>
        <AutoComplete.Option value="111">111</AutoComplete.Option>
        <AutoComplete.Option value="222">222</AutoComplete.Option>
      </AutoComplete>,
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    await userEvent.type(screen.getByRole('combobox'), '1');
    expect(screen.getByTitle(/111/)).toBeInTheDocument();
    expect(screen.getByTitle(/222/)).toBeInTheDocument();
  });

  it('should not warning when getInputElement is null', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    render(<AutoComplete placeholder="input here" allowClear />);
    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it('should not override custom input className', () => {
    render(
      <AutoComplete>
        <Input className="custom" />
      </AutoComplete>,
    );
    expect(screen.getByRole('combobox')).toHaveClass('custom');
  });

  it('should support classNames and styles', () => {
    const customClassNames = {
      root: 'custom-root',
      input: 'custom-input',
      list: 'custom-list',
      listItem: 'custom-list-item',
      popup: 'custom-popup',
    };
    const customStyles = {
      root: { color: 'red' },
      input: { color: 'green' },
      list: { color: 'blue' },
      listItem: { color: 'yellow' },
      popup: { color: 'purple' },
    };
    const { container } = render(
      <AutoComplete
        options={[{ label: '123', value: '123' }]}
        classNames={customClassNames}
        styles={customStyles}
        open
      />,
    );

    const root = container.querySelector('.ant-select-auto-complete');
    const input = container.querySelector('.ant-select-selection-search-input');
    const list = container.querySelector('.rc-virtual-list');
    const listItem = container.querySelector('.ant-select-item-option');
    const popup = container.querySelector('.ant-select-dropdown');

    expect(root).toHaveClass(customClassNames.root);
    expect(input).toHaveClass(customClassNames.input);
    expect(list).toHaveClass(customClassNames.list);
    expect(listItem).toHaveClass(customClassNames.listItem);
    expect(popup).toHaveClass(customClassNames.popup);

    expect(root).toHaveStyle(customStyles.root);
    expect(input).toHaveStyle(customStyles.input);
    expect(list).toHaveStyle(customStyles.list);
    expect(listItem).toHaveStyle(customStyles.listItem);
    expect(popup).toHaveStyle(customStyles.popup);
  });
});
