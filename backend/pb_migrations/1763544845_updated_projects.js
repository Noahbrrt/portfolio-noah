/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3660510")

  // remove field
  collection.fields.removeById("text3942309495")

  // add field
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3660510")

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3942309495",
    "max": 0,
    "min": 0,
    "name": "tools",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select1764318128")

  return app.save(collection)
})
