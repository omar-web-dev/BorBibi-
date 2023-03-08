// import logo from './logo.svg';
import { PhotoProvider } from 'react-photo-view';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Route/Route';

function App() {
  return (
    <div className="my_app">
     <div className="App vendorListHeading scroll-smooth">
        <PhotoProvider>
          <RouterProvider router={router} />
        </PhotoProvider>
    </div>
    </div>
  );
}

export default App;
