import "./App.css";
import NavBar from "./NavBar/NavBar.js";
import BlogPostContainer from "./BlogPostContainer/BlogPostContainer.js";
import MediaCarousel from "./MediaCarousel/MediaCarousel.js";
import ContactUs from "./ContactUs/ContactUs";
import ImageSlider from "./ImageSlider/ImageSlider.js";

const mediaItems = [
  {
    type: "image",
    url: "https://via.placeholder.com/600x400",
    altText: "Placeholder Image",
  },
  {
    type: "video",
    url: "path/to/your/video.mp4",
  },
  {
    type: "image",
    url: "https://via.placeholder.com/600x400?text=Another+Image",
    altText: "Another Placeholder Image",
  },
];

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <NavBar />
      </div>
      <div>
        <ImageSlider />
      </div>
      <div>
        <BlogPostContainer />
      </div>
      <div>
        <MediaCarousel items={mediaItems} />
      </div>
      <div>
        <ContactUs />
      </div>
      {/* <EventCalendar /> */}
      {/* <Location /> */}
    </div>
  );
}

export default App;
