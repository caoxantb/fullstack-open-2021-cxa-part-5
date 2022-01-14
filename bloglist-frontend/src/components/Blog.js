import React from "react";
import Togglable from "./Togglable";

const Blog = ({ blog, updateBlogLikes, deleteBlog, user }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const deleteConfirmation = (id) => {
    return window.confirm("Delete blog?") ? deleteBlog(id) : null;
  };

  return (
    <div style={blogStyle}>
      {blog.title} by {blog.author}
      <Togglable buttonLabelShow="show" buttonLabelHide="hide">
        <div>{blog.url}</div>
        <div>
          {blog.likes}
          <button
            type="submit"
            onClick={() => {
              updateBlogLikes(blog.id);
            }}
          >
            like
          </button>
        </div>
        <div>{blog.user.username}</div>
        {blog.user.username === user.username ? (
          <button
            onClick={() => {
              deleteConfirmation(blog.id);
            }}
          >
            Delete
          </button>
        ) : (
          <div></div>
        )}
      </Togglable>
    </div>
  );
};
export default Blog;
