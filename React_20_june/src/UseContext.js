import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export default function UseContext() {

  function Component1() {
    const [user, setUser] = useState({
      name: "Minhaj",
      month: "December"
    });

    return (
      <UserContext.Provider value={user}>
        <>
          <h1>{`Hello ${user.name}!`}</h1>
          <Component2 />
        </>
      </UserContext.Provider>
    );
  }

  function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }

  function Component3() {
    const {name,month} = useContext(UserContext);
    
    return (
      <>
        <h1>{`Component 3: ${name}, ${month}`}</h1>
        <Component4 />
      </>
    );
  }

  function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  }

  function Component5() {

    return (
      <>
        <h1>Component 5</h1>

      </>
    );
  }

  return <Component1 />;
}
