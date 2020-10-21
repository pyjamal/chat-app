import React from 'react';
import './App.css';
//import Contact from './components/Contact'
import ContactList from './components/ContactList';


function App() {
  return (
    <div className="App">
      <ContactList />
    </div>
  );
}

export default App;

/*<Contact name= 'Leon Davis' avatar= 'https://randomuser.me/api/portraits/men/76.jpg' online= {true}/>
      <Contact name= 'Kathryn Riley' avatar= 'https://randomuser.me/api/portraits/women/45.jpg' online= {false}/>
      <Contact name= 'Derek Parker' avatar= 'https://randomuser.me/api/portraits/men/75.jpg' online= {true}/>
      <ContactList />*/