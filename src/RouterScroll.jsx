import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function RouterScroll() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}