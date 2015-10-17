import { expect } from 'chai';
import { h } from 'preact';
import render from 'preact-render-to-string';
import { Header, Footer, Title, TabGroup, Tab } from '../src';

/** @jsx h */

describe('preact-photon', () => {
	describe('<Header>', () => {
		it('should render the correct HTML', () => {
			expect(render(<Header />)).to.equal('<header class="toolbar toolbar-header"></header>');
		});

		it('should render children', () => {
			expect(render(<Header>foo</Header>)).to.equal('<header class="toolbar toolbar-header">foo</header>');
		});
	});

	describe('<Footer>', () => {
		it('should render the correct HTML', () => {
			expect(render(<Footer />)).to.equal('<footer class="toolbar toolbar-footer"></footer>');
		});

		it('should render children', () => {
			expect(render(<Footer>foo</Footer>)).to.equal('<footer class="toolbar toolbar-footer">foo</footer>');
		});
	});

	describe('<Title>', () => {
		it('should render the correct HTML', () => {
			expect(render(<Title>foo</Title>)).to.equal('<h1 class="title">foo</h1>');
		});
	});

	describe('<TabGroup>', () => {
		it('should render the correct HTML', () => {
			expect(render(<TabGroup>foo</TabGroup>)).to.equal('<div class="tab-group">foo</div>');
		});
	});

	describe('<Tab>', () => {
		it('should render with close button', () => {
			expect(render(<Tab>foo</Tab>)).to.equal('<div class="tab-item"><span class="icon-close-tab icon icon-cancel"></span>foo</div>');
		});

		it('should render without close button', () => {
			expect(render(<Tab close="false">bar</Tab>)).to.equal('<div class="tab-item">bar</div>');
		});
	});
});


// let cases = [];
//
// cases.push({
// 	name: '<Header>',
// 	test: () => (
// 		<Header>
// 			<Title>FOO</Title>
// 		</Header>
// 	),
// 	reference: `<header class="toolbar toolbar-header"><h1 class="title">FOO</h1></header>`
// });
//
// cases.forEach( ({ name, test, reference }) => {
// 	let rendered = test();
// 	console.log(name);
// 	assert.equal(rendered, reference);
// 	console.log(`  ✔ passed`);
// });
//
// console.log(`${cases.length} cases passed.`);
