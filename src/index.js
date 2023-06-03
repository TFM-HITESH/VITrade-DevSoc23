import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



//ReactDOM.render(<App />, document.getElementById('root'));
// const container =  document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<div>
//     <h1>hello</h1>
// </div>);


import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        
        <BrowserRouter>
            <App />
        </BrowserRouter>
       
    </React.StrictMode>,
    document.getElementById("root"),
);
