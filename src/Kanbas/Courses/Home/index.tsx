import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
    return (
        <div className="d-flex" id="wd-home" style={{ minHeight: "100vh" }}>
            <div className="flex-grow-1 me-5" style={{ minWidth: "50vh" }}>
                <Modules />
            </div>
        <div className="d-none d-md-block">
            <CourseStatus />
        </div>
    </div>

);
}
