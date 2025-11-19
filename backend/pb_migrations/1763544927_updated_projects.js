/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3660510")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select1764318128",
    "maxSelect": 2,
    "name": "tools",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "figma",
      "Astro/Tailwind",
      "Wordpress",
      "Photoshop"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3660510")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select1764318128",
    "maxSelect": 2,
    "name": "toold",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "figma",
      "Astro/Tailwind",
      "Wordpress",
      "Photoshop"
    ]
  }))

  return app.save(collection)
})
