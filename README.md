# kottans-backend

## Version Control with Git
### Things that were new to me:

**Show commit statistics**
```sh
$ git log --stat
```

**Display changes made to a file**
```sh
$ git log --patch
$ git log -p
```
**Ignore whitespace when comparing lines.**
```sh
$ -w
```
**Display most recent commit**
```sh
$ git show SHA
```

**Search commits by commit message**
```sh
git log --all --grep='Convert social links from text to images'
```

**see changes that have been made but haven't been committed, yet**
```sh
$ git diff
```

**Tag a commit**
```sh
$ git tag -a beta
```
**Delete a tag**
```sh
$ git tag -d beta
```
