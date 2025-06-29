import { Route, createBrowserRouter, createRoutesFromElements, json, redirect } from 'react-router-dom';
import RouterParam from './RouterParam';
import TopPage from './TopPage';
import BookPage from './BookPage';
import SearchPage from './SearchPage';
import NotFoundPage from './NotFoundPage';
import BookQueryPage from './BookQueryPage';
import BookStatePage from './BookStatePage';
import InvalidParamsPage from './InvalidParamsPage';
import WeatherPage from './WeatherPage';
import CommonErrorPage from './CommonErrorPage';
import BookFormPage from './BookFormPage';
import yup from './yup.kr';
import { date, number, string } from 'yup';

const sleep = ms => new Promise(res => setTimeout(res, ms));

const fetchWeather = async ({ params }) => {
  await sleep(2000);
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

const bookAction = async ({ request }) => {
  const form = await request.formData();
  const bookSchema = yup.object({
    title: string().label('도서명').required().max(100),
    price: number().label('가격').integer().positive(),
    published: date().label('출간일').required().max(new Date(2100, 0, 1))
  });
  let info;
  try {
    info = await bookSchema.validate({
      title: form.get('title'),
      price: form.get('price') || 0,
      published: new Date(form.get('published') || Date.now()),
    }, {
      abortEarly: false
    });
    console.log(info);
    return redirect('/');
  } catch (e) {
    return e.errors;
  }
};

const routesParam = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam />} >
      <Route path="/" element={<TopPage />} />
      <Route path="/book/form" element={<BookFormPage />}
        action={bookAction} />
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

