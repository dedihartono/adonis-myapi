"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return {
    status: true,
    message: "Dedi Hartono in here"
  };
});

Route.group(() => {
  Route.get("user", "UserController.index");
  Route.get("article", "ArticleController.index");
}).prefix("api/v1");
