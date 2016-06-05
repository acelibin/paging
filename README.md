# Paging

## install

```shell
npm i paging --save
```

```js
var Paging = require('paging')
```

## render

<!-- markrun -->
```js
var html = Paging.render({
    page: 1,
    pagecount: 10
})
console.log(html)
```

### Custom className

<!-- markrun -->
```js
var html = Paging.render({
    page: 1,
    pagecount: 10,
    class: 'my-paging'
})
console.log(html)
```

## createData

```js
var pagingData = Paging.createData({
    page: 1,
    pagecount: 10
})
console.log(pagingData)
```
