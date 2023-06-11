import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Admin/Timeline";
import YouTube from "./components/Admin/YouTube";
import {Projects as Project} from "./components/Admin/Projects";
import Loader from "./components/Loader/Loader";

function App() {
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading,user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home youtube={user.user.youtube} timelines={user.user.timeline} skills={user.user.skills}/>} />
            <Route path="/about" element={<About about={user.user.about}/>} />
            <Route path="/projects" element={<Projects projects={user.user.projects}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route path="/admin/timeline" element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route path="/admin/certificates" element={isAuthenticated ? <YouTube /> : <Login />}
            />
            <Route path="/admin/project" element={isAuthenticated ? <Project /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
