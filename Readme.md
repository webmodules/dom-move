# dom-move

Moves child elements from a DOM node to another dom node.

## usage

```javascript
move(source, destination);
```

All the child nodes of `source` will be removed, and appended in `destination`. The `destination` node is returned so you can do:

```javascript
var content = move(source, document.createElement('div'));
```

If the second parameter is ommited, a document fragment is created:

```javascript
var fragment = move(source);
```