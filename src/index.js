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

export const Header = componentNode('header', ['toolbar toolbar-header']);

export const Footer = componentNode('footer', ['toolbar toolbar-footer']);

export const Title = componentNode('h1', 'title');

export const ButtonGroup = componentNode('div', 'btn-group');

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

export const Icon = component( ({ class:className, text, name, children, ...props }) => (
	<span {...props} class={c(className, `icon icon-${name}`, text && 'icon-text')}>{ children }</span>
));

export const TabGroup = componentNode('div', 'tab-group');

export const Tab = component( ({ class:className, close, children, ...props }) => (
	<div class={c(className, 'tab-item')}>
		{ String(close)==='false' ? null : <Icon name="cancel" class="icon-close-tab" /> }
		{ children }
	</div>
));

TabGroup.Item = Tab;

export const NavGroup = componentNode('nav', 'nav-group');

NavGroup.Title = componentNode('h5', 'nav-group-title');

NavGroup.Item = component( ({ class:className, icon, children, ...props }) => (
	<span {...props} class={c(className, 'nav-group-item')}>
		{ icon ? (<Icon name={icon} />) : null }
		{ children }
	</span>
));

export const ListGroup = componentNode('ul', 'list-group');

ListGroup.Header = componentNode('li', 'list-group-header');

ListGroup.Item = componentNode('li', 'list-group-item');

const Form = componentNode('form');

Form.Group = componentNode('div', 'form-group');

Form.CheckBox = component( ({ class:className, name, checked, value, label, children, ...props }) => (
	<div {...props} class={c(className, 'checkbox')}>
		<label>
			<input type="checkbox" name={name} checked={checked} value={value} />
			{ label || null }
			{ children }
		</label>
	</div>
));

Form.Radio = component( ({ class:className, name, checked, value, label, children, ...props }) => (
	<div {...props} class={c(className, 'radio')}>
		<label>
			<input type="radio" name={name} checked={checked} value={value} />
			{ label || null }
			{ children }
		</label>
	</div>
));

Form.Actions = componentNode('div', 'form-actions');

export const Table = component( ({ class:className, striped, children, ...props }) => (
	<table {...props} class={c(className, striped && 'table-striped')}>
		{ children }
	</table>
));
