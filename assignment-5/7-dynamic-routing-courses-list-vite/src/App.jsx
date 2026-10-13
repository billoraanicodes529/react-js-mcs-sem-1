import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CourseDetails from "./components/dynamic-routing-courses-list";

function App() {
    const courses = ["JavaScript", "React", "HTML", "DSA"];

    return (
        <BrowserRouter>
            <h1>Dynamic Routing with React</h1>
            <ul>
                {courses.map((course) => {
                    return (
                        <li key={course}>
                            <Link to={`courses/${course}`}>{course}</Link>
                        </li>
                    );
                })}
            </ul>

            <Routes>
                <Route
                    path="courses/:courseId"
                    element={<CourseDetails />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;