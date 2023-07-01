import React, { useState } from "react";

let isAdmin = true;

const person = {
  id: 1,
  name: "John Doe",
  age: 22,
  balance: 10_000,
};

const personProxy = new Proxy(person, {
  set: (obj, prop, value) => {
    if (prop == "name") {
      obj[prop] = value;
      return obj
    } else {
      throw new Error("You can only change name property");
    }
  },
  get: (obj, prop) => {
    if (prop == "balance") {
      if (isAdmin) return obj[prop];
      return null;
    }
    return obj[prop];
  },
});

function ProxyPattern() {

    const [state, setState] = useState(0)
  return (
    <div> 

        <h3>2. Proxy Pattern</h3>
        <h5>Id: {personProxy.id}</h5>
        <h5>Name: {personProxy.name}</h5>
        <h5>Balance: {personProxy.balance}</h5>
        <button
          onClick={(e) => {
            try{
                personProxy.name = 'Anshul'
                // personProxy.age = 4;
                console.log(personProxy)
                setState(prev => prev+1)
            }catch(error){
                console.log(error)
            }
          }}
        >
          Change
        </button>
     
    </div>
  );
}

export default ProxyPattern;
