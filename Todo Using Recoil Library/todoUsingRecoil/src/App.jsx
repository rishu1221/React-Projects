import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputForm from './components/InputFrom'
import Buttons from "./components/Buttons"
import {RecoilRoot} from 'recoil'
import TodoListComponent from './components/TodoList'
import PageWrapper from './components/PageWrapper'
import FilteredListComponent from './components/FilteredListComponent'


function App() {
  return (
    <div>
      <RecoilRoot>
      <PageWrapper>
      <div className='row'>
        <div className='col-lg-4 section_Page inputForm'>
        <InputForm></InputForm>
        </div>
        <div className='col-lg-4 section_Page todoList'>
          <TodoListComponent></TodoListComponent>
        </div>
        <div className='col-lg-4 section_Page filterList'>
          <FilteredListComponent></FilteredListComponent>
        </div>
      </div>
      </PageWrapper>
      </RecoilRoot>
    </div>
  )
}

export default App
