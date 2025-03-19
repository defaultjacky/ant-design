import * as React from 'react';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import RcImage from '@rc-component/image';
import type { ImageProps as RcImageProps } from '@rc-component/image';
import classnames from 'classnames';

import useMergeSemantic from '../_util/hooks/useMergeSemantic';
import { devUseWarning } from '../_util/warning';
import { useComponentConfig } from '../config-provider/context';
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls';
import { useLocale } from '../locale';
import useMergedPreviewConfig from './hooks/useMergedPreviewConfig';
import usePreviewConfig from './hooks/usePreviewConfig';
import PreviewGroup, { icons } from './PreviewGroup';
import useStyle from './style';

type OriginPreviewConfig = NonNullable<Exclude<RcImageProps['preview'], boolean>>;

export type DeprecatedPreviewConfig = {
  /** @deprecated Use `open` instead */
  visible?: boolean;
  /** @deprecated Use `classNames.root` instead */
  rootClassName?: string;
  /**
   * @deprecated This has been removed.
   * Preview will always be rendered after show.
   */
  forceRender?: boolean;
  /**
   * @deprecated This has been removed.
   * Preview will always be rendered after show.
   */
  destroyOnClose?: boolean;
  /** @deprecated Use `actionsRender` instead */
  toolbarRender?: OriginPreviewConfig['actionsRender'];
};

export type PreviewConfig = OriginPreviewConfig &
  DeprecatedPreviewConfig & {
    /** @deprecated Use `onOpenChange` instead */
    onVisibleChange?: (visible: boolean, prevVisible: boolean) => void;
    /** @deprecated Use `classNames.cover` instead */
    maskClassName?: string;
    /** @deprecated Use `cover` instead */
    mask?: React.ReactNode;
  };

export interface CompositionImage<P> extends React.FC<P> {
  PreviewGroup: typeof PreviewGroup;
}

export interface ImageProps extends Omit<RcImageProps, 'preview'> {
  preview?: boolean | PreviewConfig;
  /** @deprecated Use `styles.root` instead */
  wrapperStyle?: React.CSSProperties;
}

const Image: CompositionImage<ImageProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    preview,
    className,
    rootClassName,
    style,
    styles,
    classNames: imageClassNames,
    wrapperStyle,
    ...otherProps
  } = props;

  // =============================== MISC ===============================
  // Context
  const {
    getPrefixCls,
    getPopupContainer: getContextPopupContainer,
    className: contextClassName,
    style: contextStyle,
    preview: contextPreview,
    styles: contextStyles,
    classNames: contextClassNames,
  } = useComponentConfig('image');

  // ============================== Locale ==============================
  const [imageLocale] = useLocale('Image');

  const prefixCls = getPrefixCls('image', customizePrefixCls);

  // ============================= Warning ==============================
  if (process.env.NODE_ENV !== 'production') {
    const warning = devUseWarning('Image');
    warning.deprecated(!wrapperStyle, 'wrapperStyle', 'styles.root');
  }

  // ============================== Styles ==============================
  const rootCls = useCSSVarCls(prefixCls);
  const [hashId, cssVarCls] = useStyle(prefixCls, rootCls);

  const [mergedClassNames, mergedStyles] = useMergeSemantic(
    [contextClassNames, imageClassNames],
    [
      contextStyles,
      {
        root: wrapperStyle,
      },
      styles,
    ],
  );

  const mergedRootClassName = classnames(rootClassName, hashId, cssVarCls, rootCls);

  const mergedClassName = classnames(className, hashId, contextClassName);

  // ============================= Preview ==============================
  const previewConfig = usePreviewConfig(preview);
  const contextPreviewConfig = usePreviewConfig(contextPreview);

  // Preview semantic
  const [mergedPreviewClassNames, mergedPreviewStyles] = useMergeSemantic(
    [contextPreviewConfig?.classNames, previewConfig?.classNames],
    [contextPreviewConfig?.styles, previewConfig?.styles],
  );

  const mergedPreviewConfig = useMergedPreviewConfig(
    // Preview config
    previewConfig,
    contextPreviewConfig,

    // MISC
    prefixCls,
    mergedRootClassName,
    mergedPreviewClassNames,
    mergedPreviewStyles,
    getContextPopupContainer,
    icons,

    // Image only: fallback cover
    <div className={`${prefixCls}-cover-info`}>
      <EyeOutlined />
      {imageLocale?.preview}
    </div>,
  );

  const mergedStyle: React.CSSProperties = { ...contextStyle, ...style };

  return (
    <RcImage
      prefixCls={prefixCls}
      preview={mergedPreviewConfig || false}
      rootClassName={mergedRootClassName}
      className={mergedClassName}
      style={mergedStyle}
      classNames={mergedClassNames}
      styles={mergedStyles}
      {...otherProps}
    />
  );
};

export type { PreviewConfig as ImagePreviewType };

Image.PreviewGroup = PreviewGroup;

if (process.env.NODE_ENV !== 'production') {
  Image.displayName = 'Image';
}

export default Image;
