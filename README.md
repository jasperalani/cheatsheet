### Cheatsheet

##### Useful code for starting a new project#

&nbsp;
#### php.ini
[php.ini](php.ini)

&nbsp;
#### npm
```
$ npm install --save-dev gulp gulp-sass gulp-changed gulp-minify jquery
```

&nbsp;
#### docker
```
$ docker stop $(docker ps -aq --all)
$ docker-compose up
```

&nbsp;
#### .env ironment file
```
APP_NAME=cheatsheet
MYSQL_DATABASE=cheatsheet
MYSQL_USER=cheater
MYSQL_PASSWORD=withasheet
MYSQL_ROOT_PASSWORD=withasheetofpower
```

&nbsp;
#### linux docker aliases
```
alias ds='docker stop $(docker ps -aq)'
alias dcu='docker-compose up'
```


&nbsp;
#### SQL

Find largest table in database
`SELECT table_name AS "Table", round(((data_length + index_length) / 1024 / 1024), 2) "Table size in MB" FROM information_schema.TABLES order by data_length+index_length desc limit 1;`