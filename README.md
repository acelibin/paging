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

## createData

```js
var pagingData = Paging.createData({
    page: 1,
    pagecount: 10
})
console.log(pagingData)
```
