# Rendition

[![npm version](https://badge.fury.io/js/rendition.svg)](http://badge.fury.io/js/rendition)
[![Dependency Status](https://img.shields.io/david/balena-io-modules/rendition.svg)](https://david-dm.org/balena-io-modules/rendition)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

A library of UI components, built using [React][react], [recompose][recompose], [styled-components][styled-components] and [styled-system][styled-system].

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Components](#components)
* [Development](#development)
* [Testing](#testing)
* [Upgrading](#testing)

## Installation

```
npm install --save rendition
```

## Usage

Wrap your application in the `Provider` component and start using components!

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Box, Provider } from 'rendition';

ReactDOM.render(
  <Provider>
    <Box my={3} mx={['auto', 15]}>
      <Button primary emphasized>Click me</Button>
    </Box>
  </Provider>,
  document.getElementById('root')
);
```

## Components

For an interactive demo of all components, see https://balena-io-modules.github.io/rendition

- [Accordion](#accordion)
- [Alert](#alert)
- [ArcSlider](#arcslider)
- [Avatar](#avatar)
- [Badge](#badge)
- [Banner](#banner)
- [Box](#box)
- [Button](#button)
- [ButtonGroup](#buttongroup)
- [Card](#card)
- [Checkbox](#checkbox)
- [Container](#container)
- [Copy](#copy)
- [DataGrid](#datagrid)
- [Divider](#divider)
- [DropDownButton](#dropdownbutton)
- [Filters](#filters)
- [Fixed](#fixed)
- [Flex](#flex)
- [Form](#form)
- [Heading](#heading)
- [HighlightedName](#highlightedname)
- [Img](#img)
- [Input](#input)
- [Link](#link)
- [List](#list)
- [Map](#map)
- [Modal](#modal)
- [Navbar](#navbar)
- [Notifications](#notifications)
- [Pager](#pager)
- [Popover](#popover)
- [ProgressBar](#progressbar)
- [RadioButton](#radiobutton)
- [RadioButtonGroup](#radiobuttongroup)
- [Search](#search)
- [Select](#select)
- [Spinner](#spinner)
- [Steps](#steps)
- [Table](#table)
- [Tabs](#tabs)
- [Tag](#tag)
- [Terminal](#terminal)
- [Textarea](#textarea)
- [TextWithCopy](#textwithcopy)
- [Tooltips](#tooltips)
- [Txt](#txt)
- [JsonSchemaRenderer](#jsonschemarenderer)
- [Markdown](#markdown)
- [MarkdownEditor](#markdowneditor)
- [Mermaid](#mermaid)

### Accordion

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Accordion/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| ------ | ------ | --------- | ---------- | ------------- |
| `items`     | `[{label: string \| node; panel: string \| node }]` | - | true | renders label as title and panel as body of accordion     |

### Alert

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Alert/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| ------ | ------ | --------- | ---------- | ------------- |
| `primary`     | `boolean` | - | - | If true, use the `primary` theme color     |
| `secondary`   | `boolean` | - | - | If true, use the `secondary` theme color   |
| `tertiary`    | `boolean` | - | - | If true, use the `tertiary` theme color    |
| `quarternary` | `boolean` | - | - | If true, use the `quarternary` theme color |
| `danger`      | `boolean` | - | - | If true, use the `danger` theme color      |
| `warning`     | `boolean` | - | - | If true, use the `warning` theme color     |
| `success`     | `boolean` | - | - | If true, use the `success` theme color     |
| `info`        | `boolean` | - | - | If true, use the `info` theme color        |
| `emphasized`  | `boolean` | - | - | If true, use the use bolder colors and a larger size |
| `plaintext` | `boolean` | - | - | If true, the alert will be rendered without a border or a background |
| `prefix` | <code>JSX.Element &#124; string &#124; false</code> | - | - | Set a prefix on the alert message, if this prop is set to false, the default prefix will not be shown |
| `onDismiss` | `() => void` | - | - | A function that is called when dismissing an alert

### ArcSlider

A slider input that is displayed as an arc. This component will scale in size to
fit it's container. A label can be added by placing a child element inside this
component.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/ArcSlider/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                                   |
| --------------|-----------|-----------|------------|-------------------------------------------------------------- |
| `onValueChange`    | `(value: number) => void` | - | - | A function that is called when the slider value changes, this will always be a value between 0 and 1 |
| `value`       | `number`  | -         | -          | A number between 0 and 1 that represents the progress         |
| `fillColor`   | `string`  | -         | -          | A CSS color string to use for the color of the "filled" part of the arc |
| `background`  | `string`  | -         | -          | A CSS color string to use for the color of the arc track      |

#### Inheritance

The properties of the [`Box`](#box) component are also available.
### Avatar

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Avatar/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| ------ | ------ | --------- | ---------- | ------------- |
| `firstName`| `string`| - | - | If defined only the first letter will be taken and shown |
| `lastName`| `string`| - | - | If defined only the first letter will be taken and shown |
| `src`  | `string`| - | - |  URL or base64 encoded image to be displayed in the avatar |
| `emphasized`  | `boolean` | false | - | If true, uses a larger size avatar |


### Badge

Badges should be used to present data that is not generated by the user (otherwise, tags should be used).
The badge can use any of the pre-defined shades, from which the background and text color are generated.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Badge/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| ------ | ------ | --------- | ---------- | ------------- |
| `shade`        | `number` | - | - | The index for one of the pre-determined shades for the badge |
| `children`  | `string` | - | ✓ | The text to display inside the badge |

### Banner

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Banner/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| ------ | ------ | --------- | ---------- | ------------- |
| `backgroundImage`| `string`| - | - | The path to an image that should be displayed in the background |
| `minHeight`| `string`| - | - | The minimum height of the `Banner`, eg `180px` |


### Box

Displays a block level element.

The basic building block of a rendition application.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Grid/Box.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `flex`      | <code>string &#124; string[]</code> | - | - | Sets `flex`, if the value is an array, sets a responsive style corresponding to the theme's breakpoints
| `order`      | <code>number &#124; string &#124; Array&lt;number &#124; string&gt;</code> | - | - | Sets `order`, if the value is an array, sets a responsive style corresponding to the theme's breakpoints


### Button

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Button/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `primary`     | `boolean` | -         | -          | If true, use the `primary` theme color               |
| `secondary`   | `boolean` | -         | -          | If true, use the `secondary` theme color             |
| `tertiary`    | `boolean` | -         | -          | If true, use the `tertiary` theme color              |
| `quartenary`  | `boolean` | -         | -          | If true, use the `quartenary` theme color           |
| `danger`      | `boolean` | -         | -          | If true, use the `danger` theme color                |
| `warning`     | `boolean` | -         | -          | If true, use the `warning` theme color               |
| `success`     | `boolean` | -         | -          | If true, use the `success` theme color               |
| `info`        | `boolean` | -         | -          | If true, use the `info` theme color                  |
| `light`       | `boolean` | -         | -          | If true, use white background and default text color |
| `disabled`    | `boolean` | -         | -          | If true, disabled the button |
| `outline`     | `boolean` | -         | -          | If true, the button will have a transparent background, and the border and text color will match |
| `plain`       | `boolean` | -         | -          | If true, render the button without padding, background or border |
| `underline`   | `boolean` | -         | -          | Similar to the `plaintext` prop, but displays a line underneath the button text |
| `icon`        | `JSX.Element` | -         | -          | Optionally provide a JSX element that will be rendered before the text inside the button |
| `compact`        | `boolean[]` | [false]   | -          | Optionally renders the label according to the value inside the array for each breakpoint |
| `confirmation`        | `string | ConfirmProps` | -   | -          | Optionally asks for confirmation before `onClick` is called |

### ButtonGroup

Wrapper for buttons to make them stick together.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/ButtonGroup/story.js)
### Card

Section containing content and actions on the same topic. 

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Card/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| -------|--------|-----------|------------|-------------- |
| `title`  | `string` | - | - | The title of the card |
| `cta`  | `JSX.Element` | - | - | React component added to the header |
| `rows`  | `JSX.Element[]` | - | - | Subsections separated by a horizontal separator |
| `minHeight`  | `string` | `auto` | - | CSS minHeight property |
| `small`  | `boolean` | - | - | If true, reduces the scale of the card |
| `children`  | `JSX.Element` | - | - | Any content that is internally wrapped in a Box |

### Checkbox

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Checkbox/story.js)

#### Props

`Checkbox` implements all properties from [Grommet's CheckBox component](https://v2.grommet.io/checkbox)

### Container

A padded container with a responsive width.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Container/story.js)


### Copy

Wrapper that adds a "copy to clipboard" button to any component and copies the passed content to the user's clipboard.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Copy/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `content`      | `string` | -         | ✓          | The value that should be copied to the clipboard
| `show`      | <code>'hover' &#124; 'always'</code> | - | - | Optionally show the copy button on hover or always show the button
| `onClick`      | `(content: string) => void` | - | - | onClick handler, useful if you wish to do other actions after content was copied
| `children`      | `React.ReactNode` | -         | - | The content next to which the clipboard button should be shown

### DataGrid

A component that renders the data in a grid layout, usually using a card per item. For the best results, and in order to avoid large gaps between grid items, make sure your card item is responsive, and can handle double the minimum width (You should set `itemMaxWidth={itemMinWidth * 2}`).
[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Grid/story.js)

#### Props

| Name           | Type                           | Default | Required | Description                                                  |
| -------------- | ------------------------------ | ------- | -------- | ------------------------------------------------------------ |
| `items`        | `T[]`                          | -       | ✓        | An array of data items that will be displayed in the grid    |
| `renderItem`   | `(item: T) => React.ReactNode` | -       | ✓        | A function that returns a react node to render for each item |
| `getItemKey`   | `(item: T) => string           | number` | -        | ✓                                                            | A function that returns a unique key per data item |
| `itemMinWidth` | `string`                       | -       | ✓        | The minimum width of each grid item                          |
| `itemMaxWidth` | `string`                       | -       | -        | The maximum width of each grid item                          |

### Divider

A styled horizontal rule.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Divider/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| -------|--------|-----------|------------|-------------- |
| `height`  | `number` | `0.5` | - | The height of the divider |
| `color`  | `string` | `quartenary.main` | - | The color of the divider |
| `type`  | `'solid' | 'dashed'` | `'solid` | - | The type of divider |
| `children`  | `string` | - | - | Textual explanation to go in the middle of the divider |


### DropDownButton

Displays a button with an attached dropdown list, `children` of the component
are rendered inside a dropdown list.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/DropDownButton/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------------- | ------ | --------- | ---------- | ------------- |
| `primary`     | `boolean` | -         | -          | If true, use the `primary` theme color               |
| `secondary`   | `boolean` | -         | -          | If true, use the `secondary` theme color             |
| `tertiary`    | `boolean` | -         | -          | If true, use the `tertiary` theme color              |
| `quarternary` | `boolean` | -         | -          | If true, use the `quarternary` theme color           |
| `danger`      | `boolean` | -         | -          | If true, use the `danger` theme color                |
| `warning`     | `boolean` | -         | -          | If true, use the `warning` theme color               |
| `success`     | `boolean` | -         | -          | If true, use the `success` theme color               |
| `info`        | `boolean` | -         | -          | If true, use the `info` theme color                  |
| `emphasized`  | `boolean` | -         | -          | If true, use a larger size                           |
| `square`      | `boolean` | -         | -          | If true, render the button with equal length width and height |
| `disabled`      | `boolean` | -         | -          | If true, disabled the button |
| `label`      | `JSX.Element` | -         | -          | Optionally provide a JSX element that will be displayed inside the main button |
| `border`      | `boolean` | -         | -          | If true, place a border between each item in the dropdown |
| `joined`      | `boolean` | -         | -          | If true, render the component as a single button instead of two |
| `noListFormat`      | `boolean` | -         | -          | If true, render children as a single JSX element instead of iterating over each of them |
| `alignRight`      | `boolean` | -         | -          | If true, put the dropdown list on the right  |
| `listMaxHeight`      | `string \| number` | -         | -          | If setted, it defines the maximum height of the dropdown list |
| `compact`        | `boolean[]` | [false]    | -          | Optionally renders the label according to the value inside the array for each breakpoint |

### Filters

A component that can be used for generating filters in the form of [json schema](http://json-schema.org/) objects and saving sets of filters as "views".
The filters created by this component can be used to filter a collection of
objects using the `SchemaSieve` object.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Filters/story.js)

#### Schema

The `Filters` component requires a `schema` property which should be a json
schema that defines the shape of the objects you want to filter. For example if
you want to filter on a collection that looks like this:

```
[
  {
    name: 'Bulbasaur',
    caught: true,
  },
  {
    name: 'Pikachu',
    caught: true,
  },
  {
    name: 'Dratini',
    caught: false,
  }
]
```

You would define a schema that looks like this:

```
{
  type: 'object',
  properties: {
    name: {
      title: 'Name',
      type: 'string'
    },
    caught: {
      title: 'Has been caught',
      type: 'boolean'
    }
  }
}
```

If you provide a `title` property, it will be used to label the field when
filtering, otherwise the field name will be used.

##### Views

Views represent a set of filters, along with an id and a name. This is a useful
feature for storing a set filters and loading it again at a later point.
A view can optionally have a `scope` property, which will correspond to the
`slug` of a view scope, if you have provided one in the `Filters` property
`viewScopes` property. Scopes allow you to easily add an extra layer of
granularity/grouping to views that are generated. If you provide view scopes,
the user can select a scope when creating a new view.

A view scope has the following properties:

| Name          | Type      | Description                                          |
| ------------- | --------- | ---------------------------------------------------- |
| slug            | `string`  | A unique identifier for the scope                  |
| name          | `string`  | A descriptive name for the scope                     |
| label       | `string`  | An optional label to use for this scope when creating a view  |

A view has the following properties:

| Name          | Type      | Description                                          |
| ------------- | --------- | ---------------------------------------------------- |
| id            | `string`  | A unique identifier for the view                     |
| name          | `string`  | A descriptive name for the view                      |
| filters       | `string`  | An array of json schemas                             |
| scope       | <code>string &#124; null</code>  | The slug of a view scope, or `null` if now scopes are provided |

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `schema`    | `object` | - | ✓ | A json schema describing the shape of the objects you want to filter |
| `disabled`    | `boolean` | -         | -          | If true, disable the entire `Filters` interface
| `filters`    | `object[]` | -         | -          | An array of json schemas to be displayed as the currently selected filters, typically used when loading when loading filters from storage |
| `views`    | `object[]` | -         | -          | An array of views, as described above, typically used when loading when loading views from storage |
| `viewScopes`    | `object[]` | - | - | An array of view scopes, as described above |
| `onFiltersUpdate`    | `(filters: object[]) => void` | - | - | A function that is called when filters are updated |
| `onViewsUpdate`    | `(views: object[]) => void` | - | - | A function that is called when views are updated |
| `addFilterButtonProps` | `object` | - | - | Properties that are passed to the "Add filter" button, these are the same props used for the [`Button`](#button) component |
| `viewsMenuButtonProps` | `object` | - | - | Properties that are passed to the "Views" button, these are the same props used for the [`DropDownButton`](#dropdownbutton) component |
| `renderMode` | <code>string &#124; string[]</code> | - | - | Controls which parts of the `Filters` interface are displayed. One of `all`, `add`, `search`, `views`, `summary`, or an array containing any of these values |
| `dark`    | `boolean` | -         | -          | If true, Set the `Filters` component against a dark background |
| `compact`    | `boolean[]` | -         | -          | Accept a boolean for each rendition breakpoint. If true remove `Filters` labels  |
### Fixed

Displays an element with a [`fixed`](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) position.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Fixed/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `top`      | <code>boolean &#124; ResponsiveStyle</code> | - | - | Sets the distance to the top of the containing block. If true, sets the value to zero
| `right`      | <code>boolean &#124; ResponsiveStyle</code> | - | - | Sets the distance to the right of the containing block. If true, sets the value to zero
| `bottom`      | <code>boolean &#124; ResponsiveStyle</code> | - | - | Sets the distance to the bottom of the containing block. If true, sets the value to zero
| `left`      | <code>boolean &#124; ResponsiveStyle</code> | - | - | Sets the distance to the left of the containing block. If true, sets the value to zero
| `z`      | `ResponsiveStyle` | - | - | Sets the z-index of the component |
### Flex

Displays an element using [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox).

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Grid/Flex.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `alignItems`      | <code>string &#124; string[]</code> | - | - | Sets `align-items`, if the value is an array, sets a responsive style corresponding to the theme's breakpoints
| `justifyContent`      | <code>string &#124; string[]</code> | - | - | Sets `justify-content`, if the value is an array, sets a responsive style corresponding to the theme's breakpoints
| `flexDirection`      | <code>string &#124; string[]</code> | - | - | Sets `flex-direction`, if the value is an array, sets a responsive style corresponding to the theme's breakpoints
| `flexWrap`      | <code>string &#124; string[]</code> | - | - | Sets `flex-wrap` css property
### Form

A component that can be used for generating a form from a [json schema](http://json-schema.org/) object. 
The standard json schema types are supported, as well as the `date-time` format.

Under the hood, this component uses [`react-jsonschema-form`](https://github.com/mozilla-services/react-jsonschema-form) and support
all [`uiSchema`](https://github.com/mozilla-services/react-jsonschema-form#the-uischema-object) options from that project.

Additional formats are supported, but require supporting widgets to be loaded.
For example if you would like to support the [mermaid](https://mermaidjs.github.io/) format, you'll need to
import the widget using `import 'renditon/dist/extra/Form/mermaid'`.

This import only needs to happen once, so it is recommended that its done at the
root level of your application.

#### Custom uiSchema properties

Some templates and widgets support additional uiSchema options, defined using `ui:options` object in the `uiSchema` definition. Those are:

##### PasswordWidget

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `showPasswordStrengthMeter`    | `boolean` | false | - | A boolean denoting whether a password strenth meter will be shown. `zxcvbn` should be loaded beforehand and set to the window object as `window.zxcvbn` |

##### ObjectField

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `responsive`    | `boolean` | false | - | A boolean denoting whether the object fields should be wrapped in a row-directed flex container and wrap once their size is larger than the minimum|
| `flex`    | `Array<number | string>` | - | - | Works together with `responsive`. It passes the `flex` value to the same-indexed field in the object. This allows you to have more control over the layout of the fields |


#### Captcha

If you wish to use a captcha (google recaptcha v2) in your form, you need to load the `captcha` widget using `import { CaptchaWidget } from 'renditon/dist/extra/Form/captcha'` and register it using `registerWidget`. [View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Form/story.js).

In order for the captcha to work, you also need to set a valid recaptcha API key to the `window.RECAPTCHA_V2_API_KEY` variable.
A gotcha with the captcha widget is, upon submitting, you need to reset the captcha form value where you manage its state. Google only allows a captcha value (generated by clicking the captcha widget) to be verified only once against their API, after which it will be invalid so it needs to be reset.

#### API

##### `registerWidget(format, widget)`

Register a widget that will be used to render fields of the specified format.

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `schema`    | `object` | - | ✓ | A json schema describing the shape of the data you would like to gather |
| `submitButtonText` | <code>string &#124; JSX.Element</code> | - | - | A string or JSX element to replace the text in the form submit button |
| `hideSubmitButton` | `boolean` | - | - | If true, do not display the form submit button |
| `submitButtonProps` | `object` | - | - | Properties that are passed to the submit button, these are the same props used for the [`Button`](#button) component |
| `secondaryButtonProps` | `object` | - | - | If passed, it will show a secondary button, these are the same props used for the [`Button`](#button) component |
| `value` | `*` | - | - | The data that should be displayed in the form |
| `onFormChange` | `(result: object) => void` | - | - | A function that is called when form data changes |
| `onFormSubmit` | `(result: object) => void` | - | - | A function that is called when the form is submitted |
| `uiSchema` | `object` | - | - | A configuration object used to change the styling and layout of the form. See the [`react-jsonschema-form`](https://github.com/mozilla-services/react-jsonschema-form) docs for more details |

### Heading

A component that displays a heading. By default an `<h3>` tag is used. The exact
heading type can be specifed by appending the element name to the component, for
example `<Heading.h1>`, `<Heading.h2>`, `<Heading.h3>` etc.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Heading/story.js)

### HighlightedName

By default, the background color of a `HighlightedName` component is generated
automatically from its `children` (which must be a string), though this can be overridden.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/HighlightedName/story.js)

#### Props

| Name       | Type     | Default                             | Required | Description                                         |
|------------|----------|-------------------------------------|----------|-----------------------------------------------------|
| `children` | `string` | -                                   | ✓        | The text to display inside the highlighted name     |
| `bg`       | `string` | autogenerated from `children`       | -        | If passed, it will be used as the background color of the component |
| `color`    | `string` | `theme.colors.text.main` or `white` | -        | If passed, it will be used as the text color of the component |

### Img

Displays an image.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Img/story.js)

#### Inheritance

The attributes of an [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) element are also available.

### Input

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Input/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `emphasized`  | `boolean` | -         | -          | If true, use a larger size                           |
| `monospace`  | `boolean` | - | - | If true, render text in a monospace font |
| `onChange`  | `(e: Event) => void` | - | - | A function that is called when the input value changes |

#### Inheritance

The attributes of an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element are also available.



### Link

Displays an anchor link.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Link/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| ------ | ------ | --------- | ---------- | ------------- |
| `blank`  | `boolean` | - | - | If true, open the link in a new tab |
| `disabled`  | `boolean` | - | - | If true, disable the link |

#### Inheritance

The attributes of an [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) element are also available.


### List

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/List/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `children`  | `ReactNode` | -         | -          | Each child represents a list item                    |
| `ordered`  | `boolean` | - | - | If true, render an ordered (numbered) list, otherwise render a bullet list |




### Map

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Map/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `apiKey`      | `string`                              | -     | ✓      | Google maps API key |
| `data`        | `any[]`                               | -     | ✓      | Passes the data that you wish to be used as a basis for rendering the map pins |
| `dataMap`     | `object`                              | -     | ✓      | A mapping object between your data and location-specific fields (like latitude) |
| `getIcon`     | `(entry: any) => string`              | -     | -      | Function that returns an icon based on the data entry |
| `onItemClick` | `(entry: any) => void`                | -     | -      | Callback function when an item on the map was clicked |
| `mapClick`    | `(e: google.maps.MouseEvent) => void` | -     | -      | Event triggered on map click that includes the clicked location's longitude and latitude |



### Modal

Displays a centrally position modal overlay. Children passed to this component
are rendered inside the modal.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Modal/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| --------------|-----------|-----------|------------|----------------------------------------------------- |
| `title`       | `string`
 | - | - | A title to display at the top of the Modal, only displayed if the `titleElement` property is not used |
| `titleElement`    | <code>string &#124; JSX.Element</code> | - | - | A string or JSX element to display at the top of the modal |
| `titleDetails`    | <code>string &#124; JSX.Element</code> | - | - | A string or JSX element to display underneath the modal's `title`, only displayed if the `titleElement` property is not used and a `title` property is provided |
| `action`    | <code>string &#124; JSX.Element</code> | - | - | A string or JSX element to display in the primary modal button, defaults to 'OK' |
| `cancel`    | `() => any` | - | - | A function that is called if the modal is dismissed |
| `done`    | `() => any` | - | ✓ | A function that is called if the primary modal button is clicked |
| `primaryButtonProps` | `object` | - | - | Properties that are passed to the primary button, these are the same props used for the [`Button`](#button) component |
| `secondaryButtonProps` | `object` | - | - | If provided, will cause a secondary button to appear on the modal. These properties that are passed to that button, these are the same props used for the [`Button`](#button) component |
| `cancelButtonProps` | `object` | - | - | Properties that are passed to the cancel button, these are the same props used for the [`Button`](#button) component |
| style | `object` | - | - |  Apply custom styles to Modal, the object is applied as a [`style` attribute](https://reactjs.org/docs/dom-elements.html#style) |
| position | <code>'center' &#124; 'top'</code> | - | - | Start the modal from the center (default) or top |

### Navbar

A component used to render a navigation bar.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Navbar/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `brand`    | `JSX.Element` | - | ✓ | A JSX element used as the main branding in the navbar |

### Notifications

To use this component, you first need to add the `NotificationsContainer` component at the root of your React application.
You can then programatically add or remove notifications using the `notifications` module. For example:

```
import {notifications} from 'rendition';

const notificationId = notifications.addNotification("Hi there");
notifications.removeNotification(notificationId);
```

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Notifications/story.js)

#### Props

The `NotificationsContainer` component doesn't take any props. You do all customizations on a per-notification basis.
The `addNotification` function can take either a valid React node component, or the following options:

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `content`  | `React.ReactNode`  | -         | ✓          | The content you wish to display in the notification        |
| `duration`| `number`  | 6000         | -          | The duration this notification will be shown for in `ms`. `0` means it will never close automatically |
| `container` | `string` | `top-right` | - | The position of the notifications in the parent container.<br>One of `'top-left'	| 'top-right'	| 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'` |
| `type`      | `string`  |  -        | -          | Optionally used to specify the _intent_ of the notification.<br>One of `'danger' | 'warning' | 'success' | 'info'`. |
| `id`        | `number`  | (random)         | -          | A custom id for the notification                      |
| `onDismiss`        | `() => void`  |         | -          | A callback function that is triggered when the "dismiss" button is clicked |

### Pager

Displays a pager widget.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Pager/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `totalItems`  | `number`  | -         | -          | The total number of items to split into pages        |
| `itemsPerPage`| `number`  | -         | -          | The number of items on each page                     |
| `page`        | `number`  | -         | -          | The current page (zero-indexed)                      |
| `nextPage`    | `() => void` | -         | -          | Callback invoked when the "next page" button is clicked
| `prevPage`    | `() => void` | -         | -          | Callback invoked when the "previous page" button is clicked

### Popover

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Popover/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `children`     | `React.ReactNode` |         | -          | Content of the popover |
| `onDismiss`         | `Function`         |     | -          | Called when clicked outside a popover on esc key press |
| `target`   | `HTMLElement`         |    | true          | Target node |
| `placement`        | `"top"` \| `"right"` \| `"bottom"` \| `"left"`|            | -          | Placement of the popover |

### ProgressBar

Displays a progress bar using a value representing a percentage.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/ProgressBar/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                                   |
| --------------|-----------|-----------|------------|-------------------------------------------------------------- |
| `primary`     | `boolean` | `true`    | -          | If true, use the `primary` theme color                        |
| `secondary`   | `boolean` | -         | -          | If true, use the `secondary` theme color                      |
| `tertiary`    | `boolean` | -         | -          | If true, use the `tertiary` theme color                       |
| `quarternary` | `boolean` | -         | -          | If true, use the `quarternary` theme color                    |
| `danger`      | `boolean` | -         | -          | If true, use the `danger` theme color                         |
| `warning`     | `boolean` | -         | -          | If true, use the `warning` theme color                        |
| `success`     | `boolean` | -         | -          | If true, use the `success` theme color                        |
| `info`        | `boolean` | -         | -          | If true, use the `info` theme color                           |
| `emphasized`  | `boolean` | -         | -          | If true, use a larger size                                    |
| `value`       | `number`  | -         | ✓          | A value between 1 and 100 that represents the progress        |
|  background   | `string`  | -         | -          | A CSS color string to use for the progress bar                |
|  color        | `string`  | -         | -          | A CSS color string to use for the content of the progress bar |

### RadioButton

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/RadioButton/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `checked`     | `boolean` | -         | -          | If true, render the radio button as checked               |
| `disabled`    | `boolean` | -         | -          | If true, set the radio button as disabled             |
| `label`       | `string`  | -         | -          | The label to render next to the radio button              |
| `onChange`    | `(event: Event) => void` | -         | -          | Function called when the value of the radio button changes           |


### RadioButtonGroup

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Search/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `value` | `string` | -         | -          | Currently selected option value             |
| `options`  | `["string"] | [{"disabled": boolean, "id": string, "label": string, "name": string, "value": string}]`  | -     | -     | Settings for each radio button |
| `onChange` | `(event: Event) => void` | -         | -          | Function called when the value of the radio button changes           |


### Search

Displays an input styled as a search bar.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Search/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `dark`    | `boolean` | - | - | If true, uses a light colorscheme for use on a dark background |
| `disabled`    | `boolean` | -         | -          | If true, disable the input |
| `placeholder`    | `string` | -         | -          | A placeholder to use in the input |
| `value`    | `string` | -         | ✓          | The value of the input |
| `onChange`    | `(event: Event) => void` | -         | ✓          | A function that is called when the input changes |

### Select

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Select/story.js)

#### Props

You can refer to the [grommet select page](https://v2.grommet.io/select) for all possible props. 

##### Excluded props are:

`'size' | 'selected' | 'focusIndicator' | 'margin'`


##### Additional props are:

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `emphasized`  | `boolean` | -         | -          | If true, use a larger size                           |
| `invalid`     | `boolean` | -         | -          | If true, adds red borders around the select          |



### Spinner

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Spinner/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `children`     | `React.ReactNode` |         | -          | If the spinner has children, it will show an opaque overlay over the children when it is spinning |
| `show`         | `boolean`         | true    | -          | If passed, it will control whether the spinner is shown or not |
| `emphasized`   | `boolean`         | false   | -          | If true, it will render a large spinner |
| `label`        | `string` \| `React.ReactNode`|            | -          | A label that will be rendered next to the spinner. Renders on right-hand side for standard spinner, and below spinner for emphasized |
### Steps

A visual guide showing a number of steps to be performed by the user. The `Steps` component takes one or more `Step` components as children.

If the `ordered` prop is `true`, the steps will be considered as an ordered (numbered) list. In this case, the `activeStepIndex` must be set and the `onClick` callback prop of the child `Step` components used to update the `activeStepIndex`.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Steps/story.js)

#### Props

| Name          | Type          | Default   | Required   | Description |
| ------------- | ------------- | --------- | ---------- | ----------- |
| `children`    | `Array<Step>` | -         | -          | The step components that form this sequence of steps |
| `titleText`   | `string`      | -         | -          | If passed, the steps will have a title at the beginning |
| `titleIcon`   | `ReactNode`   | -         | -          | If passed, an icon will be shown next to the title text, or on its own if there is no title text passed |
| `onClose`     | `() => void`  | -         | -          | Function that is called when a user clicks on the close button, if not passed, no close button will be rendered |
| `bordered`    | `boolean`     | `true`    | -           | If true (default), the steps container will have a visible border | 
| `ordered`     | `boolean`     | `false`   | -           | If true, the steps will be treated as an ordered list. Instead of the check icon, pending ordered steps will be displayed with a grey step number and active ordered steps with a blue step number.
| `activeStepIndex` | `number`  | -         | -           | If passed, specifies the step that is currently active. Only use with the `ordered` prop |

##### Step Props

| Name       | Type                               | Default | Required   | Description |
| ---------- | ---------------------------------- | ------- | ---------- | ----------- |
| `children` | `string`                           | -       | ✓          | The text of the step |
| `status`   | `'pending' | 'completed' | 'none'` | -       | ✓          | Whether the step has been completed or is still pending |
| `onClick`  | () => void                         | -       | -          | If passed, the step will be clickable. _Note: If the steps are ordered, this callback should be used to update the `activeStepIndex` prop passed to the `Steps` component._  |

### Table

A component used to generate a styled table.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Table/story.js)

#### Columns

The `columns` property defines what columns the table should display, how they
are rendered and whether or not the column is sortable.

The `columns` property should be an array of objects with the following properties:

| Name          | Type      | Required | Description                                          |
| ------------- | --------- | -------- | ---------------------------------------------------- |
| field         | `keyof T`  | ✓ | The name of the field this column should render, this should correspond to a key on the objects passed to the `data` property of the `Table` component |
| key | `string` | - | Custom key for React to use instead of the field name above |
| cellAttributes | <code>object &#124; (value: any, row: T) => object</code> | - | Attributes that are passed to each cell in this column. This can also be a function, which will be called with the value of the `field` provided and the row data (`T`) |
| label | <code>string &#124; JSX.Element</code> | - | A string or JSX element that will be used to display the name of the column. If this property is not provided, the `field` property will be used instead |
| render | <code>(value: any, row: T) => string &#124; number &#124; number &#124; JSX.Element &#124; null</code> | - | Use a custom render function to display the value in each column cell. This function will be called with the value of the `field` provided and the row data (`T`) |
| sortable | <code>boolean &#124; (a: T, b: T) => number</code> | - | If true, the column will be sortable using an alphanumeric sort, alternatively a function can be provided allowing finer grained control over sorting |

#### Notes

For performance reasons table rows are only re-rendered if the row properties
have changed. For this reason, rows **will not** re-render if their properties
are mutated: you should clone the item instead, for example:

```js
update (index) {
  const newData = this.state.data
  const element = newData[index]
  newData[index] = Object.assign({}, element, { active: !element.active })
  this.setState({ data: newData })
}
```

See the **Updating data in a table** story for an example of how this can be
done using a high order component.

Additionally, because of this rendering behaviour the `render()` functions in
the `Table` component's `columns` property should only use values provided to 
the render function.
When `render()` functions are provided, they must act like pure functions with 
respect to their props. They should only rely on their arguments to generate 
their output and not use any context variables. If you are using a context 
variable in your `render()` function, then changes to that variable will not 
cause a re-render of the component and will not be reflected on the table.

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------------- | --------- | --------- | ---------- | ---------------------------------------------------- |
| `columns`    | `object[]` | - | ✓ | An array of column objects, as described above |
| `data`    | `T[]` | - | ✓ | An array of objects that will be displayed in the table |
| `checkedItems`    | `T[]` | - | - | An array of objects that controls which rows are selected |
| `getRowHref`    | `(row: T) => string` | - | - | If provided, each row in the table will be a clickable link, this function is used to create the link href |
| `onCheck`    | `(checkedItems: T[]) => string` | - | - | If provided, each row will begin with a checkbox. This function is called with every checked row every time a checkbox is toggled on or off. This property requires that you have provided a `rowKey` property |
| `onRowClick`    | `(row: T, event: Event) => void` | - | - | A function that is called when a row is clicked. This property requires that you have provided a `rowKey` property |
| `onSort`    | `(sort: TableSortOptions<T>) => void` | - | - | A function that is called when a column is sorted |
| `onPageChange`    | `(page: number) => void` | - | - | A function that is called when the page is incremented, decremented and reset |
| `sort`    | `TableSortOptions<T>` | - | - | sort options to be used both as a default sort, and on subsequent renders if the passed sort changes |
| `rowAnchorAttributes`    | `object` | - | - | Attributes to pass to the anchor element used in a row |
| `rowCheckboxAttributes`    | `object` | - | - | Attributes to pass to the checkbox element used in a row |
| `rowKey`    | `key of T` | - | - | A field on a row that contains a unique identifier, can help speed up render performance and is required for the `onCheck` property |
| `toBodyPrefix`    | <code>JSX.element &#124; JSX.Element</code> | - | - | JSX element(s) to display at the top of the table body |
| `highlightedRows`    | <code>&ast;[]</code> | - | - | Highlights one or more rows. This property requires that you have provided a `rowKey` property: the row with a `rowKey` property that matches one of these values is highlighted. 
| `usePager`    | `boolean` | - | - | If true, a pager will be used when displaying items. 
| `itemsPerPage`    | `number` | `50` | - | The number of items to be shown per page. Only used if `usePager` is true. Defaults to `50`.
| `pagerPosition`    | <code>'top' &#124; 'bottom' &#124; 'both'</code> | `top` | - | Sets wether the pager is displayed at the top of the table, the bottom of the table or in both positions. Only used if `usePager` is true. Defaults to `top`.

#### Programmatically selecting rows

The component has a `setRowSelection` method that can be accesssed via <a href='https://reactjs.org/docs/refs-and-the-dom.html' target='_blank' rel='noopener'>ref</a>.

It will accept an array of rows `T[]`, or an empty array in order to clear the selection.

This method requires that you have provided a `rowKey` property.

### Tabs

A component used to render tabbed children components.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Tabs/story.js)

#### Props

You can refer to the [grommet tabs page](https://v2.grommet.io/tabs) for all possible props.

##### Additional props are:

| Name      | Type      | Default | Required | Description                                             |
| --------- | --------- | ------- | -------- | ------------------------------------------------------- |
| `compact` | `boolean` | -       | -        | If true, render tabs on a single line. (for mobile use) |

### Tag

Represents a name-value pair with an optional operator between.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Tag/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| ------ | ------ | --------- | ---------- | ------------- |
| `value`     | `string` | - | - | The value part of the tag  |
| `operator`   | `boolean` | `':'` | - | The operator that goes between the name and value of the tag  |
| `name`    | `boolean` | - | - | The name part of the tag, if not provided, only the value will be shown  |
| `multiple`    | `Array<{name?: string, value?: string, operator?: string, prefix?: string}>` | - | - | An array of name-value pairs, with an optional delimiter to be used between the previous and current tag entry |
| `onClose` | `(e: MouseEvent) => void` | - | - | Callback method, that if passed, a "close" button will be added to the right-hand side of the tag|
| `onClick` | `(e: MouseEvent) => void` | - | - | Callback method, that if passed, the tag will become clickable |

### Terminal

An xterm emulator built on top of [xterm.js](https://xtermjs.org/).

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Terminal/story.js)

#### API

The `Terminal` component exposes a simple api, typically accessed via a `ref`.

Here is a simple example that writes a number every second:

```
import * as React from 'react'
import { Terminal } from 'rendition'

export class Logger extends React.Component {
  constructor (props) {
    super(props)

    this.count = 0
  }

  componentDidMount () {
    this.interval = setInterval(() => {
        this.term.writeln(++this.count)
      }
    }, 1000)
  }

  render () {
    return (
      <Terminal 
        ref={term => (this.term = term)} 
      />
    )
  }
}
```

##### `resize()`

Resize the `Terminal` component to fill its container.

##### `clear()`

Clear all output from the terminal.

##### `writeln(text)`

Write text to the terminal, followed by a line break.

##### `write(text)`

Write text to the terminal.

##### `destroy(text)`

Tear down the terminal instance.

#### Remounting old instances

If you'd like to preserve a terminal session and remount it to the DOM at
a later point, you will need to set the `persistent` property to `true` and then access the readonly property `tty` and store it in memory. 
The `persistent` flag prevents the `Terminal` component form destroying the
`tty` instance when it unmounts.
When you want to remount the session, instantiate a new `Terminal`
component and provide the `tty` value as the `ttyInstance` property. When
a `ttyInstance` property is provided, the `Terminal` component will use that
instance instead of creating a new one.

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `ttyInstance`    | `object` | -         | -          | An existing `Terminal.tty` instance to use instead of creating a new one |
| `persistent`    | `boolean` | -         | -          | If true, don't destroy the `Terminal.tty` instance when the component unmounts |
| `nonInteractive`    | `boolean` | -         | -          | If true, the component will go into a "read-only" state, useful for displaying logs |
| `color`    | `string` | -         | -          | A CSS color string that sets the background color of the terminal |
| `config`    | `object` | -         | -          | Startup options to pass to the tty instance, see the [xterm.js options](https://github.com/xtermjs/xterm.js/blob/master/typings/xterm.d.ts#L24) for more detail |
### Textarea

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Textarea/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `monospace`  | `boolean` | `false` | - | If true, render text in a monospace font |
| `autoRows`  | `boolean` | `false` | - | If true, the textarea `rows` property will be changed automatically based on the content of the textarea, this behaviour will only work with a [controlled input](https://reactjs.org/docs/forms.html#controlled-components) (i.e. you have used the `onChange` property |
| `minRows`  | `number` | - | - | Set the minimum number of rows |
| `maxRows`  | `number` | - | - | Set the maximum number of rows |
| `onChange`  | `(e: Event) => void` | - | - | A function that is called when the textarea value changes |

#### Inheritance

The attributes of a [`<textarea>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) element are also available.


### TextWithCopy

Displays text that can be copied to the clipboard.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/TextWithCopy/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `copy`      | `string` | -         | ✓          | The value that should be copied to the clipboard
| `showCopyButton`      | <code>'hover' &#124; 'always'</code> | - | - | Optionally show the copy button on hover or always show the button

### Tooltips

Tooltips are somewhat special in how they are used. 
Instead of using them as a typical React component, they can be added to a supported component using the `tooltip` attribute.
For example, to add a tooltip to a `Button` component you would do the
following:

```
<Button
  tooltip='I am a tooltip'
>
  Click me
</Button>
```

If the `tooltip` attribute is a string then a tooltip containing the strings
content will be displayed above the component.

If you need more control over the tooltip, you can set the attribute to an
object with the following properties:

| Name          | Type      | Required | Description                                          |
| ------------- | --------- | -------- | ---------------------------------------------------- |
| text         | `string`  | ✓ | The text to display in the tooltip |
| trigger | <code>'click' &#124; 'hover'</code> | - | Controls whether the tooltip is displayed on hover or click, defaults to `'hover'`
| placement | <code>'top' &#124; 'right' &#124; 'bottom' &#124; 'left'</code> | - | Controls the position of the tooltip related to the component, defaults to `'top'` |
| containerStyle | `object` | - | Apply custom styles to the tooltip outer container, the object is applied as a [`style` attribute](https://reactjs.org/docs/dom-elements.html#style) |
| innerStyle | `object` | - | Apply custom styles to the tooltip inner container, the object is applied as a [`style` attribute](https://reactjs.org/docs/dom-elements.html#style) |
| arrowStyle | `object` | - | Apply custom styles to the tooltip arrow, the object is applied as a [`style` attribute](https://reactjs.org/docs/dom-elements.html#style) |

The following rendition components support the `tooltip` attribute:

- `Alert`
- `Badge`
- `Box`
- `Button`
- `CodeWithCopy`
- `DropDownButton`
- `Fixed`
- `Flex`
- `Heading`
- `Txt`
- `Link`

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Tooltip/story.js)

### Txt

Displays a text block. A `<span>` tag can be used with `<Txt.span>` and a `<p>`
tag can be used with `<Txt.p>`.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Txt/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| ------ | ------ | --------- | ---------- | ------------- |
| `monospace`  | `boolean` | - | - | If true, render text in a monospace font |
| `bold`  | `boolean` | - | - | If true, render text in a bold font |
| `italic`  | `boolean` | - | - | If true, render text in an italic font style |
| `caps`  | `boolean` | - | - | If true, render text in uppercase |
| `align`  | `string` | - | - | Align text inside the component, one of 'left', 'right', 'center', 'justify', 'justify-all', 'start', 'end', 'match-parent', 'inherit', 'initial', 'unset' |
| `whitespace`  | `string` | - | - | Equivalent to the CSS `white-space` property, one of 'normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'initial', 'inherit' |


### JsonSchemaRenderer

A component used to render JSON data based on a schema and a UI schema. 

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/JsonSchemaRenderer/story.js)

>To understand the interaction between the `value`, `schema` and `uiSchema` props (as well as the use of `extraFormats` and `extraContext`) it's worth looking through the examples in [examples.ts](./examples.ts) and having a play with the [JsonSchemaRenderer Playground](https://balena-io-modules.github.io/rendition/?path=/story/extra-jsonschemarenderer--playground) in the Rendition Storybook site.

#### Props

| Name       | Type     | Default | Required | Description   |
| -----------|----------|---------|----------|-------------- |
| `value`    | `*`      | -       | -        | The data that should be rendered |
| `schema`   | `object` | -       | ✓        | A json schema describing the shape of the data you would like to render |
| `uiSchema` | `object` | -       | -        | A configuration object used to change the styling and layout of the rendered data.| 
| `extraFormats` | `[Format]` | - | - | An optional array of formats to pass to the validator, and an optional custom widget for the format. See [addFormat](https://github.com/ajv-validator/ajv#api-addformat) for details of formatters. |
| `extraContext` | `object` | - | - | Extra context used by `json-e` when transforming the UI schema. |
| `validate` | `boolean` | - | - | If set, the `value` will be validated against the `schema` and any error will be displayed at the top of the rendered output. Useful for debugging. |

#### UI Schema fields

The UI schema for any value may consist of any of the following fields:

| Field | Description |
|-------|-------------|
| `ui:title` | The title of the data field.<br><br>If not set, the value of `schema.title` is used. If `schema.title` is not set, the value's key is used, in 'Start Case'.<br><br>Set `'ui:title': null` to hide the title. |
| `ui:description` | The description of the data field.<br><br>If not set, the value of `schema.description` is used.<br><br>Set `'ui:description': null` to hide the description. |
| `ui:widget` | Specifies the widget to use to render the data |
| `ui:order` | For values of type `object`, this field can be used to specify the order in which to render the object's properties.<br><br>e.g. `'ui:order': [ 'propB', 'propA' ]` |
| `ui:value` | Can be used to override/transform the data value. Particularly useful when used with [json-e](https://json-e.js.org/) transforms.<br><br>e.g. `'ui:value': 'Hello ${source}'` |
| `ui:options` | An object that can be provided to define additional UI options specific to the widget used to render the data value. For more details see the [Widgets README](./widgets/README.md#ui-options). |
| `items` | If the value is an array, use the `items` field to specify the UI schema of all items in the array. This is where `json-e` is particularly useful when combined with `${source}` to get the value of the item. |

Note that all fields in the UI schema can be expressed using [json-e](https://json-e.js.org/) syntax.

##### Transforming nested UI schemas

Each 'level' of a nested UI schema is transformed independently using json-e. 

Consider the following example:

```javascript
const value = {
  links: [ 'link1', 'link2' ]
}

const uiSchema = {
  links: {
    'ui:widget': 'Link',
    items: {
      'ui:options': {
        href: 'https://mysite.com/${source}'
      }
    }
  }
}
```

In this example a json-e transform is run for each item in the `links` array, allowing a unique value of `ui:options.href` to be set for each link in the array.

### JsonSchemaRenderer Widgets

A [`JsonSchemaRenderer`](../README.md) widget is responsible for rendering an individual data value.

#### Overview

A number of `JsonSchemaRenderer` widgets are provided by Rendition. 

* These widgets can be referenced by their string widget name 
* Each widget is a simple wrapper around an underlying Rendition component
* Each widget defines which data types it supports

| Widget Name       | Underlying component | Supported value types**  | UI Options |
|-------------------|-------------------------|--------------------------|:----------:|
| `Array`           | [JsonSchemaRenderer](../README.md)[]* | `array` | [ref](#array) |
| `Badge`           | [Badge](../../../components/Badge/README.md)| `string | integer | number | boolean` | [ref](#badge) |
| `ButtonGroup`     | [ButtonGroup](../../../components/ButtonGroup/README.md)|  `array` | [ref](#buttongroup) |
| `Button`          | [Button](../../../components/Button/README.md) | `string | integer | number | boolean` | [ref](#button) |
| `Checkbox`        | [Checkbox](../../../components/Checkbox/README.md) | `boolean` | [ref](#checkbox) |
| `DropDownButton`  | [DropDownButton](../../../components/DropDownButton/README.md) | `array` | [ref](#dropdownbutton) |
| `Heading`         | [Heading](../../../components/Heading/README.md) | `string` | [ref](#heading) |
| `HighlightedName` | [HighlightedName](../../../components/HighlightedName/README.md) | `string | integer | number | boolean` | [ref](#highlightedname) |
| `Img`             | [Img](../../../components/Img/README.md) | `string` | [ref](#img) |
| `Link`            | [Link](../../../components/Link/README.md) | `string` | [ref](#link) |
| `List`            | [List](../../../components/List/README.md) | `array` | [ref](#list) |
| `Markdown`        | [Markdown](../../Markdown/README.md) | `string` | [ref](#markdown) |
| `Mermaid`         | [Mermaid](../../Mermaid/README.md) | `string` | [ref](#mermaid) |
| `Object`          | [JsonSchemaRenderer](../README.md)* | `object` | [ref](#object) |
| `Tag`             | [Tag](../../../components/Tag/README.md) | `string | integer | number` | [ref](#tag) |
| `Txt`             | [Txt](../../../components/Txt/README.md) | `string | integer | number | boolean` | [ref](#txt) |

\* _Recursive_ - when the value is iterable (e.g. the properties of an object or the items in an array) these widgets pass each iterated value to a `JsonSchemaRenderer` instance in a recursive manner.

\*\* Remember: as the rendered value can be set using the `ui:value` field of the UI schema (potentially using a [json-e](https://json-e.js.org/) transformation), the resolved data type does not necessarily correspond to the data type of the `value` prop.

##### Example usage

A great way to see the interaction between a UI schema and these widgets is to look through the examples in [examples.ts](../examples.ts)

##### JsonSchemaRenderer Playground

To test out the various built-in widgets you can use the [JsonSchemaRenderer Playground](https://balena-io-modules.github.io/rendition/?path=/story/extra-jsonschemarenderer--playground) in the Rendition Storybook site.

#### Specifying a Widget

##### Built-in Widgets

To specify the Rendition widget to use to render a particular data value, set the `ui:widget` value within the UI schema to the `displayName` of the widget. For example:

```javascript
{
  value: true, 
  uiSchema: {
    'ui:widget': 'Checkbox'
  }
}
```

##### Custom Widgets 

If you want to provide your own widget, just set the `ui:widget` value to the widget component to use:

```javascript
const MyWidget = ({ value, schema, ...rest }) => (
  <div>{value}</div>
)

const uiSchema = {
  // Important: use the actual component reference, not it's string name
  'ui:widget': MyWidget
}
```

_Note: the props passed to your custom widget will be the [widget props](#widget-props)._

##### Widgets Specified by Schema Format

If the schema defines a `format` value, this may be used to pick a widget _if no `ui:widget` has been specified_. The following formats are mapped to widgets:

| Format     | Widget     |
|------------|------------|
| `markdown` | `Markdown` |
| `mermaid`  | `Mermaid`  |
| `email`    | `Link`     |
| `uri`      | `Link`     |

##### Default Widgets

If no `ui:widget` is specified and the widget cannot be determined by the schema's `format` value, the widget used is determined by the default widget for the data type of the value:

| Type of value | Widget   |
|---------------|----------|
| object        | `Object` |
| array         | `Array`  |
| string        | `Txt`    |
| number        | `Txt`    |
| boolean       | `Txt`    |
| null          | `Txt`    |
| undefined     | `Txt`    |

_Note: as the rendered value can be set using the `ui:value` field of the UI schema (potentially using a [json-e](https://json-e.js.org/) transformation), the resolved data type does not necessarily correspond to the data type of the `value` prop._

#### Widget Props

All widgets are passed the same props:

| Name           | Type           | Required | Description |
|----------------|----------------|----------|-------------|
|	`value`        | `DefinedValue` | ✓        | The value to display |
|	`schema`       | `JSONSchema`   | ✓        | The schema that described the value |
|	`uiSchema`     | `UiSchema`     | -        | The UI schema the defines how the value should be displayed. Note that the UI schema may contain _json-e template syntax_ that will be transformed by [json-e](https://json-e.js.org/) before being used. |
|	`extraFormats` | `Format[]`     | -        | An array of extra formats to include when validating the schema. See https://www.npmjs.com/package/ajv#formats for more details. |
|	`extraContext` | `object`       | -        | Extra context that is passed to [json-e](https://json-e.js.org/) when transforming the UI schema. This context can even contain functions that can be invoked by json-e when executing the transformation. |

#### UI Options

In addition to the standard widget props, each Widget component defines additional props that it accepts as 'UI options'.

##### Specifying UI Options in the UI Schema

UI options are specified in the UI schema using the `ui:options` key:

```javascript
{
  'ui:widget': 'Txt',
  'ui:options': {
    bold: true,
    italic: true
  }
}
```

##### UI Options common to all Widgets

The following UI options may be specified for _any_ widget:

| Option  | Type              | Description           |
|---------|-------------------|-----------------------|
| `p`     | `[string | number]`* | padding            |
| `pt`    | `[string | number]`* | padding-top        |
| `pb`    | `[string | number]`* | padding-bottom     |
| `pl`    | `[string | number]`* | padding-left       |
| `pr`    | `[string | number]`* | padding-right      |
| `px`    | `[string | number]`* | padding-horizontal |
| `py`    | `[string | number]`* | padding-vertical   |
| `m`     | `[string | number]`* | margin             |
| `mt`    | `[string | number]`* | margin-top         |
| `mb`    | `[string | number]`* | margin-bottom      |
| `ml`    | `[string | number]`* | margin-left        |
| `mr`    | `[string | number]`* | margin-right       |
| `mx`    | `[string | number]`* | margin-horizontal  |
| `my`    | `[string | number]`* | margin-vertical    |
| `flex` | `[string | number]`* | flex |
| `flexDirection` | `['column' | 'row' | 'column-reverse' | 'row-reverse']`* | flex-direction |
| `flexBasis` | `string`* | flex-basis |
| `flexWrap` | `['nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit']`* | flex-wrap |
| `alignItems` | `['stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit']`* | align-items |
| `alignSelf` | `['auto' | 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit']`* | align-self |
| `justifyContent` | `['flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'initial' | 'inherit']`* | justify-content |
| `justifySelf` | `['auto' | 'normal' | 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end' | 'left' | 'right' | 'baseline' | 'initial' | 'inherit' | 'unset']`* | justify-self |

\* Can be specified as an array to work with styled-system's [responsive styles](https://styled-system.com/responsive-styles).

##### UI Options by Widget

The UI options for Rendition JsonSchemaRenderer widgets roughly correspond to the props that can be passed to the underlying Rendition component. If in doubt, consult the appropriate component's README for details of the prop in question.

###### **Array**

| Option  | Type              | Description           |
|---------|-------------------|-----------------------|
|`orientation` | `['vertical' | 'horizontal']` | The array items are wrapped in a flexbox div. If the `orientation` is `horizontal`, the flex direction of this div will be `row`; otherwise it will be `column`. |
| `truncate` | `number` | Set `truncate` to a positive integer to set the max number of items to display. Additional items will be displayed with a summary (e.g. '+ 8 more') |

###### **Badge**

| Option  | Type              | Description           |
|---------|-------------------|-----------------------|
| `shade` | `number`  | The index (0-22) for one of the pre-determined shades for the badge |

###### **ButtonGroup**

_There are no additional UI options for `ButtonGroup`._

>Note that the `ButtonGroup` widget may only be used for **arrays of strings or numbers**. Each item in the array will be rendered using the `Button` widget and therefore any `ui:options` allowed by the `Button` widget may be specified in the `items['ui:options']` field.

###### **Button**

| Option        | Type      | Description           |
|---------------|-----------|-----------------------|
| `href`        | `string`  | The URL to navigate to when the button is clicked |
| `target`      | `['_blank' | '_self' | '_parent' | '_top']` | Corresponds to the `target` attribute of an `a` link element |
| `disabled`    | `boolean` | Set to true to disable the button |
| `primary`     | `boolean` | If true, use the `primary` theme color |
| `secondary`   | `boolean` | If true, use the `secondary` theme color |
| `tertiary`    | `boolean` | If true, use the `tertiary` theme color |
| `quarternary` | `boolean` | If true, use the `quarternary` theme color |
| `danger`      | `boolean` | If true, use the `danger` theme color |
| `warning`     | `boolean` | If true, use the `warning` theme color |
| `success`     | `boolean` | If true, use the `success` theme color |
| `info`        | `boolean` | If true, use the `info` theme color |
| `light`       | `boolean` | If true, use white background and default text color |
| `outline`     | `boolean` | If true, the button will have a transparent background, and the border and text color will match |
| `plain`       | `boolean` | If true, render the button without padding, background or border |
| `underline`   | `boolean` | Similar to the `plaintext` prop, but displays a line underneath the button text |

###### **Checkbox**

| Option    | Type      | Description           |
|-----------|-----------|-----------------------|
| `label`   | `string`  | The checkbox label (defaults to the value itself) |
| `reverse` | `boolean` | If true, place the label before the checkbox |
| `toggle`  | `boolean` | If true, render the checkbox as a toggle |

###### **DropDownButton**

| Option  | Type              | Description           |
|---------|-------------------|-----------------------|
| `primary`     | `boolean` |If true, use the `primary` theme color |
| `secondary`   | `boolean` | If true, use the `secondary` theme color |
| `tertiary`    | `boolean` | If true, use the `tertiary` theme color |
| `quarternary` | `boolean` | If true, use the `quarternary` theme color |
| `danger`      | `boolean` | If true, use the `danger` theme color |
| `warning`     | `boolean` | If true, use the `warning` theme color |
| `success`     | `boolean` | If true, use the `success` theme color |
| `info`        | `boolean` | If true, use the `info` theme color |
| `emphasized`  | `boolean` | If true, use a larger size |
| `square`      | `boolean` | If true, render the button with equal length width and height |
| `disabled`    | `boolean` | If true, disabled the button |
| `label`       | `string` | The text that will be displayed inside the main button |
| `border`      | `boolean` | If true, place a border between each item in the dropdown |
| `joined`      | `boolean` | If true, render the component as a single button instead of two |
| `alignRight`  | `boolean` | If true, put the dropdown list on the right  |
| `listMaxHeight` | `[string | number]` | If setted, it defines the maximum height of the dropdown list |

###### **Heading**

| Option  | Type              | Description           |
|---------|-------------------|-----------------------|
| `size`  | `number`          | The heading size (1-6) - corresponds to `h1`, `h2` etc |

###### **HighlightedName**

| Option  | Type              | Description           |
|---------|-------------------|-----------------------|
| `bg` | `string` | The background color (if not set, the background color will be automatically generated from the value itself) |
| `color` | `string` | The foreground color (if not set, the color will be automatically set as black or white based on whether the background color is light or dark) |

###### **Img**

| Option        | Type              | Description           |
|---------------|-------------------|-----------------------|
| `alt`         | `string` | The `alt` attribute passed to the `img` element |
| `height`      | `[string | number]`* | The height of the image |
| `width`       | `[string | number]`* | The width of the image |
| `crossorigin` | `['anonymous' | 'use-credentials']` | The `crossorigin` attribute passed to the `img` element |
| `decoding`    | `['sync' | 'async' | 'auto']` | The `decoding` attribute passed to the `img` element |
| `loading`     | `['eager' 'lazy']` | The `loading` attribute passed to the `img` element |
| `sizes`       | `string` | The `sizes` attribute passed to the `img` element |
| `srcset`      | `string` | The `srcset` attribute passed to the `img` element |

###### **Link**

| Option     | Type      | Description           |
|------------|-----------|-----------------------|
| `href`     | `string`  | The URL to link to |
| `blank`    | `boolean` | If true, will open the link in a new tab |
| `download` | `string`  | The `download` attribute passed to the `a` element |
| `rel`      | `string`  | The `rel` attribute passed to the `a` element |
| `type`     | `string`  | The `type` attribute passed to the `a` element |

###### **List**

| Option     | Type      | Description           |
|------------|-----------|-----------------------|
| `ordered` | `boolean` | If true, `ol` will be used rather than `ul` |
| `truncate` | `integer` | Optionally set the number of items to display in the list. Additional items will be displayed with a summary (e.g. '+ 8 more') |

###### **Markdown**

_There are no additional UI options for `Markdown`._

###### **Mermaid**

_There are no additional UI options for `Mermaid`._

###### **Object**

_There are no additional UI options for `Object`._

###### **Tag**

| Option     | Type      | Description           |
|------------|-----------|-----------------------|
| `operator` | `string`  | The operator that goes between the name and value of the tag  |
| `name`     | `string`  | The name part of the tag. If not provided only the value will be shown  |

###### **Txt**

| Option     | Type      | Description           |
|------------|-----------|-----------------------|
| `dtFormat` | `string`  | The date-time format used to display a date/time string. _Note: this uses the [date-fns format syntax](https://date-fns.org/v2.16.1/docs/format)._ |
| `bold`     | `boolean` | If true, text will be **bold** |
| `italic`   | `boolean` | If true, text will be _italic__ |
| `monospace`| `boolean` | If true, text will be `monospace` |
| `caps`     | `boolean` | If true, text will be in CAPITALS |
| `align`    | `['left' | 'right' | 'center' | 'justify' | 'justify-all' | 'start' | 'end' | 'match-parent' | 'inherit' | 'initial' | 'unset']` | Text alignment |
| `whitespace` | `['normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' | 'initial' | 'inherit']` | Specifies how whitespace is handled |

### Markdown

A simple component for rendering [GitHub flavored markdown](https://github.github.com/gfm/). This component
sanitizes input.
This component is not loaded by default as it relies on a markdown parsing package
that you may not want to include in your application.
You can load this component using:

```
import { Markdown } from 'rendition/dist/extra/Markdown';
```

If you need to customize the conversion of markdown to HTML you can supply the `sanitizerOptions` prop. In this case, use the defaults as a starting point for your options:

```
import { Markdown, defaultSanitizerOptions } from 'rendition/dist/extra/Markdown';
```

Generated html inherits styles from rendition components. i.e an anchor will be
rendered as a `Link` component.

Html inside the markdown is sanitized and stripped of any inline js and css. so
they will always be rendered.

Components can be overridden by using `componentOverrides` prop.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/extra/Markdown/story.js)

#### Props

| Name                   | Type                                                                 | Default | Required | Description                                                                                                   |
| ---------------------- | -------------------------------------------------------------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| `children`             | `string`                                                             | -       | ✓        | The markdown source that should be rendered                                                                   |
| `sanitizerOptions`     | [`Object`](https://github.com/syntax-tree/hast-util-sanitize#schema) |         | -        | Specifies the options used when sanitizing the generated HTML. Passing `null` would disable the sanitization. |
| `componentOverrides`   | `Object`                                                             | -       | -        | Object specifying component Overrides. ex. `{ p: Txt.p }`                                                     |
| `decorators`           | `Object`                                                             | -       | -        | Decorate part of the text if it matches some condition                                                        |
| `disableRawHtml`       | `boolean`                                                            | false   | -        | when disabled it does not renders raw html in markdown                                                        |
| `disableCodeHighlight` | `boolean`                                                            | false   | -        | when disabled code blocks will not highlight syntax                                                           |

Any other properties supplied are spread to the root element ([`Txt`](#txt)).

#### Inheritance

The properties of the [`Txt`](#txt) component are also available.

### MarkdownEditor

A markdown editor based on [simple MDE editor](https://github.com/RIP21/react-simplemde-editor)

```
import { MarkdownEditor } from 'rendition/dist/extra/MarkdownEditor';
```

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/extra/MarkdownEditor/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| ------ | ------ | --------- | ---------- | ------------- |
| `value`  | `string` | - | ✓ | The markdown-flavored text |
| `onChange`  | `(text: string) => void` | - | ✓ | Callback called on every content change |

### Mermaid

Generate charts from text using [mermaidjs](https://mermaidjs.github.io/).
This component is not loaded by default as it relies on the mermaidjs library
that you may not want to include in your application.
You can load this component using:

```
import { Mermaid } from 'rendition/dist/extra/Mermaid';
```

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/extra/Mermaid/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| ------ | ------ | --------- | ---------- | ------------- |
| `value`  | `string` | - | ✓ | The mermaid source that should be rendered |



### Provider

Wrap your application in the `<Provider>` component so that child components can correctly inherit the default theme. You can optionally provide your own theme.

### Accessing the theme object

You can access the theme object in `<Provider>`'s descendant components using the `useTheme` hook:

```jsx
import React from 'react'
import { useTheme } from 'rendition';

const MyComponent = () => {
  const theme = useTheme()

  // ...
}
```

### Styled system

All components support [styled-system][styled-system] attributes, allowing you to use a shorthand properties for styling components. The properties can have the properties in the form of `string | number | Array<string | number>`. If an array is provided, then a property is chosen based on the width of the screen. The screen width corresponds to a breakpoint set in the `theme` property of the `Provider` component, by default this is set to `[32, 48, 64, 80]` where each number is the screen width in ems.

| Name          | Type              | Description                                  |
| --------------|-------------------|--------------------------------------------- |
|	width         | `ResponsiveStyle` | sets the width
|	minWidth      | `ResponsiveStyle` | sets the min-width
|	maxWidth      | `ResponsiveStyle` | sets the max-width
|	height        | `ResponsiveStyle` | sets the height
|	minHeight     | `ResponsiveStyle` | sets the min-height
|	maxHeight     | `ResponsiveStyle` | sets the max-height
|	fontSize      | `ResponsiveStyle` | sets the font size
|	display       | `ResponsiveStyle` | sets the `display` css property
|	color         | `ResponsiveStyle` | sets the `color` css property
|	bg            | `ResponsiveStyle` | sets the `background` css property
|	m             | `ResponsiveStyle` | sets the `margin` css property
|	mt            | `ResponsiveStyle` | sets the `margin-top` css property
|	mr            | `ResponsiveStyle` | sets the `margin-right` css property
|	mb            | `ResponsiveStyle` | sets the `margin-bottom` css property
|	ml            | `ResponsiveStyle` | sets the `margin-bottom` css property
|	mx            | `ResponsiveStyle` | sets both the `margin-right` and `margin-left` css properties
|	my            | `ResponsiveStyle` | sets both the `margin-top` and `margin-bottom` css properties
|	p             | `ResponsiveStyle` | sets the `padding` css property
|	pt            | `ResponsiveStyle` | sets the `padding-top` css property
|	pr            | `ResponsiveStyle` | sets the `padding-right` css property
|	pb            | `ResponsiveStyle` | sets the `padding-bottom` css property
|	pl            | `ResponsiveStyle` | sets the `padding-left` css property
|	px            | `ResponsiveStyle` | sets both the `padding-right` and `padding-left` css properties
|	py            | `ResponsiveStyle` | sets both the `padding-top` and `padding-bottom` css properties

&ast;*`ResponsiveStyle` corresponds to a type of `string | number | Array<string | number>`*

## Extra components

Some components in the [storybook](https://balena-io-modules.github.io/rendition)
are grouped separately under the `Extra` label. These components are not loaded by default 
as they rely on other large packages that you may not want to include in your 
application.
If you would like to use them they can be loaded using by prefixing the
component name with `rendition/dist/extra/`. For example to load the `Markdown`
components you can use:

```
import { Markdown } from 'rendition/dist/extra/Markdown';
```

## Unstable/Beta components

Some components in the [storybook](https://balena-io-modules.github.io/rendition)
are grouped seperately under the `Beta` label. These components are experimental and still
under development, as such their API may change without notice. They should not 
be used in a production application.
If you would like to try them out they can be loaded using
`import * from 'rendition/dist/unstable'`.

## Upgrading

[Upgrading from 3.x to 4.x](docs/migrating_3x-4x.md)

[Upgrading from 4.x to 5.x](docs/migrating_4x-5x.md)

[Upgrading from 6.x to 7.x](docs/migrating_6x-7x.md)

## Contributing

Please read our [contribution guidelines](docs/CONTRIBUTING.md)

[react]:https://reactjs.org/
[recompose]:https://github.com/acdlite/recompose
[styled-components]:https://www.styled-components.com/
[styled-system]:http://jxnblk.com/styled-system/
[husky]:https://github.com/typicode/husky
