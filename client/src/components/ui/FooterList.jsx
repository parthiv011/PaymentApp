export const FooterList = ({list, link}) => {
    return <li>
                <a href={link}
               target={"_blank"}
                className='text-gray-300 hover:text-white'
                >{list}
                </a>
        </li>
}