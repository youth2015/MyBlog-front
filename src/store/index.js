import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
//import createLogger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
import login from '../reducer/login';
import tags from '../reducer/tags';
import resume from '../reducer/resume';
import rootSagas from '../saga/index';

const initState = {
    login:login.initState,
    tags:tags.initState,
    resume: resume.initState
};

const reducers = {
    login:login.reducer,
    tags:tags.reducer,
    resume:resume.reducer
};

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
);

/*const store = createStore(
    combineReducers(reducers),
    initState,
    //applyMiddleware(composeWithDevTools())
);*/

// export default store;

// 第二种写法
export const configureStore = () => {
    //加强store
    const store = createStore(
        combineReducers(reducers),
        initState,
        enhancer
    );
    sagaMiddleware.run(rootSagas);
    return store;
};