import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import {ProtectedRoute, Login} from './components/index.js'
import Signup from './pages/Signup.jsx'
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <ProtectedRoute authentication={false}>
            <Login />
          </ProtectedRoute>
        )
      },
      {
        path: "/signup",
        element: (
            <ProtectedRoute authentication={false}>
                <Signup />
            </ProtectedRoute>
        ),
      },
      {
          path: "/all-posts",
          element: (
              <ProtectedRoute authentication>
                  {" "}
                  <AllPosts />
              </ProtectedRoute>
          ),
      },
      {
          path: "/add-post",
          element: (
              <ProtectedRoute authentication>
                  {" "}
                  <AddPost />
              </ProtectedRoute>
          ),
      },
      {
          path: "/edit-post/:slug",
          element: (
              <ProtectedRoute authentication>
                  {" "}
                  <EditPost />
              </ProtectedRoute>
          ),
      },
      {
          path: "/post/:slug",
          element: <Post />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>   
  </React.StrictMode>,
)
