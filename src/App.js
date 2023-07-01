import { useState } from "react";
import SocketService from "./SingletonDP";
import ProxyPattern from "./ProxyPattern";

export function App() {

  
// 1st - Singleton Design Pattern

    // the problem is , if we change state here, app renders , our socket connection create on every render 
    // so we need to follow Singleton Design Pattern here , only 1 instance should be here for whole App.

    // we have added an instance variable in SocketService class for achieving this 
    const socket = new SocketService()
    const [state, setState] = useState(0)
    return(
        <div>
            <h4>1. We Are Using Socket IO here</h4>
            <br></br>

            <button onClick={()=> { setState(prev => prev+1)}}>
                Change State
            </button>
            <br></br>
            <br></br>
            <hr></hr>
            <ProxyPattern />
        </div>
    );
  }