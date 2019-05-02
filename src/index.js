/** @jsx h */
import { h } from 'preact';

const EMPTY = {};

/** @private */
let component = render => (props=EMPTY) => render(props);

/** @private */
let c = (...args) => [].concat(...args.filter( x => x )).join(' ');

/** @private */
let componentNode = (Name, classes) => component( ({ children, ...props }) => (
	<Name {...props} class={c(props.class, classes)}>{children}</Name>
));

/** App "footer" bar, shown at the bottom of a window.
 *	@class
 */
export const Header = componentNode('header', ['toolbar toolbar-header']);

/** App "header" bar, shown at the top of a window.
 *	@class
 */
export const Footer = componentNode('footer', ['toolbar toolbar-footer']);

/** Toolbar title.
 *	@class
 */
export const Title = componentNode('h1', 'title');


/** Group buttons together.
 *	@class
 *	@example
 *	<ButtonGroup>
 *		<Button>One</Button>
 *		<Button>Two</Button>
 *	</ButtonGroup>
 */
export const ButtonGroup = componentNode('div', 'btn-group');

/** Buttons. They are clickable.
 *	@class
 *	@param {object} props
 *	@param {string} [icon]				If supplied, shows the given named icon to the left of the button text
 *	@param {boolean} [primary=false]	Make the button display as a default action
 *	@example
 *	<Button>Label Text</Button>
 *	@example
 *	<Button icon="home">Home</Button>
 *	@example
 *	<Button large>Large Button</Button>
 *	@example
 *	<Button mini>Small Button</Button>
 *	@example
 *	<Button primary>Preferred Action</Button>
 *	@example
 *	<Button type="positive">Green</Button>
 *	@example
 *	<Button type="negative">Red</Button>
 *	@example
 *	<Button type="warning">Yellow</Button>
 */
export const Button = component( ({
	class: className,
	children,
	icon,
	type,
	primary,
	dropdown,
	mini,
	large,
	form,
	...props
}) => (
	<button {...props} class={c(
		className,
		`btn btn-${type || (primary ? 'primary' : 'default')}`,
		dropdown && 'btn-dropdown',
		large && 'btn-large',
		mini && 'btn-mini',
		form && 'btn-form'
	)}>
		{ icon ? (<Icon name={icon} text={ children && children.length ? true : null } />) : null }
		{ children }
	</button>
));


/** A named icon/glyph from the nice built-in list of icons.
 *	@class
 *	@example
 *	<Icon name="close" />
 */
export const Icon = component( ({ class:className, text, name, children, ...props }) => (
	<span {...props} class={c(className, `icon icon-${name}`, text && 'icon-text')}>{ children }</span>
));


/** Groups tabs together into a horizontal.
 *	@class
 *	@example
 *	<TabGroup>
 *		<Tab>One</Tab>
 *		<Tab>Two</Tab>
 *	</TabGroup>
 */
export const TabGroup = componentNode('div', 'tab-group');

/** For building MDIs. Has a close button by default, add `close="false"` to turn it off.
 *	@class
 *	@example
 *	<Tab>title</Tab>
 *	@example
 *	<Tab close="false">title</Tab>
 */
export const Tab = component( ({ class:className, close, children, ...props }) => (
	<div class={c(className, 'tab-item')}>
		{ String(close)==='false' ? null : <Icon name="cancel" class="icon-close-tab" /> }
		{ children }
	</div>
));

TabGroup.Item = Tab;


/** Group of sidebar navigation items
 *	@class
 *	@example
 *	<NavGroup>
 *		<NavGroup.Title>Faves</NavGroup.Title>
 *		<NavGroup.Item>Foo</NavGroup.Item>
 *	</NavGroup>
 */
export const NavGroup = componentNode('nav', 'nav-group');

/** Title for a group of navigation items.
 *	@class
 *	@example
 *	<NavGroup.Title>Faves</NavGroup.Title>
 */
NavGroup.Title = componentNode('h5', 'nav-group-title');

/** A single navigation item with optional icon.
 *	@class
 *	@example
 *	<NavGroup.Item>Home</NavGroup.Item>
 *	@example
 *	<NavGroup.Item icon="folder">Documents</NavGroup.Item>
 */
NavGroup.Item = component( ({ class:className, icon, children, ...props }) => (
	<span {...props} class={c(className, 'nav-group-item')}>
		{ icon ? (<Icon name={icon} />) : null }
		{ children }
	</span>
));


/** Group of list items
 *	@class
 *	@example
 *	<ListGroup>
 *		<ListGroup.Header>
 *			<input class="form-control" type="text" placeholder="Search...">
 *		</ListGroup.Header>
 *		<ListGroup.Item>Foo</ListGroup.Item>
 *	</ListGroup>
 */
export const ListGroup = componentNode('ul', 'list-group');

/** Top header item in a list group.
 *	@class
 *	@example
 *	<ListGroup.Header>
 *		<input class="form-control" type="text" placeholder="Search...">
 *	</ListGroup.Header>
 */
ListGroup.Header = componentNode('li', 'list-group-header');

/** A single navigation item with optional icon.
 *	@class
 *	@example
 *	<ListGroup.Item>Home</ListGroup.Item>
 */
ListGroup.Item = componentNode('li', 'list-group-item');


/** HTML `<form>` */
export const Form = componentNode('form');

/** Basically `<fieldset>` */
Form.Group = componentNode('div', 'form-group');

/** Basically `<input type="checkbox">` */
Form.CheckBox = component( ({ class:className, name, checked, value, label, children, ...props }) => (
	<div {...props} class={c(className, 'checkbox')}>
		<label>
			<input type="checkbox" name={name} checked={checked} value={value} />
			{ label || null }
			{ children }
		</label>
	</div>
));

/** Basically `<input type="radio">` */
Form.Radio = component( ({ class:className, name, checked, value, label, children, ...props }) => (
	<div {...props} class={c(className, 'radio')}>
		<label>
			<input type="radio" name={name} checked={checked} value={value} />
			{ label || null }
			{ children }
		</label>
	</div>
));

/** Group buttons at the bottom of a form. */
Form.Actions = componentNode('div', 'form-actions');


/** Just an enhanced `<table>` */
export const Table = component( ({ class:className, striped, children, ...props }) => (
	<table {...props} class={c(className, striped && 'table-striped')}>
		{ children }
	</table>
));


// export class Header extends Component {
// 	render({ toolbar, title, children }) {
// 		return (
// 			<header class="toolbar toolbar-header">
// 				{ title ? (<h1 class="title">{ title }</h1>) : null }
// 				{ children }
// 			</header>
// 		);
// 	}
// }
//
// export class Button extends Component {
// 	render({ icon, children }) {
// 		return (
// 			<button class="btn btn-default">
// 				{ icon ? (<Icon icon="home" text />) : null }
// 				{ children }
// 			</button>
// 		);
// 	}
// }
