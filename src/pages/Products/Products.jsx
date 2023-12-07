/* eslint-disable no-unused-vars */
import Button from '../Button/Button';
import MenuItems from '../MenuItems/MenuItems';
import Search from '../Search/Search';
import Post from '../Posts/Post';
import ModalDelete from '../ModalDelete/ModalDelete';
import productsList from '../Products/ProductsList';
import './Products.scss';

const Products = () => {
  return (
    <>
      <Search />
      <Button />
      <MenuItems />
      <div className="posts__products">
        {productsList.map((item, index) => (
          <Post
            key={index}
            index={index}
            id={item.id}
            categories={item.categories}
            subcategory={item.subcategory}
            brand={item.brand}
            items={item.items}
            cashback={item.cashback}
          />
        ))}
      </div>
      <ModalDelete />
    </>
  );
};

export default Products;
