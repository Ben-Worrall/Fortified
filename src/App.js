
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log('useffect start')
    if (window.electronAPI?.notifyReactReady) {
      console.log('useffect notifyReactReady')
      window.electronAPI.notifyReactReady();
    }
  }, []);

  return (
    <div className="App">
        {/*  */}


      {/* book mark (top border)  */}
      <div id='top-bar'>bookmarks</div>

      {/*  url bar */}
      <div id='url-bar'>url</div>

      {/*  options left */}
      <div id='options-left'>
        <button className='ScreenOptionButton'>Option 1</button>
        <button className='ScreenOptionButton'>Option 2</button>
      </div>

      {/*  options right */}
      <div id='options-right'>
        <button className='ScreenOptionButton'>Option 3</button>
        <button className='ScreenOptionButton'>Option 4</button>
      </div>

      {/*  search bar */}
      <div id='search-bar'>
        <input id='search-bar-input' type='text' placeholder='Search...' />
        <button id='search-bar-button' className='SearchButton'>S</button>
      </div>

    </div>
  );
}

export default App;
