import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import {FaTrash} from "react-icons/fa";
export default function QuizIndivButtons({
    quizId,
    deleteQuiz,
    }: {
    quizId: string;
    deleteQuiz: (quizId: string) => void;
}) {
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteQuiz(quizId)}/>
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );}
