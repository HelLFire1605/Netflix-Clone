import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import LoginScreen from "./screens/LoginScreen";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/profile",
    element: <ProfileScreen />,
  }
]);

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });

    return unSubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      {!user ? <LoginScreen /> : <RouterProvider router={router} />}
    </div>
  );
}

export default App;
