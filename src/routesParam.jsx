import { Route, createBrowserRouter, createRoutesFromElements,
    json, redirect } from 'react-router-dom';
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
            <Route path="/books" lazy={async ()=> {
                const { BookListPage } = await import('./BookNest');
                return { Component: BookListPage };
            }}>
                <Route path=":isbn" lazy={async ()=> {
                    const { BookDetailsPage } = await import('./BookNest');
                    return { Component: BookDetailsPage };
                }} />
            </Route>
            <Route path="/bookQuery" element={<BookQueryPage />} />
            <Route path="/bookState" element={<BookStatePage />} />
            <Route path="/search/*" element={<SearchPage />} />
            <Route path="/weather/:city"
                   lazy={() => import('./WeatherLazyPage')} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/search/*" element={<SearchPage />} />
        </Route>
    )
);

export default routesParam;

