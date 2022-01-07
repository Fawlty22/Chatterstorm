const { Post } = require('../models');

const postdata = [
  {
    post_title: 'Donec posuere metus vitae ipsum.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 10
  },
  {
    post_title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 8
  },
  {
    post_title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 1
  },
  {
    post_title: 'Nunc purus.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 4
  },
  {
    post_title: 'Pellentesque eget nunc.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 7
  },
  {
    post_title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 4
  },
  {
    post_title: 'In hac habitasse platea dictumst.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 1
  },
  {
    post_title: 'Morbi non quam nec dui luctus rutrum.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 1
  },
  {
    post_title: 'Duis ac nibh.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 9
  },
  {
    post_title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 5
  },
  {
    post_title: 'In hac habitasse platea dictumst.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 3
  },
  {
    post_title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 10
  },
  {
    post_title: 'Donec dapibus.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 8
  },
  {
    post_title: 'Nulla tellus.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 3
  },
  {
    post_title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 3
  },
  {
    post_title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 7
  },
  {
    post_title: 'In hac habitasse platea dictumst.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 6
  },
  {
    post_title: 'Etiam justo.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 4
  },
  {
    post_title: 'Nulla ut erat id mauris vulputate elementum.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 6
  },
  {
    post_title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_text: 'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
