import { Link, Route, Routes } from 'react-router-dom';
import Home from '../../src/pages/Home';
import Layout from '../../src/components/Layout';
import Meme from '../pages/Meme';
import Diary from '../pages/Diary';
function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/happy' element={<Meme />} />
        <Route path='/excited' element={<Meme />} />
        <Route path='/relaxed' element={<Meme />} />
        <Route path='/bored' element={<Meme />} />
        <Route path='/sad' element={<Meme />} />
        <Route path='/tired' element={<Meme />} />
        <Route path='/angry' element={<Meme />} />
        <Route path='/diary' element={<Diary />} />
      </Route>
    </Routes>
  );
}

export default Router;
