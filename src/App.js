import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";



function App() {
  return (
    <div>
      <SectionWrapper
        title="Katigbanoma Store of Nifty NFTs. Start Selling & Growing"
        description="Buy, stroe, collect NFTS, excahnge and earn crypto. Join 25+ million people using katigbanoma Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
       <SectionWrapper
        title="Smart User Interface"
        description="Expereince a buttery UI of ProNef nft MarketPlace, Smooth constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        banner="banner"
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Built using expo which runs natively on all users devices. You can easily get your apps into peoples hands"
        showBtn
        mockupImg={assets.feature}
        banner="banner"
      />
       <SectionWrapper
        title="Creative way to show case the store"
        description="This app contains two screens. List of NFT's and Purcahse screen."
        mockupImg={assets.homeCards}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "} <span className="bold">Taofik</span></p>
      </div>
    </div>
  );
}

export default App;
