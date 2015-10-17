# preact-photon [![NPM](http://img.shields.io/npm/v/preact-photon.svg?style=flat)](https://www.npmjs.org/package/preact-photon)

A little wrapper around [photon] to make it cake to use via [preact].

Requires that you already have the [photon] CSS included in your app.

```js
import { h } from 'preact';
import { Header, Title, Footer, Button } from 'preact-photon';

/** Example app component */
export () => (
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
```

[photon]: https://github.com/connors/photon
[preact]: https://github.com/developit/preact
