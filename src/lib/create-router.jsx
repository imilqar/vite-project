import {createBrowserRouter} from 'react-router-dom'
import PageTemplate from '../template/page';
import Main from '../views/main';

export function createRouter (pages) {
  const routes = pages.map(route => ({
    path: route.url,
    element: <PageTemplate style={route.style} content={route.content} components={route.components} />,
  }))

  const mainRoute = [
    {
      path: '',
      element: <Main />,
      children: routes
    }
  ]

  const router = createBrowserRouter(mainRoute);

  return router

}

