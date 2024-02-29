export const ProfileCard = ({profileImage, firstName, lastName}) => {
    return <div className="flex w-full">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
            <div className="flex flex-col justify-center text-xl">
                {profileImage}
            </div>
        </div>
        <div className="flex flex-col justify-center">
            <div>
                {firstName} {lastName}
            </div>
        </div>
    </div>
}