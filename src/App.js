import { useState, useEffect } from 'react';
import './App.css';
import Person from './Person';
import Individuals from './Individuals';
import Teachers from './Teachers';
import TeacherProp from './TeacherProp';

function App() {

  const [data, setData] = useState()

  const [name, setName] = useState("Lionel Messi");

  const [year, setYear] = useState();


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(data => setData(data))
  }, []);


  function Year() {
    setYear("aldrig");
  };

  function changeName() {
    setName("ikke nogen");

  };

  return (
    <div>
      <h1>Corona</h1>

      <p>{year}</p>
      <div class="center">
      <button onClick={Year}>Klik her for at se hvornår corona slutter</button>
      </div>
      <p>{name}</p>
      <button onClick={changeName}>Den bedste fodboldspiller efter Lionel Messi</button>

      <h1>
        <span>Hvem var de seneste tre til at vinde Ballon D'or?</span>
      </h1>
      <dl>{Teachers.map((indivialsTeachers) => {
        return (<TeacherProp
          name={indivialsTeachers.name}
          subject={indivialsTeachers.subject}/>)
      })}</dl>

      <h1>
        <span>Top 3 film på Netflix</span>
      </h1>
      <dl>{Individuals.map((persons) => {
        return (<Person
          name={persons.name}
          age={persons.age}
          personality={persons.personality} />)
      })}</dl>

<h1>Fetcher data fra en API</h1>
      {data && data.map((user) => <p>{user.name}</p>)}

    </div>
  );
}

export default App;
