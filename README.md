boomers-iconized-menu
=================

Yo! So, this is an react sidebar menu that uses icons from font-awesome, it has 
multiple panes and is easy to use and customize.

## How it looks like

<p align="center">
  <img src="https://raw.githubusercontent.com/boomersoficial/boomers-iconized-menu/master/imgs/example.jpeg" width="400" title="Github Logo">
</p>

## How to install

Install it via npm:
```
npm i boomers-iconized-menu
```

Add the desired version of font-awesome to your app:
```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
```

Tadaaaa!

## How to use this bad-ass menu

```
<IconMenu>
  <IconMenuItem 
    icon="fab fa-apple" 
    type={IconMenuItemType.Panel} >
    <div>
      You cool content!
    </div>
  </IconMenuItem>

  <IconMenuItem icon="fab fa-aws" 
    type={IconMenuItemType.Action}
    onClick={() => { console.log('do some custom stuff'); }} />

</IconMenu>
```

## IconMenuItemType's

There's two types of IconMenuItem:

**  IconMenuItemType.Panel: will open a side panel with the content you placed inside IconmenuItem
**  IconMenuItemType.Action: will trigger the action you placed inside onClick


## Styling - CSS

You can customize the menu styles (bar size, icons size, colors, etc..) by overwriting css.

### Menu bar width

Default is: 60px;

```
#boomers-menu-icon-area {
  width: 100px;
}
```

### Menu bar color

Default is: rgba(0, 0, 0, 0.5);

```
#boomers-menu-icon-area {
  background-color: rgba(255, 0, 0, 0.5);
}
```

### Icons color

Default is: white;

```
#boomers-menu-icon-area ul li {
  color: darkorange;
}
```

### Icon color on hover

Default is: rgba(135, 196, 250, 1);

```
#boomers-menu-icon-area ul li:hover {
  color: pink;
}
```

### Icons size

Default is: font-size: 35px;

```
#boomers-menu-icon-area ul li {
  font-size: 100px;
}
```

### Your menu content area

You can customize your menu content area by inline styling, e.g.:

```
<IconMenuItem icon="fab fa-apple">
  <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5); width: 300px; ' }}>
    Super dope menu
  </div>
</IconMenuItem>
```
### Help

If you need help: [open a new issue](https://github.com/boomersoficial/boomers-iconized-menu/issues)

### License

MIT
