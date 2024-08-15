import { RouterProvider } from 'react-router-dom'
import {createRouter} from './lib/create-router'
import {useAppStore} from './store/app'

import './App.css'



function App() {
  const { pages } = useAppStore()
  const router = createRouter(pages)

  return <RouterProvider router={router} />
}

export default App
