import logo from './logo.svg';
import './App.css';
import Navbar from './components/DynamicNavbar/Navbar'
import Carousel from './components/Carousel/Carousel';
const carouselData = [
  {
      image:'https://images.unsplash.com/photo-1703328742708-d547eed7a0f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
      image:'https://images.unsplash.com/photo-1682687221073-53ad74c2cad7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
      image:'https://images.unsplash.com/photo-1682685797527-63b4e495938f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
      image:'https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
      image:'https://images.unsplash.com/photo-1702573849838-0f66f3731fdf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

function App() {
  return (
    <>
      <Navbar />
      <Carousel slides={carouselData}/>
    </>
  );
}

export default App;
