import React from 'react'

import Education from './education'
import Career from './career'
import Skills from './skills'
import Hero from './hero'
import Profil from './profil'
import Separator from './utils/separator'


const AboutContent = () => (
  <div>
    <Hero/>
    <Profil/>
    <section className="section" style={{backgroundColor: "lightgrey"}}>
      <div className="container">
        <Separator title="Experiences"/>
        <Education/>
        <Separator/>
        <Career/>
      </div>
    </section>
    <Skills/>
  </div>
)

export default AboutContent