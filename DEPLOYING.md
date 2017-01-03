## Publishing esify

Pull from master.

```
git checkout master
git pull origin master
npm version [patch|minor|major]
```

This will:
- Update the version number in package.json
- Create a commit
- Create a tag

Now push everything up to Github:

```
git push origin master --tags
```

Then deploy to npm via [Shipit](https://shipit.shopify.io/shopify/esify/production)
