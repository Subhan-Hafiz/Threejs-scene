import './App.css';
import Landing2 from './components/landing2';
import Testimonials from './components/testimonials';
import { Perf } from "r3f-perf"

function App() {
  return (
    <div className='h-100'>
      <Landing2 />
      <div className="vh-100 vw-100 bg-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,106.7C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      <Testimonials />
    </div>

  );
}

export default App;
