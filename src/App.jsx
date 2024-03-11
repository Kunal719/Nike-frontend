import { CustomerReview, Footer, Hero, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections"
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="relative">
      <Nav />
      <div className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </div>
      <div className="padding">
        <PopularProducts />
      </div>
      <div className="padding">
        <SuperQuality />
      </div>
      <div className="padding py-10">
        <Services />
      </div>
      <div className="padding">
        <SpecialOffer />
      </div>
      <div className="bg-pale-blue padding">
        <CustomerReview />
      </div>
      <div className="padding-x sm:py-24 py-16 w-full">
        <Subscribe />
      </div>
      <div className="bg-black padding-x padding-y pb-8">
        <Footer />
      </div>
    </div>
  )
}

export default App