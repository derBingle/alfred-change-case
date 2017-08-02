# alfred-change-case
> A simple Alfred workflow to change the case of the clipboard text.


## Install

```
$ npm install --global alfred-change-case
```
*Requires [Node.js](https://nodejs.org) and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Usage
Type `case` in the Alfred window, and choose the case you want to use. The original clipboard text will be overwritten with the same text in the new case.

<img src="/alfred-change-case-screenshot.png" width="694">

## Credits

-  [`titlecase`](https://www.npmjs.com/package/titlecase) is used for... switching to title case. Rather than just capitalizing all words, it conforms to standard English title case usage for articles, etc.

-  [`lodash`](lodash.com) is used for all other cases.

-  [`alfred-link`](https://github.com/samverschueren/alfred-link) is used to install via npm.

## License

MIT © [Luke Wilson](http://derbingle.blog)
