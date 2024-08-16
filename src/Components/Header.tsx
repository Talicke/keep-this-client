import React,{useState} from "react";



const Header: React.FC = () => {

    const [isConneted, setIsConnected] = useState(false);

    return(
        <header className="App-header d-flex flex-row justify-content-between p-3">
            <h1>Keep This</h1>
            {isConneted?
            <div>
                <h1>Mon compte</h1>
            </div>
            :
            <div>
            
            </div>
            }
            
        </header>
    )
};

export default Header;