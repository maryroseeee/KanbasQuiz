import { FaPlus } from "react-icons/fa6";
import {SlMagnifier} from "react-icons/sl";


export default function AssignmentControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap">
            <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment</button>
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group</button>

            <span id="wd-search-assignment-span" className="btn btn-lg btn-search">
            <SlMagnifier className="fs-4" />
            <input
                    id="wd-search-assignment"
                    type="text"
                    className="btn btn-lg btn-text "
                    placeholder="Search..."
                />
        </span>

        </div>
    );}
