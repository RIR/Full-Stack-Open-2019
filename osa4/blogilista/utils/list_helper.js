const dummy = blogs => 1;

const totalLikes = blogs => blogs.reduce((sum, blog) => sum + blog.likes, 0);

const favoriteBlog = blogs => {
  const favoriteBlog = blogs.reduce((prev, current) => (prev.likes > current.likes ? prev : current), 0);
  return favoriteBlog === 0
    ? null
    : {
        title: favoriteBlog.title,
        author: favoriteBlog.author,
        likes: favoriteBlog.likes
      };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};
