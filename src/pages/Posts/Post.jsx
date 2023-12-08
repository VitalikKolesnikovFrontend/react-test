import './Post.scss';

const Post = ({ post }) => {
  return (
    <div className="posts">
      <input className="input__post" type="checkbox" />
      <span>{post.categories}</span>
      <span>{post.subcategory}</span>
      <span>{post.brand !== null ? post.brand : '-'}</span>
      <span>{post.items !== null ? post.items : '-'}</span>
      <span>{post.cashback}</span>
    </div>
  );
};

export default Post;
