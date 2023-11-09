// router
import { Link } from "react-router-dom";

export default function HomeIntro()
{
	return (
        <div className="introBox">
            <h1 className="introName">Isaac Radford</h1>
            <h2 className="introDegree">Software Engineering Major</h2>
            <ul className="introUl">
                <li className="introLi">- Web Development</li>
                <li className="introLi">- Software Design</li>
            </ul>
        </div>
	)
}