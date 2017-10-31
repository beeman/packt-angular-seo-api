// 'use strict';
//
// const Promise = require('bluebird')
// const faker = require('faker')
//
// // Helper method to remove all items from a model and create new ones
// const removeAllAddNew = (model, data) => Promise.resolve()
//   .then(() => model.destroyAll())
//   .then(() => model.create(data))
//   .then(res => console.log(`Model ${model.modelName}: ${res.length} items added`))
//
// const randomInt = (end = 10, start = 1) => Math.round(Math.random() *  ( end -1 ) ) + start
//
// const createPosts = (profile) => {
//   const type = faker.random.arrayElement([
//     'text', 'text', 'text', 'text', 'text', 'text',
//     'image', 'image', 'image',
//     'link',
//   ])
//
//   const post = {
//     profileId: profile.id,
//     type,
//     date: faker.date.recent()
//   }
//
//   switch (type) {
//     case 'text':
//       post['text'] = faker.lorem.text()
//       break;
//     case 'image':
//       post['image'] = faker.random.image()
//       break;
//     case 'link':
//       post['link'] = faker.internet.url()
//       break;
//   }
//   return post
// }
//
// module.exports = app => {
//
//   const posts = []
//   const Post = app.models.Post
//   const Profile = app.models.Profile
//
//   return Profile.find()
//     .then(profiles => profiles.forEach(profile => {
//       const numOfPosts = randomInt()
//       for(let i = 0; i < numOfPosts; i++) {
//         posts.push(createPosts(profile))
//       }
//     }))
//     .then(() => removeAllAddNew(Post, posts))
// }
