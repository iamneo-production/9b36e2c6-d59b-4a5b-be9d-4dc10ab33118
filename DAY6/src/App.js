import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'

import Footer from './components/pages/Footer'
import NavigationBar from './components/pages/NavigationBar'
import './App.css'

import StockTable from './components/pages/StockTable'

import AboutUs from './components/pages/AboutUs'
import UserProfile from './components/pages/UserProfile'
import InventoryDashboard from './components/pages/InventoryDashboard'
import BillingComponent from './components/pages/Billing'



export default function App() {
    return (
        <Router>
        
        <NavigationBar />
        <div>

         </div>
            <div>
        
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <Route path="/register" component={ RegisterPage } />
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <Route path="/home" component={ HomePage } />
                    <Route path="/stocktable" component={ StockTable } />
                    <Route path="/about" component={AboutUs } />
                    <Route path="/profile" component={UserProfile } />
                    <Route path="/dash" component={InventoryDashboard } />
                    <Route path="/bill" component={BillingComponent } />
                   
                   
                   

                   


                </Switch>
             
            </div>
            <Footer />
        </Router>
    )
}

