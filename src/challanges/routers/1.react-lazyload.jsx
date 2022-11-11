import {lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"


const Home = lazy(() => import('./home'));
const About = lazy(() => import('./about'));
const Newspaper = lazy(() => import('./newspaper'));
const Loading = lazy(() => import('./loading'));

const LazyLoad = () => {
  return (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/newspaper'}>Newspaper</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        </ul>
        
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={ <About/>} />
            <Route path="/newspaper" element={ <Newspaper />} />
          </Routes>
        </Suspense>
    </div>
  </BrowserRouter>)
}

export default LazyLoad;