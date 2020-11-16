# Button

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Button/story.js)

## Props

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
