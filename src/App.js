import React from "react";
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './main/home/Index';
import Career from './main/career/Index';
import Team from './main/team/Index';
import AboutUs from './main/about/About';
import Contact from './main/contact/Contact';
import Services from "./main/services/Services";
import ProductEngineering from "./main/services/ProductEngineering";
import StartupSoftware from "./main/services/StartupSoftware";
import DigitalTransformation from "./main/services/DigitalTransformation";
import EnterpriseServices from "./main/services/EnterpriseServices";
import GetFreeQuote from "./main/common_components/GetFreeQuote";
import Staffing from "./main/staffing/Staffing";   
import ConfidentialityPolicy from "./main/ConfidentialityPolicy";
import CaseStudies from './main/CaseStudies';
import CustomSoftwareDevelopment from "./main/services/CustomSoftwareDevelopment";
import ITConsultantAdvisoryServices from "./main/services/ITConsultantAdvisoryServices";
import ITStaffAugmentation from "./main/services/ITStaffAugmentation";
import BackendDevelopmentService from "./main/services/BackendDevelopmentServices";
import FrontendDevelopmentService from "./main/services/FrontendDevelopmentServices";
import SaasApplicationDevelopmentService from "./main/services/SaasApplicationDevelopmentServices";
import BusinessIntelligenceService from "./main/services/BusinessIntelligenceServices";
import DatabaseDevelopmentService from "./main/services/DatabaseDevelopmentServices";
import WebDevelopmentService from "./main/services/WebDevelopmentServices";
import FenceCRM from "./main/product/FenceCRM";
import DedicatedTeam from "./main/services/DedicatedTeam";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' exact element={<Home />} />
          <Route path='/career' exact element={<Career />} />
          <Route path='/team' exact element={<Team />} />
          <Route path='/about' exact element={<AboutUs />} />
          <Route path='/contact' exact element={<Contact />} />
          <Route path='/services' exact element={<Services />} />
          <Route path='/product_engineering' exact element={<ProductEngineering />} />
          <Route path='/custom_software_development' exact element={<CustomSoftwareDevelopment />} />
          <Route path='/dedicated_team' exact element={<DedicatedTeam />} />
          <Route path='/ITConsultantAdvisoryService' exact element={<ITConsultantAdvisoryServices />} />
          <Route path='/ITStaffAugmentation' exact element={<ITStaffAugmentation />} />
          <Route path='/BackendDevelopmentServices' exact element={<BackendDevelopmentService />} />
          <Route path='/FrontendDevelopmentServices' exact element={<FrontendDevelopmentService />} />
          <Route path='/SaasApplicationDevelopmentServices' exact element={<SaasApplicationDevelopmentService />} />
          <Route path='/BusinessIntelligenceServices' exact element={<BusinessIntelligenceService />} />
          <Route path='/DatabaseDevelopmentServices' exact element={<DatabaseDevelopmentService />} />
          <Route path='/WebDevelopmentServices' exact element={<WebDevelopmentService />} />
          <Route path='/startup_software' exact element={<StartupSoftware />} />
          <Route path='/digital_transformation' exact element={<DigitalTransformation />} />
          <Route path='/enterprise_services' exact element={<EnterpriseServices />} />
          <Route path='/getFreeQuote' exact element={<GetFreeQuote />} />
          <Route path='/staffing' exact element={<Staffing />} />
          <Route path='/confidentiality_policy' exact element={<ConfidentialityPolicy />} />
          <Route path='/CaseStudies' exact element={<CaseStudies />} />
          <Route path='/fence-crm' exact element={<FenceCRM />} />

        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
