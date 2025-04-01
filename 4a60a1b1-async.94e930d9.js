(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["4a60a1b1"],{"4a60a1b1":function(e,a,n){"use strict";n.d(a,"__esModule",{value:!0}),n.d(a,"texts",{enumerable:!0,get:function(){return t;}}),n("f0b0f05a");let t=[{value:"Ant Design \u9ED8\u8BA4\u4F7F\u7528 ",paraId:0},{value:"Day.js",paraId:0},{value:" \u6765\u5904\u7406\u65F6\u95F4\u65E5\u671F\u95EE\u9898\u3002Day.js \u76F8\u6BD4\u4E8E moment \u4F7F\u7528\u4E86\u4E0D\u53EF\u53D8\u6570\u636E\u7ED3\u6784\uFF0C\u6027\u80FD\u66F4\u5FEB\uFF0C\u4F53\u79EF\u4EC5 2KB\uFF0CAPI \u8BBE\u8BA1\u5B8C\u5168\u4E00\u81F4\u3002\u4F60\u53EF\u4EE5\u5F88\u65B9\u4FBF\u7684\u6539\u7528\u5176\u4ED6\u81EA\u5B9A\u4E49\u65E5\u671F\u5E93\u5982\uFF08",paraId:0},{value:"moment",paraId:0},{value:"\u3001",paraId:0},{value:"date-fns",paraId:0},{value:"\u3001",paraId:0},{value:"luxon",paraId:0},{value:"\uFF09\u3002\u5728\u8FD9\u91CC\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E24\u79CD\u65B9\u5F0F\u6765\u5B9E\u73B0\u66FF\u6362:",paraId:0},{value:"\u7B2C\u4E00\u79CD\u65B9\u6CD5\u662F\u4F7F\u7528 ",paraId:1,tocIndex:0},{value:"generatePicker",paraId:1,tocIndex:0},{value:"\uFF08\u6216 ",paraId:1,tocIndex:0},{value:"generateCalendar",paraId:1,tocIndex:0},{value:"\uFF09\u8F85\u52A9\u521B\u5EFA Picker \u7EC4\u4EF6\u3002",paraId:1,tocIndex:0},{value:"\u6211\u4EEC\u5148\u521D\u59CB\u5316\u4E00\u4E2A antd demo\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003 ",paraId:2,tocIndex:0},{value:"\u811A\u624B\u67B6\u6307\u5357",paraId:2,tocIndex:0},{value:" \u8FDB\u884C\u6784\u5EFA\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4ECE\u8FD9\u91CC\u5F00\u59CB",paraId:2,tocIndex:0},{value:"init antd",paraId:2,tocIndex:0},{value:"\u65B0\u5EFA ",paraId:3,tocIndex:1},{value:"src/components/DatePicker.tsx",paraId:3,tocIndex:1},{value:"\u3002",paraId:3,tocIndex:1},{value:"\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:",paraId:4,tocIndex:1},{value:"import { DatePicker } from 'antd';\nimport type { Moment } from 'moment';\nimport momentGenerateConfig from 'rc-picker/lib/generate/moment';\n\nconst MyDatePicker = DatePicker.generatePicker<Moment>(momentGenerateConfig);\n\nexport default MyDatePicker;\n",paraId:5,tocIndex:1},{value:"\u65B0\u5EFA ",paraId:6,tocIndex:2},{value:"src/components/TimePicker.tsx",paraId:6,tocIndex:2},{value:"\u3002",paraId:6,tocIndex:2},{value:"\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:",paraId:7,tocIndex:2},{value:"import * as React from 'react';\nimport type { PickerTimeProps } from 'antd/es/date-picker/generatePicker';\nimport type { Moment } from 'moment';\n\nimport DatePicker from './DatePicker';\n\nexport interface TimePickerProps extends Omit<PickerTimeProps<Moment>, 'picker'> {}\n\nconst TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => (\n  <DatePicker {...props} picker=\"time\" mode={undefined} ref={ref} />\n));\n\nTimePicker.displayName = 'TimePicker';\n\nexport default TimePicker;\n",paraId:8,tocIndex:2},{value:"\u65B0\u5EFA ",paraId:9,tocIndex:3},{value:"src/components/Calendar.tsx",paraId:9,tocIndex:3},{value:"\u3002",paraId:9,tocIndex:3},{value:"\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:",paraId:10,tocIndex:3},{value:"import { Calendar } from 'antd';\nimport type { Moment } from 'moment';\nimport momentGenerateConfig from 'rc-picker/es/generate/moment';\n\nconst MyCalendar = Calendar.generateCalendar<Moment>(momentGenerateConfig);\n\nexport default MyCalendar;\n",paraId:11,tocIndex:3},{value:"\u65B0\u5EFA ",paraId:12,tocIndex:4},{value:"src/components/index.tsx",paraId:12,tocIndex:4},{value:"\u3002",paraId:12,tocIndex:4},{value:"\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:",paraId:13,tocIndex:4},{value:"export { default as Calendar } from './Calendar';\nexport { default as DatePicker } from './DatePicker';\nexport { default as TimePicker } from './TimePicker';\n",paraId:14,tocIndex:4},{value:"\u4FEE\u6539 ",paraId:15,tocIndex:5},{value:"src/App.tsx",paraId:15,tocIndex:5},{value:"\uFF0C\u5F15\u5165 ",paraId:15,tocIndex:5},{value:"moment",paraId:15,tocIndex:5},{value:" \u548C\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6\u3002",paraId:15,tocIndex:5},{value:"- import { DatePicker, Calendar } from 'antd';\n- import format from 'dayjs';\n\n+ import { DatePicker, TimePicker, Calendar } from './components';\n+ import format from 'moment';\n",paraId:16,tocIndex:5},{value:"\u6211\u4EEC\u8FD8\u63D0\u4F9B\u53E6\u4E00\u79CD\u5B9E\u73B0\u65B9\u5F0F\u3002\u4F7F\u7528 ",paraId:17,tocIndex:6},{value:"@ant-design/moment-webpack-plugin",paraId:17,tocIndex:6},{value:" \u63D2\u4EF6\uFF0C\u65E0\u9700\u5BF9\u73B0\u6709\u4EE3\u7801\u505A\u4EFB\u4F55\u4FEE\u6539\u76F4\u63A5\u66FF\u6362\u6210 ",paraId:17,tocIndex:6},{value:"Moment.js",paraId:17,tocIndex:6},{value:"\u3002\u8BF7\u53C2\u8003 ",paraId:17,tocIndex:6},{value:"@ant-design/moment-webpack-plugin",paraId:17,tocIndex:6},{value:"\u3002",paraId:17,tocIndex:6},{value:"// webpack-config.js\nconst AntdMomentWebpackPlugin = require('@ant-design/moment-webpack-plugin');\n\nmodule.exports = {\n  // ...\n  plugins: [new AntdMomentWebpackPlugin()],\n};\n",paraId:18,tocIndex:6},{value:"date-fns",paraId:19,tocIndex:7},{value:" \u76EE\u524D\u652F\u6301\u548C dayjs \u7C7B\u4F3C\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65B9\u6CD5\uFF0C\u533A\u522B\u5728\u4E8E\u4F7F\u7528\u7684\u53C2\u6570\u7C7B\u578B\u4E0D\u540C\uFF0C\u5728 antd 4.5.0 \u4EE5\u4E0A\u7248\u672C\u63D0\u4F9B\u652F\u6301\u3002",paraId:19,tocIndex:7},{value:"\u505A\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A",paraId:20,tocIndex:7},{value:"\u65B0\u5EFA ",paraId:21,tocIndex:8},{value:"src/components/DatePicker.tsx",paraId:21,tocIndex:8},{value:"\u3002",paraId:21,tocIndex:8},{value:"\u7F16\u5199\u5982\u4E0B\u4EE3\u7801:",paraId:22,tocIndex:8},{value:"import { DatePicker } from 'antd';\nimport dateFnsGenerateConfig from 'rc-picker/es/generate/dateFns';\n\nconst MyDatePicker = DatePicker.generatePicker<Date>(dateFnsGenerateConfig);\n\nexport default MyDatePicker;\n",paraId:23,tocIndex:8},{value:"\u81EA ",paraId:24,tocIndex:9},{value:"antd 5.4.0",paraId:24,tocIndex:9},{value:" \u8D77\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",paraId:24,tocIndex:9},{value:"luxon",paraId:24,tocIndex:9},{value:" \u4EE3\u66FF dayjs \u5E76\u652F\u6301\u540C\u6837\u7684\u529F\u80FD\uFF0C\u4F46\u5B83\u4E0E dayjs \u6709\u4E00\u4E9B\u5DEE\u5F02\uFF0C\u6211\u4EEC\u5C06\u5728\u4E0B\u9762\u89E3\u91CA\uFF1A",paraId:24,tocIndex:9},{value:"\u521B\u5EFA\u4E00\u4E2A ",paraId:25,tocIndex:10},{value:"DatePicker.tsx",paraId:25,tocIndex:10},{value:" \u6587\u4EF6\uFF0C\u5E76\u5B9A\u4E49\u4E00\u4E2A\u57FA\u4E8E luxon \u7684 DatePicker \u7EC4\u4EF6\uFF1A",paraId:25,tocIndex:10},{value:"import { DatePicker } from 'antd';\nimport type { DateTime } from 'luxon';\nimport luxonGenerateConfig from 'rc-picker/lib/generate/luxon';\n\nconst MyDatePicker = DatePicker.generatePicker<DateTime>(luxonGenerateConfig);\n\nexport default MyDatePicker;\n",paraId:26,tocIndex:10},{value:"luxon \u7528\u6237\u5E94\u8BE5\u6089\u77E5\uFF0C\u5B83\u672C\u8EAB\u6CA1\u6709 local \u7684\u5B9E\u73B0\u3002\u76F8\u53CD\uFF0C\u5B83\u4F9D\u8D56\u4E8E\u539F\u751F\u6D4F\u89C8\u5668\u7684 ",paraId:27,tocIndex:11},{value:"Intl",paraId:27,tocIndex:11},{value:"\u3002",paraId:27,tocIndex:11},{value:"\u8FD9\u5BFC\u81F4\u4E86\u4E0E\u5176\u4ED6\u65E5\u671F\u5E93\u7684\u4E00\u4E9B\u5DEE\u5F02\uFF0C\u4E3B\u8981\u533A\u522B\u662F\uFF1A",paraId:28,tocIndex:11},{value:"\u65E0\u8BBA\u8BED\u8A00\u73AF\u5883\u5982\u4F55\uFF0C\u4E00\u5468\u7684\u7B2C\u4E00\u5929\u603B\u662F\u661F\u671F\u4E00\u3002",paraId:29,tocIndex:11},{value:"\u4E00\u5E74\u4E2D\u7684\u5468\u6570\u6709\u65F6\u4E0D\u540C\uFF08ISO \u5468\u89C4\u5219\u7528\u4E8E\u786E\u5B9A\u5B83\uFF09\u3002",paraId:29,tocIndex:11},{value:"\u77ED\u5DE5\u4F5C\u65E5\u683C\u5F0F\u6709\u65F6\u4F1A\u56E0\u81EA\u5B9A\u4E49\u533A\u57DF\u800C\u5F02\uFF08\u53EF\u80FD\u6709 3 \u4E2A\u5B57\u7B26\u800C\u4E0D\u662F 2 \u4E2A\uFF09\u3002",paraId:29,tocIndex:11},{value:"\u9009\u5B9A\u7684\u5468\u6807\u7B7E\u683C\u5F0F\u4F1A\u7565\u6709\u4E0D\u540C\uFF08\u4F8B\u5982\u201C2021-01\u201D\u800C\u4E0D\u662F\u201C2021-1st\u201D\uFF09\u3002",paraId:29,tocIndex:11},{value:"\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574 luxon \u914D\u7F6E\u6765\u81EA\u5B9A\u4E49\u8FD9\u4E9B\u9ED8\u8BA4\u7684 luxon \u884C\u4E3A\uFF1A",paraId:30,tocIndex:11},{value:"import { DatePicker } from 'antd';\nimport type { DateTime } from 'luxon';\nimport luxonGenerateConfig from 'rc-picker/lib/generate/luxon';\n\nconst customLuxonConfig = {\n  ...luxonGenerateConfig,\n  getWeekFirstDay(locale) {\n    // \u5728\u8FD9\u91CC\u7F16\u5199\u4F60\u7684\u81EA\u5B9A\u4E49\u5B9E\u73B0\n  },\n};\n\nconst MyDatePicker = DatePicker.generatePicker<DateTime>(customLuxonConfig);\n\nexport default MyDatePicker;\n",paraId:31,tocIndex:11},{value:"\u8BF7\u6CE8\u610F\uFF0C\u901A\u8FC7\u8FDB\u884C\u6B64\u7C7B\u81EA\u5B9A\u4E49\uFF0C\u751F\u6210\u7684 DatePicker \u884C\u4E3A\u53EF\u80FD\u4F1A\u4EE5\u610F\u60F3\u4E0D\u5230\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316\uFF0C\u56E0\u6B64\u8BF7\u786E\u4FDD\u4F60\u6D4B\u8BD5\u8FC7\u4E00\u4E9B\u8FB9\u754C\u60C5\u51B5\u3002",paraId:32,tocIndex:11}];}}]);