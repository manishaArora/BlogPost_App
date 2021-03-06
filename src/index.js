import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter , Route} from 'react-router-dom';
import PostIndex from './components/post_index';
import promise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Hello extends React.Component{
    render(){ return <div> Hello!! </div> }
}
class GoodBye extends React.Component{
    render(){ return <div> GoodBye!!</div> }
}
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
    <Route path="/" component={PostIndex} />
    </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
