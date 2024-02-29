export const Balance = ({value}) => {
    return <div className="flex flex-col mt-4">
        <div className="text-lg text-gray-600">
            Your balance
        </div>
        <div className="font-semibold text-2xl">
            ₹ {value}
        </div>
    </div>
}