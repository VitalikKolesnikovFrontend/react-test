import './MenuItems.scss'
const MenuItems = () => {
    return (
        <div className='menuItems'>
            <input className='input__menuItems' type='checkbox'></input>
            <span>Категория</span>
            <span>Подкатегория</span>
            <span>Бренд</span>
            <span>Товары</span>
            <span>Кешбек</span>
        </div>
    )
}
export default MenuItems;