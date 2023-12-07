import './Post.scss';

const Post = ({ categories, subcategory, brand, items, cashback }) => {
  return (
    <div className="posts">
      <input className="input__post" type="checkbox" />
      {/* <span>{categories}</span>
      <span>{subcategory}</span>
      <span>{brand !== null ? brand : '-'}</span>
      <span>{items !== null ? items : '-'}</span> */}
      <span>{cashback}</span>
    </div>
  );
};

export default Post;
