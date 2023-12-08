import './Modal.scss';
const Modal = ({ children, visible }) => {
  const rootClasses = ['modal'];
  if (visible) {
    rootClasses.push('active');
  }
  return <div className={rootClasses.join(' ')}>{children}</div>;
};

export default Modal;
