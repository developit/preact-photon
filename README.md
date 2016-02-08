# preact-photon

[![NPM](http://img.shields.io/npm/v/preact-photon.svg?style=flat)](https://www.npmjs.org/package/preact-photon)
[![travis-ci](https://travis-ci.org/developit/preact-photon.svg?branch=master)](https://travis-ci.org/developit/preact-photon)


A little wrapper around [photon] to make it cake to use via [preact] _(or React `*`)_.

This requires that you already have the [photon] CSS included in your app.


## What does it look like?

Well, this: **[Preact + Photon = <3](http://codepen.io/developit/pen/ZbajXQ?editors=001)** _(@ [CodePen](http://codepen.io/developit/pen/ZbajXQ?editors=001) or [JSFiddle](https://jsfiddle.net/developit/g5qnLnue/))_

<img src="http://i.imgur.com/9EgPkqg.png" width="646" height="346" title="preact+photon">


---


## Usage

```js
import { h, render } from 'preact';
import { Header, Title, Footer, Button } from 'preact-photon';

/** Example app component */
const App = () => (
	<div id="app">
		<Header>
			<Title>Great App</Title>
			<Button icon="home">Home</Button>
		<Header>

		<section>
			Hello there.
		</section>

		<Footer>
			<span>Some great content here.</span>
		</Footer>
	</div>
);

render(<App />, document.body);
```

---

## License

[MIT]

---

`*` ... though I haven't tested it.

[photon]: https://github.com/connors/photon
[preact]: https://github.com/developit/preact
[MIT]: http://choosealicense.com/licenses/mit
