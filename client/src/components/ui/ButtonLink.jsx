import {Link} from "react-router-dom";

export const ButtonLink = ({mainLink, text, navigator}) => {
    return <div className='text-sm flex justify-center'>
        <div>{mainLink}</div>
        <Link to={navigator} className='underline'>{text}</Link>
    </div>
}