import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/Editor";
import QuizDetails from "./Quizzes/QuizDetails";
// import * as quizzesClient from "./Quizzes/client";


export default function Courses({ courses }: { courses: any[] }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1" />
                {course && course.name}
            </h2>
            <div className="d-flex">
                <div>
                    <CoursesNavigation />
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={< Assignments/>} />
                        <Route
                            path="Assignments/:aid"
                            element={<AssignmentEditor />}
                        />
                        <Route path="Quizzes" element={< Quizzes/>} />
                        <Route
                            path="Quizzes/Editor"
                            element={<QuizEditor />}
                        />
                        <Route
                            path="Quizzes/Detail/:qid"
                            element={<QuizDetails />}
                        />
                        <Route path="People" element={<PeopleTable />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
