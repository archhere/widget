import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const TabViews = [
  {title: "One", content: "I love Rishabh"},
  {title: "Two", content: "I love Babi"},
  {title: "Three", content: "I love Praveen"}
];

function Root() {

    return (

      <div>
        <Clock />
        <Tabs panes = {TabViews} />
        <Weather />

      </div>
    );

}



document.addEventListener('DOMContentLoaded',()=>{
  const root = document.getElementById('root');
  ReactDom.render(<Root />,root);
});
