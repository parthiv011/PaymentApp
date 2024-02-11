export const Button = ({title, onClick, type}) => {
    return <button type={type}
                    className='text-white bg-black text-base w-full font-medium px-2 py-1 mt-2 rounded-lg'
                   onClick={onClick}
    >{title}</button>
}