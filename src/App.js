import React from "react";
import { useEffect, useState } from "react";
import "./App.scss";

//Components import
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";

//Content import
import spinner from './content/spinner.svg';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000);
    }, [])

    return (
        <div className="App">
            {isLoading &&
                <div className="Loading">
                    <img src={spinner} alt="Spinner" className="Loading__spinner" />
                </div>}
            <Navigation/>
            <Main/>
        </div>
    );
};

export default App;