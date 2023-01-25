import FrameViewer from './mainBody/frameViewer';
import TopHeader from './mainBody/topHeader';
import Navigation from './navigation/navigation';

function App() {
  return (
    <div className="containerRoot">
      <div className="container ">
        <div className="mainBody flex flexColumn fillWidth fillHeight">
          <TopHeader></TopHeader>
          <FrameViewer></FrameViewer>
        </div>
        <Navigation></Navigation>
      </div>
    </div>
  )
}

export default App
