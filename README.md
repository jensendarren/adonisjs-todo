# Adonis JS ToDo REST API Example

## Introduction

In this example we will create a REST API to support a ToDo app (front end code not included!). 

Since this is an api only application that we want, we created the app using the `--api-only` flag like so:

```
adonis new todoapi --api-only
```

Then we start the development server using the `serve` command with the `--dev` switch, like so:

```
adonis serve --dev
```

Now open the [root route](http://127.0.0.1:3333) of the REST API in a new browser window.

Let's say you want to make a new controller, then use the CLI to do that:

```
adonis make:controller User
```

If you need to run database migrations then, again, use the CLI:

```
adonis migration:run
```

