import { getOneDeed } from "@/controllers/getOneDeed";
import { getOneImage } from "@/controllers/getOneImage";

const App = async () => {
  const [imageObj, deedObj] = await Promise.all([getOneImage(), getOneDeed()]);

  return (
    <main>
      <div className="content-container">
        <img src={imageObj.imgUrl} />
        <p>Carlo Acutis {deedObj.deed}</p>
      </div>
    </main>
  );
};

export default App;
