import './App.css'
import Sidebar from './components/Sidebar'

import { useContext } from 'react'
import { KalpasContext } from './context'
import Content from './components/Content'
import { Post } from './types'
import FeedbackForm from './components/Sidebar/form'


function App() {
  const { posts, showForm }: any = useContext(KalpasContext)


  return (
    <div style={{ overflow: showForm && "hidden" }} className="App">
      <Sidebar />
      <Content {...{ posts }} />
      {showForm && <FeedbackForm />}
    </div>
  )
}

export default App
