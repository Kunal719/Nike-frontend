const Button = ({ label, image, backgroundColor, borderColor, textColor, noMarginTop }) => {
  return (
    <button className={`flex items-center justify-center gap-2 px-7 py-4 ${noMarginTop ? '' : 'mt-10'} text-lg font-montserrat leading-none
    ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 'bg-coral-red text-white border-coral-red'} rounded-full border `}>
      <p>{label}</p>
      {image && <img src={image} alt="ArrowRight" className="ml-2 rounded-full w-6 h-5" />}
    </button>
  )
}

export default Button