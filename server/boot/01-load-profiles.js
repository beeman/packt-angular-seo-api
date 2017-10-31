'use strict';

const Promise = require('bluebird')

// Load the profiles from the sample data
const profiles = require('./sample-data/profiles.json')
const posts = require('./sample-data/posts.json')

// Get the image root from the environment or use the default value for local development
const imageRoot = process.env.IMAGE_ROOT || 'http://localhost:3000/avatars/'

// Helper to map over the items and prepend the image url
const setAvatarUrl = (items) => items.map(item => Object.assign(item, {avatar: imageRoot + item.avatar}))

// Helper method to remove all items from a model and create new ones
const removeAllAddNew = (model, data) => Promise.resolve()
  .then(() => model.destroyAll())
  .then(() => model.create(data))
  .then(res => console.log(`Model ${model.modelName}: ${res.length} items added`))

// The actual boot script loads the patched profiles
module.exports = app => Promise.all([
  removeAllAddNew(app.models.Profile, setAvatarUrl(profiles)),
  removeAllAddNew(app.models.Post, posts),
])
