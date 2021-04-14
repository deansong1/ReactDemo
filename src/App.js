import React from 'react';
import {Provider} from "react-redux"
import store from "./store/store"
import './App.css';
// import './view/demoCalu/demo-del.css';
// import Demo1 from "./jspLumb/Demo1";
// import Demo3 from "./jspLumb/Demo3";
// import GojsDemo from "./view/gojsStudy/gojsTest";
// import GojsDemo1 from "./view/gojsStudy/gojsTest1";
// import GojsDemo2 from "./view/gojsStudy/goJsTest2";
// import GojsDemo3 from "./view/gojsStudy/gojsTest3";
// import Demo2 from "./jspLumb/Demo2";
// import DemoDel from './view/demoCalu/demo-del';
// import Login from "./view/login/login";
// import LifeCycle from "./view/life-cycle";
// import NineDiff from "./view/nineDiff/nine-diff";
// import TodoList from "./components/todoList/todoList"
// import Canvas from "./components/canvas/Canvas"
// import TableModal from "./components/tableModal"
// import DrawView from "./view/viewPrac/drawView";
// import { Button } from 'antd';
// import Hook from './view/hook/hook.js';
// import DragHook from './view/hook/dragHook.js';
// import BookList from './view/hook/bookList.js';
import NavBar from './view/hook/navbar.js';
import BrowserHeight from './view/browserAdapt/browserHeight.js';
// import EchartsForRe from './components/ecahrts/echarsForReact';
// import HomeRedux from './view/home-redux.js';
// import ComA from './view/comA.js';
// import ComB from './view/comB.js';
// import Boy from './view/Boy.js';
// import Nav from './components/Nav';
// import Timer from "./components/Timer";
// import KeyTest from "./components/KeyTest";
// import ReactList from "./components/ReactList";
// import Props from "./view/Props";
// import ModalTest from "./antdTest/doubleModal.js";
// import JqDemo1 from "./jQuery/jq1.js";
// import Form1 from "./antdTest/formTest";
// import MonitorChart from "./Gojs/logisticsMonitor";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <header className="App-header">
        {/* <MonitorChart/> */}
        {/* <Form1/> */}
        {/* <ModalTest/> */}
        {/* <Demo3 initData={"3"}/> */}
        {/* <JqDemo1/> */}
        {/* <Demo1/> */}
        {/* <GojsDemo1/> */}
        {/* <GojsDemo/> */}
        {/* <GojsDemo2/> */}
        {/* <GojsDemo3/> */}
        {/* <Demo2/> */}
        {/* <Boy />
        <ComB />
        <ComA />
        <HomeRedux/> */}
        {/* <EchartsForRe/> */}
        {/* <TableModal/> */}
        {/* 任务列表组件 */}
        {/* <DrawView/> */}
        {/* <TodoList /> */}
        {/* <Canvas /> */}
        {/* <NineDiff/>  九宫格组件 */}
        {/* <DemoDel /> */}
        {/* <Hook/>
        <DragHook/> */}
        {/* <NavBar/> */}
        <BrowserHeight/>
        {/* <BookList /> */}
        {/* <LifeCycle /> */}
        {/* <Login/> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* 子组件 */}
        {/* 
        <Nav/>
        <Timer/>
        <KeyTest/>
        <ReactList/>
        <Props/> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    {/* <Button type="primary">Button</Button> */}
      </header>
    </div>
    </Provider>
    
  );
}

export default App;
