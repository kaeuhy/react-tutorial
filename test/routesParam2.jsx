import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RouterParam2 from './RouterParam2.jsx';
import WeatherPage2 from "./WeatherPage2.jsx";
import TopPage from "../src/TopPage.jsx";

const routesParam2 = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RouterParam2 />} >
      <Route path="/" element={<TopPage />} />
      {/*<Route path="/book/:isbn?" element={<BookPage />}*/}
      {/*  errorElement={<InvalidParamsPage />} />*/}
      {/*<Route path="/bookQuery" element={<BookQueryPage />} />*/}
      {/*<Route path="/bookState" element={<BookStatePage />} />*/}
      {/*/!* 가변 길이 매개변수 정의 *!/*/}
      {/*<Route path="/search/*" element={<SearchPage />} />*/}
      {/*/!* 임의의 페이지에 해당하는 루트 *!/*/}
      {/*<Route path="*" element={<NotFoundPage />} />*/}
        <Route path="/weather/:city" element={<WeatherPage2 />}
               loader={({ params }) =>
                   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=4d86396bc4736dd0ccd12e1ce61a8980&units=metric`)
        } />
    </Route>
  )
);

export default routesParam2;