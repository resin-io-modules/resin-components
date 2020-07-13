# Header

Display page header with Logo and navbar.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/Next/Header.js)

## Props

| Name        | Type                                                                                            | Default | Required | Description                                                  |
| ----------- | ----------------------------------------------------------------------------------------------- | ------- | -------- | ------------------------------------------------------------ |
| `logo`      | `string`                                                                                        | -       | true     | Sets Brand Logo in header                                    |
| `logoAlt`   | `string`                                                                                        | -       | true     | Brand Logo Alt Text                                          |
| `rootRoute` | `string`                                                                                        | -       | true     | Brand Logo Root route for Links                              |
| `routes`    | `{ title: string; showDividers?: boolean; path?: string; blank?: boolean; routes: Route[]; }[]` | -       | true     | List of links and sub links for nav                          |
| `actions`   | `React.ReactElement`                                                                            | -       | true     | Additional menu buttons, for ex. login/dowload/signup button |
