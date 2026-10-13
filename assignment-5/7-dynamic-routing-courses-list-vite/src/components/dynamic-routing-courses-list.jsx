import { useParams } from "react-router-dom";

function CourseDetails() {
    const { courseId } = useParams();

    return (
        <div>
            <h1>This is {courseId} course</h1>
        </div>
    );
}

export default CourseDetails;