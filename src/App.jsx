import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminAdd from './pages/Admin/AdminAdd';
import AdminManage from './pages/Admin/AdminManage';
import AdminOrder from './pages/Admin/Order';
import AdminSidebar from './components/Admin/AdminSidebar';
import AdminLayout from './components/Admin/AdminLayout';
import MainLayout from './components/MainLayout';
import Events from './pages/Events';
import Carte from './components/Carte';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import { Toaster } from 'sonner';
import AdminOrderCard from './components/Admin/AdminOrderCard';
import Login from './pages/Admin/Login';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
   
        
      <Toaster
        position="top-right"
        richColors
         
      />
        {/* PAGE CONTENT */}
        <Carte/>
          <Routes>
             <Route path='/events' element={<MainLayout><Events/></MainLayout>} />
             <Route path='/checkout' element={<MainLayout><Checkout/></MainLayout>} />
             <Route path='/contact' element={<MainLayout><Contact/></MainLayout>} />
             <Route path='/' element={ <MainLayout> <Home/> </MainLayout>} />

            <Route path="/admin/login" element={  <Login/> } />

            <Route path="/admin/add" element={ <AdminLayout><AdminAdd /></AdminLayout>} />
            <Route path="/admin/manage" element={ <AdminLayout> <AdminManage /> </AdminLayout>} />
            <Route path="/admin/orders" element={ <AdminLayout>  <AdminOrder />  </AdminLayout> } />
            
          </Routes>
        {/* <Carte/> */}
        {/* <AdminOrderCard/> */}
    </BrowserRouter>
  );
}

export default App;
