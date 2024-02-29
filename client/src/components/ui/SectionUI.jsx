export const SectionUI = ({sectionName, mainHeading, subHeading, image}) => {
    return <section className='text-black bg-white'>
        <h2 className='p-5 text-3xl text-center font-bold'
        >{sectionName}</h2>
        <div className='flex w-full border'>
            <div className='flex flex-col justify-center items-center w-1/2 mt-4 '>
                <div>
                    <h3 className='text-4xl pl-5 py-2'
                    >{mainHeading}</h3>
                    <p className='pl-5'>{subHeading}</p>
                </div>
            </div>
            <div className='w-1/2 mt-4 '>
                <img className='cursor-pointer rounded-l-lg shadow-2xl hover:scale-105 hover:ease-in duration-300 z-0'
                     src={image} alt='image' />
            </div>
        </div>
    </section>
}