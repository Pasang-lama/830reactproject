import BannerSlider from "./component/Banner"
import Footer from "./component/Footer"
import Header from "./component/Header"
function App() {
  return (
    <>
      <Header />
      <section className="banner-section">
        <BannerSlider />
      </section>

      <section className="feature container mt-5">
        <div className="section-heading text-center">
          <span>MADE THE HARD WAY</span>
          <h2 className="section-title">FEATURED CATEGORIES</h2>
</div>

      </section>
      <Footer />

    </>
  )
}

export default App
