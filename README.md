# alfred-change-case
> A simple Alfred workflow to change the case of the clipboard text.


## Install
Just [download the Alfred workflow](https://github.com/derBingle/alfred-change-case/blob/master/alfred-change-case.alfredworkflow?raw=true) from Github, and double click the file to install in Alfred.
*Requires internet access and the Alfred [Powerpack](https://www.alfredapp.com/powerpack/).*


## Usage
Type `case` in the Alfred window, and choose the case you want to use. The original clipboard text will be overwritten with the same text in the new case, and the text will be automatically pasted into the frontmost app. If you don't want this behavior, you can turn it off in the last node in the workflow canvas.

<img src="/alfred-change-case-screenshot.png" width="694">

## Credits

-  [`titlecase`](https://www.npmjs.com/package/titlecase) is used for... switching to title case. Rather than just capitalizing all words, it conforms to standard English title case usage for articles, etc.

-  [`lodash`](lodash.com) is used for all other cases.

-  [`zeit/now`](https://zeit.co/blog/micro-8) is used to host the code for switching cases.


## License

MIT © [Luke Wilson](http://derbingle.blog)
