
import { Banner } from '../../components/header/Banner';

import Card from "../../components/header/Card"
import Customer from '../../components/header/Customer';
// import Feed from '../../components/Footer/Feed';
import React, { Component } from 'react'

export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
      <Banner />
      <Card />
      <Customer />    
      </div>
    )
  }
}

export default Home