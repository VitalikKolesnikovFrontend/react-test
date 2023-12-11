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
import { useEffect } from 'react';

const Products = () => {
  const [posts, setPosts] = useState([...productsList]);
  const [modalOpen, setOpenModal] = useState(false);
  const [checkedPosts, setCheckedPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(10);

  const changePage = (page) => {
    setPage(page);
  };

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

  const closeModal = (e) => {
    console.log(e);
    if (e.keyCode === 27) {
      setOpenModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => {
      document.addEventListener('keydown', closeModal);
    };
  }, []);

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
      <Modal setVisible={setOpenModal} visible={modalOpen}>
        <PostForm create={createPost} setVisible={setOpenModal} />
      </Modal>
      <Search
        page={page}
        limit={limit}
        setLimit={setLimit}
        setPage={setPage}
        changePage={changePage}
        totalPages={totalPages}
      />
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
