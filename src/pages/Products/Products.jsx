/* eslint-disable no-unused-vars */
import Button from '../Button/Button';
import MenuItems from '../MenuItems/MenuItems';
import Search from '../Search/Search';
import Post from '../Posts/Post';
import ModalDelete from '../ModalDelete/ModalDelete';
import productsList from '../Products/ProductsList';
import './Products.scss';
import { useState } from 'react';

const Products = () => {
  const [posts, setPosts] = useState([]);

  const [post, setPost] = useState({
    // categories: '',
    // subcategory: '',
    // brand: '',
    // items: '',
    cashback: '',
  });

  const addPost = () => {
    const newPost = { ...post };
    setPosts(...posts, newPost);
    console.log(newPost);
    console.log(posts);
  };

  return (
    <>
      <input
        value={post.cashback}
        onChange={(e) => {
          setPost({ ...post, cashback: e.target.value });
          console.log(post);
        }}
        className="input__modal"
        placeholder="20%"></input>
      <Search />
      <Button onClick={addPost}>Добавить акцию</Button>
      <MenuItems />
      {posts.length > 0 ? (
        <div className="posts__products">
          {posts.map((item, index) => (
            <Post
              key={index}
              // index={index}
              // id={item.id}
              // categories={item.categories}
              // subcategory={item.subcategory}
              // brand={item.brand}
              // items={item.items}
              cashback={item.cashback}
            />
          ))}
        </div>
      ) : (
        <h1>Товары не найдены</h1>
      )}
      <ModalDelete />
    </>
  );
};

export default Products;
