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
- [Badge](#badge)
- [Banner](#banner)
- [Box](#box)
- [Button](#button)
- [ButtonGroup](#buttongroup)
- [Card](#card)
- [Checkbox](#checkbox)
- [Container](#container)
- [Copy](#copy)
- [Divider](#divider)
- [DropDownButton](#dropdownbutton)
- [Filters](#filters)
- [Fixed](#fixed)
- [Flex](#flex)
- [Header](#header)
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
- [TextWithCopy](#textwithcopy)
- [Textarea](#textarea)
- [Tooltips](#tooltips)
- [Txt](#txt)
- [Markdown](#markdown)
- [MarkdownEditor](#markdowneditor)
- [Mermaid](#mermaid)
- [Form](#form)

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
| `quarternary` | `boolean` | -         | -          | If true, use the `quarternary` theme color           |
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
### Header

Display page header with Logo and navbar.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Next/Header.js)

#### Props

| Name        | Type                                                                                            | Default | Required | Description                                                  |
| ----------- | ----------------------------------------------------------------------------------------------- | ------- | -------- | ------------------------------------------------------------ |
| `logo`      | `string`                                                                                        | -       | true     | Sets Brand Logo in header                                    |
| `logoAlt`   | `string`                                                                                        | -       | true     | Brand Logo Alt Text                                          |
| `rootRoute` | `string`                                                                                        | -       | true     | Brand Logo Root route for Links                              |
| `routes`    | `{ title: string; showDividers?: boolean; path?: string; blank?: boolean; routes: Route[]; }[]` | -       | true     | List of links and sub links for nav                          |
| `actions`   | `React.ReactElement`                                                                            | -       | true     | Additional menu buttons, for ex. login/dowload/signup button |

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
| `id`        | `number`  | (random)         | -          | A custom id for the notification                      |
| `baselineHeight`        | `number`  |  Normal text line height        | -          | The base height of the content, used to align the dismiss button correctly |
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
| `onClose` | `() => void` | - | - | Callback method, that if passed, a "close" button will be added to the right-hand side of the tag|
| `onClick` | `() => void` | - | - | Callback method, that if passed, the tag will become clickable |

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
### TextWithCopy

Displays text that can be copied to the clipboard.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/TextWithCopy/story.js)

#### Props

| Name          | Type      | Default   | Required   | Description                                          |
| ------ | ------ | --------- | ---------- | ------------- |
| `copy`      | `string` | -         | ✓          | The value that should be copied to the clipboard
| `showCopyButton`      | <code>'hover' &#124; 'always'</code> | - | - | Optionally show the copy button on hover or always show the button

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


[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/extra/Markdown/story.js)

#### Props

| Name   | Type   | Default   | Required   | Description   |
| ------ | ------ | --------- | ---------- | ------------- |
| `children`  | `string` | - | ✓ | The markdown source that should be rendered |
| `sanitizerOptions` | [`sanitizeHtml.IOptions`](https://github.com/apostrophecms/sanitize-html#how-to-use) | (See `extra/utils/defaultSanitizerOptions`) | - | Specifies the options used when sanitizing the generated HTML. |

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

This component is experimental and still under development, if you would like to
use it, it can be imported using `import { Form } from 'rendition/dist/unstable'`.

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

If you wish to use a captcha (google recaptcha v2) in your form, you need to load the `captcha` widget using `import { CaptchaWidget } from 'rendition/dist/extra/Form/captcha'` and register it using `registerWidget` (see [story source](https://github.com/balena-io-modules/rendition/blob/master/src/unstable/components/Form/story.js)).

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
| `value` | `*` | - | - | The data that should be displayed in the form |
| `onFormChange` | `(result: object) => void` | - | - | A function that is called when form data changes |
| `onFormSubmit` | `(result: object) => void` | - | - | A function that is called when the form is submitted |
| `uiSchema` | `object` | - | - | A configuration object used to change the styling and layout of the form. See the [`react-jsonschema-form`](https://github.com/mozilla-services/react-jsonschema-form) docs for more details |


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
