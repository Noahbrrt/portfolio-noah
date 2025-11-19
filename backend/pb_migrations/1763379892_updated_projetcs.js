/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3660510")

  // update collection data
  unmarshal({
    "name": "projects"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3660510")

  // update collection data
  unmarshal({
    "name": "projetcs"
  }, collection)

  return app.save(collection)
})
