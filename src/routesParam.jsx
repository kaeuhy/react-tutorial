import { createBrowserRouter, createRoutesFromElements, json, Route } from 'react-router-dom';
import RouterParam from './RouterParam';
import TopPage from './TopPage';
import BookPage from './BookPage';
import SearchPage from './SearchPage';
import NotFoundPage from './NotFoundPage';
import BookQueryPage from './BookQueryPage';
import BookStatePage from './BookStatePage';
import InvalidParamsPage from './InvalidParamsPage';
import WeatherPage from './WeatherPage';

const fetchWeather = async ({ params }) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&lang=kr&appid=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
  if (res.ok) { return res; }
  switch (res.status) {
    case 404:
      throw json({ message: 'city is invalid!!' }, { status: 404 });
    case 401:
      throw json({ message: 'api key is invalid!!' }, { status: 401 });
    default:
      throw json({ message: 'api server is in trouble...' }, { status: 501 });
  }
}

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />}
      errorElement={<InvalidParamsPage />} >
      <Route path="/" element={<TopPage />} />
      <Route path="/book/:isbn?" element={<BookPage />} />
      <Route path="/bookQuery" element={<BookQueryPage />} />
      <Route path="/bookState" element={<BookStatePage />} />
      <Route path="/search/*" element={<SearchPage />} />
      <Route path="/weather/:city" element={<WeatherPage />}
        loader={fetchWeather}/>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/search/*" element={<SearchPage />} />
    </Route>
  )
);

export default routesParam;

