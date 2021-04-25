import React from 'react';
import Card from './components/Card';
import {UglyContextConsumer} from './components/UglyContext';
import AddForm from './components/form';
import './styles.css';

const App = () => {
  return (
    <UglyContextConsumer>
      {context => (
        <div className="box">
          <AddForm />
            <div className="cardBox">
              {
                context.state.data.map(item => {
                  return <Card title={item.title} link={item.link} description={item.description} key={item.title} />
                })
              }
            </div>
        </div>
      )}
    </UglyContextConsumer>
  );
}

export default App;
