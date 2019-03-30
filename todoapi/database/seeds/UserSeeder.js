'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class UserSeeder {
  async run () {
    const user = await Factory
      .model('App/Models/User')
      .create()

    const project = await Factory.model('App/Models/Project').make()

    await user.projects().save(project)
  }
}

module.exports = UserSeeder
