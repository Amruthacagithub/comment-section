import './App.css';
import TopCommentsBox from './Components/CommentsBox/TopCommentsBox/TopCommentsBox';
import MessageScroll from './MessageScroll'

function App() {
  return (
    <div className="ColHolder">
      <TopCommentsBox autoFocus={false}></TopCommentsBox>
      <MessageScroll></MessageScroll>
    </div>
  );
}

export default App;
