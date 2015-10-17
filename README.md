# preact-photon [![NPM](http://img.shields.io/npm/v/preact-photon.svg?style=flat)](https://www.npmjs.org/package/preact-photon)

A little wrapper around [photon] to make it cake to use via [preact] _(or React `*`)_.

Requires that you already have the [photon] CSS included in your app.

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

`*` ... though I haven't tested it.

[photon]: https://github.com/connors/photon
[preact]: https://github.com/developit/preact
