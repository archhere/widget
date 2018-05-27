import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import AutoComplete from './autocomplete'

const TabViews = [
  {title: "One", content: "I love Rishabh"},
  {title: "Two", content: "I love Babi"},
  {title: "Three", content: "I love Praveen"}
];


const names = ["Harry Potter","Hermione Granger","Ron Weasley","Ginny Weasly","Loona Lovegood","Neville Longbottom","Draco Malfoy","Sirius Black","Remus Lupin","Dedallus Diddle","Albus Dumbledore","Lily Potter","Minerva McGonagal"]


function Root() {

    return (

      <div>
        <Clock />
        <Tabs panes = {TabViews} />
        <Weather />
        <AutoComplete names = {names} />
      </div>
    );

}



document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById('root');
  ReactDom.render(<Root />,root);
});
