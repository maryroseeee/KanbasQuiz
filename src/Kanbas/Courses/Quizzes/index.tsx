import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import QuizControlButtons from "./QuizControlButtons";
import AssignmentPrefixButtons from "../Assignments/AssignmentPrefixButtons";
import React  from "react";
import { Link } from "react-router-dom";
import { deleteAssignment}
    from "../Assignments/reducer";
import { useSelector, useDispatch } from "react-redux";
import AssignmentIndivButtons from "../Assignments/AssignmentIndivButtons";
import {FaPlus} from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as db from "../../Database";


export default function Quizzes() {
    const { cid } = useParams();
    const quizzes = db.quizzes
    // const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (

        <li className="wd-assignment list-group-item p-0 mb-2 fs-5 border-gray">

            <div className="d-flex justify-content-end mb-2">
                {currentUser.role === "FACULTY" && ( // Only render ModulesControls if user is FACULTY
                    <Link
                        to={`/Kanbas/Courses/${cid}/Assignments/add`}
                        className="btn btn-danger btn-lg text-decoration-none text-white"
                    >
                        <FaPlus className="me-2" />
                        Assignment
                    </Link>
                )}
            </div>

            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> Quizzes <QuizControlButtons />
            </div>

            <ul id="wd-assignments" className="list-group rounded-0">
                {quizzes
                    .filter((quiz: any) => quiz.course === cid)
                    .map((quiz: any) => (
                        <li className="wd-module list-group-item p-0 fs-5 border-gray" key={quiz.id}>
                            <div className="wd-assignment-list-item p-3 ps-2 wd-lesson">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <div className="d-flex align-items-center">
                                        <AssignmentPrefixButtons />
                                        {currentUser.role === "FACULTY" ? (
                                            <Link
                                                to={`/Kanbas/Courses/${cid}/Assignments/${quiz._id}`}
                                                className="text-decoration-none text-black"
                                            >
                                                <span className="ms-2 text-start">{quiz.title}</span>
                                            </Link>
                                        ) : (
                                            <span className="ms-2 text-start">{quiz.title}</span>
                                        )}


                                    </div>

                                    {currentUser.role === "FACULTY" ? (
                                        // <AssignmentIndivButtons assignmentId={quiz._id}
                                        //                         deleteAssignment={(assignmentId) => {
                                        //                             dispatch(deleteAssignment(assignmentId));
                                        //                         }} />
                                        <AssignmentIndivButtons assignmentId={quiz._id}
                                                                deleteAssignment={(assignmentId) => {
                                                                    dispatch(deleteAssignment(assignmentId));
                                                                }} />
                                    ) : (
                                        <LessonControlButtons/>

                                    )}
                                </div>

                                <ul className="ms-4 text-wrap txt-caption list-unstyled">
                                    <li>
                                        <span className="fw-bold">Available:</span> {new Date(quiz.available_date + 'T00:00:00').toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })} at 12:00pm |{" "}
                                        <span className="fw-bold">Due:</span> {new Date(quiz.due_date + 'T23:59:59').toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    })} at 11:59pm |{" "}
                                        <span >{quiz.points} pts |{" "}</span>
                                        <span >{quiz.number_of_questions} Questions</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ))}
            </ul>
        </li>
    );
}
