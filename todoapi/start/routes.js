'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('/auth/register', 'UserController.register')
  Route.post('/auth/login', 'UserController.login')
  
  Route.get('/projects', 'ProjectController.index')
  Route.post('/projects', 'ProjectController.create')
  Route.delete('/projects/:id', 'ProjectController.destroy')
  Route.patch('/projects/:id', 'ProjectController.update')

  Route.get('/projects/:id/tasks', 'TaskController.index')
  Route.post('/projects/:id/tasks', 'TaskController.create')

  Route.delete('/tasks/:id', 'TaskController.destroy')
  Route.patch('/tasks/:id', 'TaskController.update')
}).prefix('api')
