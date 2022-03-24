import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Modal from 'react-modal';
import ModalItem from './components/ModalItem/ModalItem';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

function App() {
  const [products,setProduct] =useState([])
  const [savePd,setSavedPd] = useState([])

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mir-hussain/kopa-samsu-practice/main/public/data.json')
      .then(res=> res.json())
      .then(data => setProduct(data))
  },[])

  const addToCart=(pd)=>{
    setSavedPd([...savePd,pd])
  }

//modal function
  const [modalIsOpen, setIsOpen] =useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Header savePd={savePd} openModal={openModal}></Header>
      <section className='card-container'>
          {
            products.map(product=> <Product product={product} key={product.id} addToCart={addToCart}></Product>)
          }
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <button onClick={closeModal}>X</button>
        <div className='modal-container'>
        {
          savePd.map(pd=> <ModalItem product={pd} key={pd.id}></ModalItem>)
        }
        </div>
      </Modal>
    </div>
  );
}

export default App;
