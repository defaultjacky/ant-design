import * as React from 'react';
import type { BaseSelectRef } from '@rc-component/select';
import toArray from '@rc-component/util/lib/Children/toArray';
import omit from '@rc-component/util/lib/omit';
import classNames from 'classnames';

import type { InputStatus } from '../_util/statusUtils';
import { devUseWarning } from '../_util/warning';
import type { ConfigConsumerProps } from '../config-provider';
import { ConfigContext } from '../config-provider';
import type {
  BaseOptionType,
  DefaultOptionType,
  InternalSelectProps,
  RefSelectProps,
  SelectProps,
} from '../select';
import Select from '../select';

type SemanticName = 'root' | 'input' | 'popup' | 'list' | 'listItem';

const { Option } = Select;

export interface DataSourceItemObject {
  value: string;
  text: string;
}
export type DataSourceItemType = DataSourceItemObject | React.ReactNode;

export interface AutoCompleteProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends Omit<
    InternalSelectProps<ValueType, OptionType>,
    'loading' | 'mode' | 'optionLabelProp' | 'labelInValue'
  > {
  /** @deprecated Please use `options` instead */
  dataSource?: DataSourceItemType[];
  status?: InputStatus;
  /** @deprecated Please use `classNames.popup` instead */
  popupClassName?: string;
  /** @deprecated Please use `classNames.popup` instead */
  dropdownClassName?: string;
  /** @deprecated Please use `popupMatchSelectWidth` instead */
  dropdownMatchSelectWidth?: boolean | number;
  popupMatchSelectWidth?: boolean | number;
  classNames?: Partial<Record<SemanticName, string>>;
  styles?: Partial<Record<SemanticName, React.CSSProperties>>;
}

function isSelectOptionOrSelectOptGroup(child: any): boolean {
  return child?.type && (child.type.isSelectOption || child.type.isSelectOptGroup);
}

const AutoComplete: React.ForwardRefRenderFunction<RefSelectProps, AutoCompleteProps> = (
  props,
  ref,
) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    popupClassName,
    dropdownClassName,
    children,
    dataSource,
    rootClassName,
    styles,
    classNames: autoCompleteClassNames,
  } = props;
  const childNodes: React.ReactElement[] = toArray(children);

  // ============================= Input =============================
  let customizeInput: React.ReactElement | undefined;

  if (
    childNodes.length === 1 &&
    React.isValidElement(childNodes[0]) &&
    !isSelectOptionOrSelectOptGroup(childNodes[0])
  ) {
    [customizeInput] = childNodes;
  }

  const getInputElement = customizeInput ? (): React.ReactElement => customizeInput! : undefined;

  // ============================ Options ============================
  let optionChildren: React.ReactNode;

  // [Legacy] convert `children` or `dataSource` into option children
  if (childNodes.length && isSelectOptionOrSelectOptGroup(childNodes[0])) {
    optionChildren = children;
  } else {
    optionChildren = dataSource
      ? dataSource.map((item) => {
          if (React.isValidElement(item)) {
            return item;
          }
          switch (typeof item) {
            case 'string':
              return (
                <Option key={item} value={item}>
                  {item}
                </Option>
              );
            case 'object': {
              const { value: optionValue } = item as DataSourceItemObject;
              return (
                <Option key={optionValue} value={optionValue}>
                  {(item as DataSourceItemObject).text}
                </Option>
              );
            }
            default:
              return undefined;
          }
        })
      : [];
  }
  // ====================== Warning ======================
  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('AutoComplete');

    [
      ['dropdownClassName', 'classNames.popup'],
      ['popupClassName', 'classNames.popup'],
      ['dataSource', 'options'],
    ].forEach(([deprecatedName, newName]) => {
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });

    warning(
      !customizeInput || !('size' in props),
      'usage',
      'You need to control style self instead of setting `size` when using customize input.',
    );
  }

  const { getPrefixCls } = React.useContext<ConfigConsumerProps>(ConfigContext);

  const prefixCls = getPrefixCls('select', customizePrefixCls);

  const mergedClassNames = {
    root: classNames(
      `${prefixCls}-auto-complete`,
      className,
      rootClassName,
      autoCompleteClassNames?.root,
    ),
    popup: classNames(popupClassName, dropdownClassName, autoCompleteClassNames?.popup),
    list: autoCompleteClassNames?.list,
    listItem: autoCompleteClassNames?.listItem,
    input: autoCompleteClassNames?.input,
  };

  const mergedStyles = {
    root: { ...styles?.root, ...style },
    popup: { ...styles?.popup },
    list: styles?.list,
    listItem: styles?.listItem,
    input: styles?.input,
  };

  return (
    <Select
      ref={ref}
      suffixIcon={null}
      {...omit(props, ['dataSource', 'dropdownClassName', 'popupClassName'])}
      prefixCls={prefixCls}
      classNames={mergedClassNames}
      styles={mergedStyles}
      mode={Select.SECRET_COMBOBOX_MODE_DO_NOT_USE as SelectProps['mode']}
      {...{
        // Internal api
        getInputElement,
      }}
    >
      {optionChildren}
    </Select>
  );
};

const RefAutoComplete = React.forwardRef<RefSelectProps, AutoCompleteProps>(
  AutoComplete,
) as unknown as (<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
>(
  props: React.PropsWithChildren<AutoCompleteProps<ValueType, OptionType>> &
    React.RefAttributes<BaseSelectRef>,
) => React.ReactElement) & {
  displayName?: string;
};

if (process.env.NODE_ENV !== 'production') {
  RefAutoComplete.displayName = 'AutoComplete';
}

export default RefAutoComplete;
