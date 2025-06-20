import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RouterParam from './RouterParam';
import TopPage from './TopPage';
import BookPage from './BookPage';
import SearchPage from './SearchPage';
import NotFoundPage from './NotFoundPage';

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}>
      <Route path="/" element={<TopPage />} />
      <Route path="/book/:isbn?" element={<BookPage />} />
      {/* 가변 길이 매개변수 정의 */}
      <Route path="/search/*" element={<SearchPage />} />
      {/* 임의의 페이지에 해당하는 루트 */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

export default routesParam;