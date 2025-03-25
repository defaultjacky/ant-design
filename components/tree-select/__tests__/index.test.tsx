import React from 'react';
import { SmileOutlined } from '@ant-design/icons';

import TreeSelect, { TreeNode } from '..';
import { resetWarned } from '../../_util/warning';
import focusTest from '../../../tests/shared/focusTest';
import mountTest from '../../../tests/shared/mountTest';
import rtlTest from '../../../tests/shared/rtlTest';
import { render } from '../../../tests/utils';

describe('TreeSelect', () => {
  focusTest(TreeSelect, { refFocus: true });
  mountTest(TreeSelect);
  rtlTest(TreeSelect);

  describe('TreeSelect Custom Icons', () => {
    it('should support customized icons', () => {
      const { container } = render(
        <TreeSelect
          showSearch
          clearIcon={<span>clear</span>}
          removeIcon={<span>remove</span>}
          value={['leaf1', 'leaf2']}
          placeholder="Please select"
          multiple
          allowClear
          treeDefaultExpandAll
        >
          <TreeNode value="parent 1" title="parent 1" key="0-1">
            <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
              <TreeNode value="leaf1" title="my leaf" key="random" />
              <TreeNode value="leaf2" title="your leaf" key="random1" />
            </TreeNode>
          </TreeNode>
        </TreeSelect>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });

    it('should `treeIcon` work', () => {
      const { container } = render(
        <TreeSelect treeIcon open>
          <TreeNode value="parent 1" title="parent 1" icon={<span className="bamboo" />} />
        </TreeSelect>,
      );

      expect(container.querySelector('.ant-select-tree-treenode .bamboo')).toBeTruthy();
    });
  });

  it('should support notFoundContent', () => {
    const content = 'notFoundContent';
    const { container } = render(<TreeSelect treeIcon open notFoundContent={content} />);
    expect(container.querySelector('.ant-select-empty')?.innerHTML).toBe(content);
  });

  it('warning for legacy dropdownMatchSelectWidth', () => {
    resetWarned();

    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<TreeSelect dropdownMatchSelectWidth open />);
    expect(errSpy).toHaveBeenCalledWith(
      'Warning: [antd: TreeSelect] `dropdownMatchSelectWidth` is deprecated. Please use `popupMatchSelectWidth` instead.',
    );

    errSpy.mockRestore();
  });

  it('support aria-*', async () => {
    const { container } = render(
      <TreeSelect
        open
        treeData={[{ value: 'parent 1', title: 'parnet 1', 'aria-label': 'label' }]}
      />,
    );
    expect(
      container.querySelector('.ant-select-tree-treenode-leaf-last')?.getAttribute('aria-label'),
    ).toBe('label');
  });

  it('deprecate showArrow', () => {
    resetWarned();

    const errSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const { container } = render(<TreeSelect showArrow />);
    expect(errSpy).toHaveBeenCalledWith(
      'Warning: [antd: TreeSelect] `showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null.',
    );
    expect(container.querySelector('.ant-select-show-arrow')).toBeTruthy();

    errSpy.mockRestore();
  });
  it('support classNames and styles', () => {
    const treeData = [
      {
        value: 'parent 1',
        title: 'parent 1',
        children: [
          {
            value: 'parent 1-0',
            title: 'parent 1-0',
            children: [
              {
                value: 'leaf1',
                title: 'my leaf',
              },
              {
                value: 'leaf2',
                title: 'your leaf',
              },
            ],
          },
        ],
      },
    ];
    const customClassNames = {
      root: 'test-root',
      prefix: 'test-prefix',
      input: 'test-input',
      suffix: 'test-suffix',
      item: 'test-item',
      itemTitle: 'test-item-title',
      popup: 'test-popup',
    };
    const customStyles = {
      root: { backgroundColor: 'red' },
      prefix: { color: 'green' },
      input: { color: 'blue' },
      suffix: { color: 'yellow' },
      item: { color: 'black' },
      itemTitle: { color: 'purple' },
      popup: { color: 'orange' },
    };
    const { container } = render(
      <TreeSelect
        classNames={customClassNames}
        styles={customStyles}
        showSearch
        prefix="Prefix"
        open
        suffixIcon={<SmileOutlined />}
        placeholder="Please select"
        treeDefaultExpandAll
        treeData={treeData}
      />,
    );
    const prefix = container.querySelector('.ant-select-prefix');
    const input = container.querySelector('.ant-select-selection-search-input');
    const suffix = container.querySelector('.ant-select-arrow');
    const popup = container.querySelector('.ant-tree-select-dropdown');
    const itemTitle = container.querySelector('.ant-select-tree-title');
    const root = container.querySelector('.ant-tree-select-dropdown');
    const selectRoot = container.querySelector('.ant-tree-select');

    const item = container.querySelector(`.${customClassNames.item}`);
    expect(prefix).toHaveClass(customClassNames.prefix);
    expect(input).toHaveClass(customClassNames.input);
    expect(suffix).toHaveClass(customClassNames.suffix);
    expect(popup).toHaveClass(customClassNames.popup);
    expect(itemTitle).toHaveClass(customClassNames.itemTitle);
    expect(root).toHaveClass(customClassNames.root);
    expect(selectRoot).toHaveClass(customClassNames.root);

    expect(prefix).toHaveStyle(customStyles.prefix);
    expect(input).toHaveStyle(customStyles.input);
    expect(suffix).toHaveStyle(customStyles.suffix);
    expect(popup).toHaveStyle(customStyles.popup);
    expect(itemTitle).toHaveStyle(customStyles.itemTitle);
    expect(root).toHaveStyle(customStyles.root);
    expect(selectRoot).toHaveStyle(customStyles.root);
    expect(item).toHaveStyle(customStyles.item);
  });
});
