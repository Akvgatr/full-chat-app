import Navbar from "./components/Navbar";
import { Routes , Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SettingPage from "./pages/SettingPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { axiosInstance } from "./lib/axios";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import {Toaster} from 'react-hot-toast';
import { useThemeStore } from "./store/useThemeStore";
import {Loader} from "lucide-react"

const App =() => {

const {authUser, checkAuth , isCheckingAuth ,onlineUsers}=useAuthStore()
const{theme}= useThemeStore()


console.log({onlineUsers});

useEffect(()=>{checkAuth()},[checkAuth]);
console.log(authUser);
if (isCheckingAuth && !authUser)return(
  <div className="flex place-items-center justify-items-center h-screen">
    <Loader className="size-10 animate-spin"/>
  </div>
)

  return (
<div data-theme={theme}>
  
  <Navbar />


  <Routes>
  <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
<Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
  <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
  <Route path="/settings" element={authUser ? <SettingPage /> : <Navigate to="/login" />} />
  <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
</Routes>

<Toaster></Toaster>

</div>

  )}
  export default App;