# example-monorepo

monorepoでライブラリ開発する際にどういう構造でやっていくとよいのかのプロトタイピング

## dependencies

[verdaccio](https://verdaccio.org/)が`http://0.0.0.0:4873`で動いていることを前提とする。

```
docker run -it --rm -p4873:4873 verdaccio/verdaccio:nightly-master
```

## installation

cloneしてね

```
npm ci
npm version
npm publish
```


