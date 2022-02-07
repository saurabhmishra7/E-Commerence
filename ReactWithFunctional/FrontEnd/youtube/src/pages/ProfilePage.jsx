import React,{Component} from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile/Profile';


export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Profile />
        <Footer />
      </div>
    )
  }
}
