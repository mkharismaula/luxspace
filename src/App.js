import React from 'react';
import Arrived from './components/Arrived';
import AssideMenu from './components/AssideMenu';
import Browse from './components/Browse';
import Clients from './components/Clients';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    // <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg">
    //   <div className="ml-6 pt-1">
    //     <h1 className="text-2xl text-blue-700 leading-tight">
    //       Tailwind and Create React App
    //     </h1>
    //     <p className="text-base text-gray-700 leading-normal">
    //       Building apps together
    //     </p>
    //   </div>
    // </div>
    <>
      <Header/>
      <Hero/>
      <Browse/>
      <Arrived/>
      <Clients/>
      <AssideMenu/>
      <Footer/>
    </>
  );
}

export default App;
