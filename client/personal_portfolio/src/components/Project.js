// router
import { Link } from "react-router-dom"

export const Project = ({project}) => {
    return (
        <div className="Project">
            <Link to={`/Project/${project._id}`}>{project.title}</Link>
        </div>
    )
}