import './Modal.scss'
const Modal = () => {
    return (
        <div className='modal'>
            <div className='buttons__modal'>
                <button className='button__modal'>Удалить</button>
                <button className='button__modal button__modal_sec'>Сохранить</button>
            </div>
            <p>Начисление кешбека с покупки</p>
            <input className='input__modal' placeholder='20%'></input>
            <p>Категория</p>
            <div className='select__modal'>
            <select>
                <option value="1">Название категории</option>
                <option value="2">Эстетический уход</option>
                <option value="3">Пилинги</option>
                <option value="4">Средства для коррекции фигуры и массажа </option>
            </select>
            </div>
            <p>Подкатегория</p>
            <div className='select__modal'>
            <select>
                <option value="1">Название подкатегории</option>
                <option value="2">Очищение</option>
                <option value="3">Скрабы</option>
                <option value="4">Тонизация</option>
                <option value="5">Кремы и гели</option>
                <option value="6">Кислотные пилинги</option>
            </select>
            </div>
            <p>Бренд</p>
            <div className='select__modal'>
            <select>
                <option value="1">Имя бренда</option>
                <option value="2">Academie</option>
                <option value="3">Frolyis Pro</option>
                <option value="4">Kosmoteros Personnel Paris</option>
            </select>
            </div>
        </div>
    )
}

export default Modal;