import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import VideoCall from './pages/VideoCall'
import CadastroP from './pages/CadastroProf'
import CadastroA from './pages/CadastroAluno'
import DashboardP from './pages/dashboardProf'
import DashboardA from './pages/dashboardAluno'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/CadastroP" element={<CadastroP />} />
        <Route path="/CadastroA" element={<CadastroA />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/DashboardP" element={<DashboardP />} />
        <Route path="/DashboardA" element={<DashboardA />} />
        <Route path="/VideoCall" element={<VideoCall />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;