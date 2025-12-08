import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Desktop from './components/os/Desktop';

function App() {
    return (
        <Router>
            <div className="App">
                <Desktop />
            </div>
        </Router>
    );
}

export default App;
