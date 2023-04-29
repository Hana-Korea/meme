import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../../src/pages/Home';
import Layout from '../../src/components/Layout';
function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Router;
