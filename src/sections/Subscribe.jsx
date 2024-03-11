import Button from "../components/Button"

const Subscribe = () => {
  return (
    <div id="contact us" className="flex justify-between items-center max-container py-10 gap-10 max-lg:flex-col">
      <h1 className="font-palanquin text-4xl font-bold lg:max-w-lg leading-[70px] max-lg:text-center">
        <span>Sign Up for </span>
        <span className="text-coral-red">Updates </span>
        <br />
        <span>& Newsletter</span>
      </h1>
      <div className="flex items-center rounded-full gap-6 border-2 lg:max-w-[40%] w-full sm:border sm:border-slate-gray p-2">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end max-sm:w-full items-center">
          <Button label="Sign Up" noMarginTop />
        </div>
      </div>
    </div>
  )
}

export default Subscribe