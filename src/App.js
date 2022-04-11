import React from 'react'
import Pages from './pages/Pages';
import ErrorPage from './pages/ErrorPage';
import BasicMenu from './components/BasicMenu'
import Header from './components/Header'
import ComparisonCard from './components/ComparisonCard';
import Admin_Report from './pages/Admin_Report';
import CompareFinal from './pages/CompareFinal';
// import Compare from './pages/Compare';
function App() {
  return (
      // <Compare />
    // <ErrorPage></ErrorPage>
    // <Pages></Pages>
    <>
    {/* <BasicMenu></BasicMenu> */}
    <Header></Header>
    {/* <ResponsiveAppBar/> */}
    {/* <ComparisonCard></ComparisonCard> */}
    <CompareFinal></CompareFinal>
    </>

  );
}

export default App
