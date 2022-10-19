import React from 'react'
import Banner from './Banner';
import About from './about';
import Partnership from './partnership';
import Counting from './Counting';
import Services from './Services';
import Awards from './Award';
import Projects from './Projects';
import Plans from './Plan';
import ContactUs from './Contact';
import ContactUsTest from './ContactTest';
import Template from '../common/Template';
import CaseStudy from './CaseStudy';
import Testimonials from './Testimonials';

function Index() {
  return (
    <>
      <Template>
        <Banner />
        <About />
        <Partnership />
        {/* <Awards /> */}
        {/* <Services /> */}
        {/* <Counting /> */}
        {/* <Projects /> */}
        <CaseStudy />
        <Testimonials />
        <Plans />
        {/* <ContactUs /> */}
        <ContactUsTest />
      </Template>
    </>
  )
}

export default Index
