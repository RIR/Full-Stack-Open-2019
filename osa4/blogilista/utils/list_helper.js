const _ = require('lodash');

const dummy = blogs => 1;

const totalLikes = blogs => blogs.reduce((sum, blog) => sum + blog.likes, 0);

const favoriteBlog = blogs => {
  if (blogs.length === 0) return undefined;

  const favoriteBlog = blogs.reduce((prev, current) => (prev.likes > current.likes ? prev : current), 0);
  return {
    title: favoriteBlog.title,
    author: favoriteBlog.author,
    likes: favoriteBlog.likes
  };
};

const mostBlogs = blogs => {
  if (blogs.length === 0) return undefined;

  const [author, blogCount] = _(blogs)
    .countBy('author')
    .entries()
    .maxBy(_.last);

  return { author, blogs: blogCount };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs
};
