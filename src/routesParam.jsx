import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RouterParam from './RouterParam';
import TopPage from './TopPage';
import BookPage from './BookPage';
import SearchPage from './SearchPage';
import NotFoundPage from './NotFoundPage';
import BookQueryPage from './BookQueryPage';
import BookStatePage from './BookStatePage';
import InvalidParamsPage from './InvalidParamsPage';
import WeatherPage from './WeatherPage';const routesParam = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RouterParam />}
               errorElement={<InvalidParamsPage />} >
            <Route path="/" element={<TopPage />} />
            <Route path="/book/:isbn?" element={<BookPage />} />
            <Route path="/bookQuery" element={<BookQueryPage />} />
            <Route path="/bookState" element={<BookStatePage />} />
            <Route path="/search/*" element={<SearchPage />} />
            <Route path="/weather/:city" element={<WeatherPage />}
                   loader={({ params }) =>
                       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=4d86396bc4736dd0ccd12e1ce61a8980&units=metric`)
                   }/>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/search/*" element={<SearchPage />} />
        </Route>
    )
);

export default routesParam;

