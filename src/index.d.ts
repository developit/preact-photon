import {
  h,
  RenderableProps,
  Component,
  AnyComponent,
  Attributes
} from "preact"

declare module "preact-photon" {
  type RenderFunction = <P, S>(props: P & Attributes, state: S) => JSX.Element

  interface IStylable {
    class?: string
  }

  /** App "footer" bar, shown at the bottom of a window.
   *	@class
   */
  export class Footer extends Component {
    public render: RenderFunction
  }

  /** App "header" bar, shown at the top of a window.
   *	@class
   */
  export class Header extends Component {
    public render: RenderFunction
  }

  /** Toolbar title.
   *	@class
   */
  export class Title extends Component {
    public render: RenderFunction
  }

  /** Group buttons together.
   *	@class
   *	@example
   *	<ButtonGroup>
   *		<Button>One</Button>
   *		<Button>Two</Button>
   *	</ButtonGroup>
   */
  export class ButtonGroup extends Component {
    public render: RenderFunction
  }

  /** Buttons. They are clickable.
   *	@class
   *	@param props.icon				If supplied, shows the given named icon to the left of the button text
   *	@param props.primary  	Make the button display as a default action
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
  export class Button extends Component<
    RenderableProps<
      IStylable & {
        icon?: string
        primary?: boolean
        large?: boolean
        mini?: boolean
        dropdown?: boolean
        form?: boolean
        type?: "positive" | "negative" | "warning"
      }
    >
  > {
    public render: RenderFunction
  }

  /** A named icon/glyph from the nice built-in list of icons.
   *	@class
   *	@example
   *	<Icon name="close" />
   */
  export class Icon extends Component<
    RenderableProps<IStylable & { text?: string; name: IconIdentifier }>
  > {
    public render: RenderFunction
  }

  /** Groups tabs together into a horizontal.
   *	@class
   *	@example
   *	<TabGroup>
   *		<Tab>One</Tab>
   *		<Tab>Two</Tab>
   *	</TabGroup>
   */
  export class TabGroup extends Component {
    public static Item: typeof Tab
    public render: RenderFunction
  }

  /** For building MDIs. Has a close button by default, add `close="false"` to turn it off.
   *	@class
   *	@example
   *	<Tab>title</Tab>
   *	@example
   *	<Tab close="false">title</Tab>
   */
  export class Tab extends Component<
    RenderableProps<IStylable & { close?: false | "false" }>
  > {
    public render: RenderFunction
  }

  /** Group of sidebar navigation items
   *	@class
   *	@example
   *	<NavGroup>
   *		<NavGroup.Title>Faves</NavGroup.Title>
   *		<NavGroup.Item>Foo</NavGroup.Item>
   *	</NavGroup>
   */
  export class NavGroup extends Component {
    public static Title: typeof NavGroupTitle
    public static Item: typeof NavGroupItem
    public render: RenderFunction
  }

  /** Title for a group of navigation items.
   *	@class
   *	@example
   *	<NavGroup.Title>Faves</NavGroup.Title>
   */
  export class NavGroupTitle extends Component {
    public render: RenderFunction
  }

  /** A single navigation item with optional icon.
   *	@class
   *	@example
   *	<NavGroup.Item>Home</NavGroup.Item>
   *	@example
   *	<NavGroup.Item icon="folder">Documents</NavGroup.Item>
   */
  export class NavGroupItem extends Component<
    RenderableProps<IStylable & { icon: IconIdentifier }>
  > {
    public render: RenderFunction
  }

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
  export class ListGroup extends Component {
    public static Header: typeof ListGroupHeader
    public static Item: typeof ListGroupItem
    public render: RenderFunction
  }

  /** Top header item in a list group.
   *	@class
   *	@example
   *	<ListGroup.Header>
   *		<input class="form-control" type="text" placeholder="Search...">
   *	</ListGroup.Header>
   */
  export class ListGroupHeader extends Component {
    public render: RenderFunction
  }

  /** A single navigation item with optional icon.
   *	@class
   *	@example
   *	<ListGroup.Item>Home</ListGroup.Item>
   */
  export class ListGroupItem extends Component {
    public render: RenderFunction
  }

  /** HTML `<form>` */
  export class Form extends Component {
    public static Group: typeof FormGroup
    public static CheckBox: typeof FormCheckBox
    public static Radio: typeof FormRadio
    public static Actions: typeof FormActions
    public render: RenderFunction
  }

  /** Basically `<fieldset>` */
  export class FormGroup extends Component {
    public render: RenderFunction
  }

  /** Basically `<input type="checkbox">` */
  export class FormCheckBox extends Component<
    RenderableProps<
      IStylable & {
        name: string
        checked?: boolean
        value?: string | number | string[]
        label?: AnyComponent
      }
    >
  > {
    public render: RenderFunction
  }

  /** Basically `<input type="radio">` */
  export class FormRadio extends Component<
    RenderableProps<
      IStylable & {
        name: string
        checked?: boolean
        value?: string | number | string[]
        label?: AnyComponent
      }
    >
  > {
    public render: RenderFunction
  }

  /** Group buttons at the bottom of a form. */
  export class FormActions extends Component {
    public render: RenderFunction
  }

  /** Just an enhanced `<table>` */
  export class Table extends Component<
    RenderableProps<IStylable & { striped?: boolean }>
  > {
    public render: RenderFunction
  }
}
