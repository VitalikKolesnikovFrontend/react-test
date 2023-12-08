import './PostForm.scss';
import { useState } from 'react';
const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    categories: '',
    subcategory: '',
    brand: '',
    items: '',
    cashback: '',
    id: Date.now(),
  });

  const addPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    create(newPost);
  };

  return (
    <form action="submit">
      <div className="buttons__modal">
        <button className="button__modal">Удалить</button>
        <button onClick={addPost} className="button__modal button__modal_sec">
          Сохранить
        </button>
      </div>
      <p>Начисление кешбека с покупки</p>
      <input
        value={post.cashback}
        onChange={(e) => setPost({ ...post, cashback: e.target.value })}
        className="input__modal"
        placeholder="20%"></input>
      <p>Категория</p>
      <div className="select__modal">
        <select
          value={post.categories}
          onChange={(e) => setPost({ ...post, categories: e.target.value })}>
          <option value="1">Название категории</option>
          <option value="2">Эстетический уход</option>
          <option value="3">Пилинги</option>
          <option value="4">Средства для коррекции фигуры и массажа </option>
        </select>
      </div>
      <p>Подкатегория</p>
      <div className="select__modal">
        <select
          value={post.subcategory}
          onChange={(e) => setPost({ ...post, subcategory: e.target.value })}>
          <option value="1">Название подкатегории</option>
          <option value="2">Очищение</option>
          <option value="3">Скрабы</option>
          <option value="4">Тонизация</option>
          <option value="5">Кремы и гели</option>
          <option value="6">Кислотные пилинги</option>
        </select>
      </div>
      <p>Бренд</p>
      <div className="select__modal">
        <select value={post.brand} onChange={(e) => setPost({ ...post, brand: e.target.value })}>
          <option value="1">Имя бренда</option>
          <option value="2">Academie</option>
          <option value="3">Frolyis Pro</option>
          <option value="4">Kosmoteros Personnel Paris</option>
        </select>
      </div>
    </form>
  );
};

export default PostForm;
