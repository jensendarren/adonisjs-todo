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

I recommending refreshing the database and running seed too:

```
adonis migration:refresh
adonis seed
```

Now open the [root route](http://127.0.0.1:3333) of the REST API in a new browser window.

Let's say you want to make a new controller, then use the CLI to do that:

```
adonis make:controller User
```

Making new models is similar except we generally must pass `-m` to ensure that a migration is created:

```
adonis make:model Project -m

```

We can also make custom exceptions very easily using the CLI as follows:

```
adonis make:exception InvalidAccess
```

If you need to run database migrations then, again, use the CLI:

```
adonis migration:run
```

### Debugging the app via the adonis REPL

Similar to `rails console` in adonis you can start a console session using `adonis repl` CLI command.

Then in the `REPL` session you can run something like:

```
const User = use('App/Models/User');
user = await User.find(1)
user

const Project = use('App/Models/Project');
project = await Project.first()
project
```

### Enable Database Debugging

Check out the instructions on the Adonis website to [enable debugging at the database](https://adonisjs.com/docs/4.1/database#_debugging).

### Seeding the database 

Simply add the factories for each model you want to seed and create a seed to perform the action. Then run the CLI execute the seed:

For example a User seed:

```
const Factory = use('Factory')
const Database = use('Database')

class UserSeeder {
  async run () {
    const usersArray = await Factory
      .model('App/Models/User')
      .createMany(5)
  }
}

module.exports = UserSeeder
```

A User Factory:

```
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    email: faker.email(),
    password: faker.password(),
    username: faker.username()
  }
})
```

To run the seed on the CLI:

```
adonis seed
```