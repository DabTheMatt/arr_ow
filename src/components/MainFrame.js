import '../style.css';
import GridBoard from './GridBoard';
import tree from "../folder_json";

function MainFrame() {
  return (
    <div className="MainFrame">
        <GridBoard />
        <input type="file" id="files" name="files[]" multiple webkitdirectory />
        <div id="tree"></div>
    </div>
  );
}

export default MainFrame;