

## Intro

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Ant.Design
An enterprise-class UI design language for web applications.

### Features

- Modern browsers and Internet Explorer 9+ (with polyfills)
- Server-side Rendering
- Electron

### Install

```yarn add antd```

### Usage

```import { DatePicker } from 'antd'```


### Usage

```import { DatePicker, message } from 'antd'```
```import 'antd/dist/antd.css'```

### Using antd component:

```.babelrc {  "plugins": [    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]  ]} ```

This allows you to import components from antd without having to manually import 
the corresponding stylesheet. The antd babel plugin will automatically import stylesheets.

```import { DatePicker } from 'antd'```

>import js and css modularly, parsed by babel-plugin-import
### Manually import
```import DatePicker from 'antd/lib/date-picker';  // for js```
```import 'antd/lib/date-picker/style/css';        // for css```
```// import 'antd/lib/date-picker/style';         // that will import less```

### Github

This section has moved here: [ ant-design A UI Design Language and React UI library ](https://github.com/ant-design/ant-design)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
