import React from 'react';
import { Popconfirm } from 'antd';
import type { PopconfirmProps } from 'antd';

import SemanticPreview from '../../../.dumi/components/SemanticPreview';
import useLocale from '../../../.dumi/hooks/useLocale';

const locales = {
  cn: {
    root: '根元素 (包含箭头、内容元素)',
    body: '内容元素',
  },
  en: {
    root: 'Root element (including arrows, content elements)',
    body: 'Body element',
  },
};

const BlockList: React.FC<React.PropsWithChildren<PopconfirmProps>> = (props) => {
  const { children, ...rest } = props;
  const divRef = React.useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef} style={{ position: 'absolute', marginTop: 60 }}>
      <Popconfirm
        open
        placement="top"
        autoAdjustOverflow={false}
        getPopupContainer={() => divRef.current!}
        {...rest}
      >
        {children}
      </Popconfirm>
    </div>
  );
};

const App: React.FC = () => {
  const [locale] = useLocale(locales);
  return (
    <SemanticPreview
      componentName="Popconfirm"
      semantics={[
        { name: 'root', desc: locale.root, version: '5.23.0' },
        { name: 'body', desc: locale.body, version: '5.23.0' },
      ]}
    >
      <BlockList title="popconfirm prompt text" />
    </SemanticPreview>
  );
};

export default App;
