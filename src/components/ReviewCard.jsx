import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className="flex flex-col justify-between items-center mt-20">
            <img src={imgURL} alt={customerName} className="object-contain rounded-full" width={130} height={130} />
            <p className="text-center text-slate-gray font-montserrat max-w-sm leading-normal mt-5 text-lg info-text">{feedback}</p>

            {/* rating div  */}
            <div className="flex justify-center items-center gap-3 mt-3">
                <img src={star} alt="rating" width={28} height={28} />
                <p className="text-slate-gray text-xl font-montserrat">({rating})</p>
            </div>
            <h3 className="mt-5 font-palanquin text-3xl font-bold">{customerName}</h3>
        </div>
    )
}

export default ReviewCard