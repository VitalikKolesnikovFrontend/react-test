/* eslint-disable no-unused-vars */
import Button from '../Button/Button';
import MenuItems from '../MenuItems/MenuItems';
import Search from '../Search/Search';
import Post from '../Posts/Post';
import ModalDelete from '../ModalDelete/ModalDelete';
import productsList from '../Products/ProductsList';
import './Products.scss';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import PostForm from '../PostForm/PostForm';

const Products = () => {
  const [posts, setPosts] = useState([...productsList]);
  const [modalOpen, setOpenModal] = useState(false);
  const [checkedPosts, setCheckedPosts] = useState([]);

  const addCheckedPost = (post) => {
    setCheckedPosts([...checkedPosts, post]);
  };
  const removeCheckedPost = (post) => {
    setCheckedPosts(checkedPosts.filter((i) => i.id !== post.id));
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setOpenModal(false);
  };

  const removeCheckedPosts = (postsRemove) => {
    setPosts(posts.filter((i) => !postsRemove.includes(i)));
    setCheckedPosts([]);
  };

  return (
    <>
      {/* <input
        value={post.cashback}
        onChange={(e) => {
          setPost({ ...post, cashback: e.target.value });
          console.log(post);
        }}
        className="input__modal"
        placeholder="20%"></input> */}
      <Modal visible={modalOpen}>
        <PostForm create={createPost} setVisible={setOpenModal} />
      </Modal>
      <Search />
      <Button onClick={() => setOpenModal(true)}>Добавить акцию</Button>
      <MenuItems />
      {posts.length > 0 ? (
        <div className="posts__products">
          {posts.map((item) => (
            <Post
              addCheckedPost={addCheckedPost}
              removeCheckedPost={removeCheckedPost}
              key={item.id}
              post={item}
            />
          ))}
        </div>
      ) : (
        <h1>Товары не найдены</h1>
      )}
      {checkedPosts.length > 0 && (
        <ModalDelete remove={removeCheckedPosts} checkedPosts={checkedPosts} />
      )}
    </>
  );
};

export default Products;
