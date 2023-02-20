import './App.css';
import AppContextProvider from './contexts/AppContext';
import Pages from './pages';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Pages />
      </AppContextProvider>
    </div>
  );
}

export default App;
