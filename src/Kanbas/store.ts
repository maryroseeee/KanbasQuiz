import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollReducer from "./Enrollments/reducer";
import assignmentReducer from "./Courses/Assignments/reducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentReducer,
        enrollReducer
    },
});
export default store;