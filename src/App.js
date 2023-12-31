import {Fragment,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial=true;

function App() {
  const dispatch=useDispatch();
  const showCart=useSelector((state)=>state.ui.cartIsVisible);
  const cart=useSelector((state)=>state.cart);
  const notification=useSelector(state=>state.ui.notification);

  useEffect(()=>{
    const sendCartData= async ()=>{
      
      
      
    
      };

      if(isInitial){
        isInitial=false;
        return;
      }
        sendCartData().catch((error)=>{
      dispatch(
      
        uiActions.showNotification({
        status:'error',
        title:'Error!',
        message:'Sending cart data failed!',
      })
      );
    });
    
},[cart,dispatch]);

  return (

    <Fragment>
    {notification &&  <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
    {showCart &&  <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;
