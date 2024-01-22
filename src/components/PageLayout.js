import { Outlet } from 'react-router-dom';
import Intro from '../components/Intro';
import MoviesTread from './MoviesTrending';
import Treadingtv from '../components/treadingtv';

const PageLayout = ({onSearch}) => {
  return (
    // page layouts
    <>
      <Intro />
      <MoviesTread />
      <Treadingtv />
      <Outlet />
    </>
  );
};

export default PageLayout;
