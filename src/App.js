import './App.css';
import Footer from "../src/components/footer/footer.js"
import Header from "../src/components/header/header.js";

import kid1 from "../src/assets/kid1.png";
import kid2 from "../src/assets/kid2.png";
import kid3 from "../src/assets/kid3.png";
import kid4 from "../src/assets/kid4.png";
import boys from "../src/assets/boys.jpg";
import boys2 from "../src/assets/boys2.jpg"
import a1 from "../src/assets/a1.jpg";
import a2 from "../src/assets/a2.jpg";
import a3 from "../src/assets/a3.jpg";
import b1 from "../src/assets/b1.jpg";
import b2 from "../src/assets/b2.jpg";
import b3 from "../src/assets/b3.jpg";
import c1 from "../src/assets/c1.jpg";
import c2 from "../src/assets/c2.jpg";
import c3 from "../src/assets/c3.jpg";
import mom from "../src/assets/mom.png";
import map from "../src/assets/map.png";
// import heart from "../src/assets/heart.jpg";
// import notepad from "../src/assets/notepad.jpg";
// import lock from "../src/assets/lock.jpg";
import yellowbar from "../src/assets/yellowbar.jpg";
import FavoriteIcon from '@material-ui/icons/Favorite';
import LockIcon from '@material-ui/icons/Lock';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import videopatch from "../src/assets/video-patch.png";

function App() {
  return (
    <div className="App">
      
      {/* <Header /> */}

      <h1 className="uk-align-center uk-text-center uk-text-bold uk-margin-large-top">Why Children?</h1>
      <h1 className="uk-align-center uk-text-center yellowtxt uk-margin-remove">______________________________</h1>
      <p className="uk-align-center uk-text-center uk-width-1-3">Children are the building blocks of our nation’s future. Let’s invest in their potential today, so that they can become our scientists, politicians, sportspeople, journalists and teachers of tomorrow!</p>
      
      <div><img src={boys} alt="Cannot load"/></div>

      <div className="margin_elevate border_radius uk-flex uk-width-3-4 uk-padding-large uk-align-center uk-box-shadow-large uk-flex-middle" uk-grid="true">
        <div className="uk-width-1-1 uk-width-1-2@m uk-text-center ">
          <img src={map} />
        </div>
        <div className="uk-width-1-1 uk-width-1-2@m uk-text-center uk-text-left@m"><span className="black_text_large">At 472 million, children <span className="yellowtxt_large">account for 40%</span> of India’s population</span><br/>
        And yet, only 2.46% of the 2021-22 Union Budget was allocated to their development and welfare. In fact, the National Plan of Action for Children recommends that budgetary allocations for children should be 5% of the country’s GDP – ours has been stagnant at 0.43% of GDP for the last two years.
        </div>
      </div>

      <div>
        <div className="uk-width-1-2 uk-text-center uk-align-center">
          <h2 className="uk-text-bolder margin_little">India’s children battle<span className="yellowtxt_large">some of the worst circumstances </span> in the world.</h2>
        </div>
      </div>

      {/* Card animation */}

      <div className="uk-width-1-1 uk-child-width-1-3@m uk-grid-match pad_extreme_custom">
        {/* uk-grid */}
        <div className="float_left pad_little">
          <div className="uk-card uk-card-default uk-card-hover uk-card-body">
            <h1 className="uk-text-center uk-text-bold margin_collapse">43</h1>
            <h1 className="uk-text-center margin_collapse yellowtxt">Million</h1>
            <p className="uk-text-center">children, between 6-18 years of age, do not go to school</p>
            <p className="uk-text-center uk-text-small yellowtxt">Estimate: RGI Census Population Projection 2016 and UDISE 2016-17</p>
          </div>
        </div>
        <div className="float_left pad_little">
          <div className="uk-card uk-card-default uk-card-hover uk-card-body">
            <h1 className="uk-text-center uk-text-bold margin_collapse">33</h1>
            <h1 className="uk-text-center margin_collapse yellowtxt">Million</h1>
            <p className="uk-text-center">child labourers go to work instead of school</p>
            <p className="uk-text-center uk-text-small yellowtxt">Census 2011</p>
          </div>
        </div>
        <div className="float_left pad_little">
          <div className="uk-card uk-card-default uk-card-hover uk-card-body">
            <h1 className="uk-text-center uk-text-bold margin_collapse">1 of 3</h1>
            <h1 className="uk-text-center margin_collapse yellowtxt">children</h1>
            <p className="uk-text-center">who is child bride, in the world, is from India UNICEF 2014</p>
            <p className="uk-text-center uk-text-small yellowtxt">Estimate: RGI Census Population Projection 2016 and UDISE 2016-17</p>
          </div>
        </div>
        <div className="float_left pad_little">
          <div className="uk-card uk-card-default uk-card-hover uk-card-body">
            <h1 className="uk-text-center uk-text-bold margin_collapse">2 of 3</h1>
            <h1 className="uk-text-center margin_collapse yellowtxt">Children</h1>
            <p className="uk-text-center">below the age of 5, succumb to malnutrition UNICEF 2019</p>
            <p className="uk-text-center uk-text-small yellowtxt">Estimate: RGI Census Population Projection 2016 and UDISE 2016-17</p>
          </div>
        </div>
        <div className="float_left pad_little">
          <div className="uk-card uk-card-default uk-card-hover uk-card-body">
            <h1 className="uk-text-center uk-text-bold margin_collapse">2 of 5</h1>
            <h1 className="uk-text-center margin_collapse yellowtxt">Children</h1>
            <p className="uk-text-center">do not receive complete immunization NFHS 4 2016</p>
            <p className="uk-text-center uk-text-small yellowtxt">Estimate: RGI Census Population Projection 2016 and UDISE 2016-17</p>
          </div>
        </div>
        <div className="float_left pad_little">
          <div className="uk-card uk-card-default uk-card-hover uk-card-body">
            <h1 className="uk-text-center uk-text-bold margin_collapse">500%</h1>
            <h1 className="uk-text-center margin_collapse yellowtxt">Increase</h1>
            <p className="uk-text-center">in crimes against children between 2008-2018 NCRB 2018</p>
            <p className="uk-text-center uk-text-small yellowtxt">Estimate: RGI Census Population Projection 2016 and UDISE 2016-17</p>
          </div>
        </div>
      </div>

      {/* Card animation */}

      {/* Child rights header */}

      <div>
        <div className="uk-width-1-2 uk-text-center uk-align-center">
          <h2 className="uk-text-bolder">This problem before us is a mammoth one. But<span className="yellowtxt_large"> one that can be solved</span> within our lifetimes.</h2>
          <div className="uk-text-center">All it needs is for each one of us to come together and do everything in our power to contribute to a sustainable solution.</div>
        </div>
        <button className="uk-padding-small dnbtn uk-text-center uk-align-center">
                    🖤 Yes! I want to help
        </button>
      </div>
    
      {/* Child rights header */}

      {/* Image and content alignments */}

      <div className="float_left div_red">

        <div className="whitetxt uk-align-center uk-text-center uk-margin-large-top">
          The Importance Of Children’s Rights
        </div>
        <div className="whitetxt_small uk-width-3-4 uk-align-center uk-text-center">
          According to the United Nations Convention on the Rights of the Child (UNCRC), which was ratified by India in 1992, all children have fundamental rights which must be recognized by governments and citizens alike. At CRY, we’re committed to doing everything we can to ensure the rights of India’s children and so, work on 4 key programmatic areas.
        </div>
          
        <div className="uk-width-1-1 uk-width-1-2@s float_left pad_more">
          <div className="pad_more">
              <span className="whitetxt uk-text-left float_left">Education</span>
              <span className="yellowtxt uk-text-left uk-width-1-1 float_left">Right To Development</span>
          </div>
          <div className="pad_more float_left font_small_s font_large_s whitetxt_small">A quality education not only builds knowledge, capabilities, life skills and values amongst children but also develops their creative, social and emotional abilities. It is crucial for their cognitive and personal development, including critical thinking and problem-solving.
          <br/><br/>
          We believe that every child should be able to go to school and complete their education without any discrimination based on gender, caste or socio-economic status. 
          </div>
        </div>
        <div className="pad_more">
          <img className="uk-width-1-1 uk-width-1-2@s float_left" src={kid1} alt=""></img>
        </div>
      </div>

      {/* START = CRY’s education programs focus on: */}

      <div className="float_left div_red pad_little">
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m float_left pad_little">
          <article className="uk-article">

            <div className="float_left">
              <h4 className="float_left uk-margin-right icon_block"><img src={a1} alt="Cannot load"/></h4>
              <div className="float_left uk-text-bolder uk-text-large">Early Childhood Education <br/> <span className="yellowtxt">0 – 3 Years</span></div>
            </div>
            
            <p className="uk-width-1-1 float_left">A child’s early years are the foundation for developing their future learning abilities. Research says that 80% of a child’s brain is developed by the age of 3, which makes early childhood education an essential building block of a child’s future success.</p>

          </article>
        </div>

        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m float_left pad_little">
          <article className="uk-article">

            <div className="float_left">
              <h4 className="float_left uk-margin-right icon_block"><img src={a2} alt="Cannot load"/></h4>
              <div className="float_left uk-text-bolder uk-text-large">School Readiness <br/> <span className="yellowtxt">3 – 6 Years</span></div>
            </div>
            
            <p className="uk-width-1-1 float_left">It has been observed that Anganwadi centres play a big role in preparing children for formal primary school. They help children develop the skills, knowledge and attitudes which are critical for them to succeed in school as well as late in life. Building the capacity of Anganwadi workers thus becomes a key area of intervention.</p>

          </article>
        </div>

        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m float_left pad_little">
          <article className="uk-article">

            <div className="float_left">
              <h4 className="float_left uk-margin-right icon_block"><img src={a3} alt="Cannot load"/></h4>
              <div className="float_left uk-text-bolder uk-text-large">Learning Outcomes <br/> <span className="yellowtxt">6 - 18 Years</span></div>
            </div>
            
            <p className="uk-width-1-1 float_left">Learning outcomes are influenced by children’s uninterrupted access to quality education. Ensuring that children are enrolled in school and don’t drop out before completing their education age appropriately is thus a critical area of intervention.</p>

          </article>
        </div>

      </div>

      {/* END =  CRY’s education programs focus on: */}

      <div className="float_left div_red">
        <div className="pad_more">
          <img className="uk-width-1-1 uk-width-1-2@s float_left" src={kid2} alt=""></img>
        </div>
        <div className="uk-width-1-1 uk-width-1-2@s float_left pad_more">
          <div className="pad_more">
              <span className="whitetxt uk-text-left float_left">Health and Nutrition</span>
              <span className="yellowtxt uk-text-left uk-width-1-1 float_left">Right To Survival</span>
          </div>
          <div className="pad_more float_left font_small_s font_large_s whitetxt_small">Proper nutrition and quality primary healthcare are essential for a child’s physical, mental and cognitive development. Timely, regular and adequate intake of essential nutrition is necessary from the time of conception itself to avoid long-term and in some cases, irreversible damage to the child’s health.

          We believe that no child should suffer from malnutrition or poor health irrespective of their socio-economic background.
          </div>
        </div>
      </div>
      
      {/* START = CRY does this by focusing on the following: */}

      <div className="float_left div_red pad_little">
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m float_left pad_little">
          <article className="uk-article">

            <div className="float_left">
              <h4 className="float_left uk-margin-right icon_block"><img src={b1} alt="Cannot load" /></h4>
              <div className="float_left uk-text-bolder uk-text-large">Prenatal and Postnatal Care <br /> <span className="yellowtxt">0 – 3 Years</span></div>
            </div>

            <p className="uk-width-1-1 float_left">Proper and timely care for expectant as well as lactating mothers is crucial for a child’s healthy development. Quality prenatal care that reduces the risk of pregnancy complications, institutional deliveries that aid healthy live births and regular postnatal check ups that encourage breastfeeding are key areas of intervention.</p>

          </article>
        </div>

        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m float_left pad_little">
          <article className="uk-article">

            <div className="float_left">
              <h4 className="float_left uk-margin-right icon_block"><img src={b2} alt="Cannot load" /></h4>
              <div className="float_left uk-text-bolder uk-text-large">Growth Monitoring <br /> <span className="yellowtxt">3 – 6 Years</span></div>
            </div>

            <p className="uk-width-1-1 float_left">Regular growth monitoring for children till the age of 6 years is imperative to ensure healthier childhoods. Implementing infant and young child feeding (IYCF) practices, addressing gender discrimination to enable equitable access to primary healthcare and ensuring the completion of immunization schedules to manage preventable diseases are critical areas of intervention. </p>

          </article>
        </div>

        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m float_left pad_little">
          <article className="uk-article">

            <div className="float_left">
              <h4 className="float_left uk-margin-right icon_block"><img src={b3} alt="Cannot load" /></h4>
              <div className="float_left uk-text-bolder uk-text-large">Learning Outcomes <br /> <span className="yellowtxt">6 - 18 Years</span></div>
            </div>

            <p className="uk-width-1-1 float_left">The effort to change behaviours and attitudes on the issues of children’s health and nutrition is most effective when introduced early. Engaging with adolescent girls and boys on topics like reproductive child health (RCH) helps in bringing about lasting generational change.</p>

          </article>
        </div>

      </div>

      {/* END =  CRY does this by focusing on the following: */}

      <div className="float_left div_red">
        <div className="uk-width-1-1 uk-width-1-2@s float_left pad_more">
          <div className="pad_more">
              <span className="whitetxt uk-text-left float_left">Safety and Protection</span>
              <span className="yellowtxt uk-text-left uk-width-1-1 float_left">Right To Protection</span>
          </div>
          <div className="pad_more float_left font_small_s font_large_s whitetxt_small">A quality education not only builds knowledge, capabilities, life skills and values amongst children but also develops their creative, social and emotional abilities. It is crucial for their cognitive and personal development, including critical thinking and problem-solving.
              We believe that every child should be able to go to school and complete their education without any discrimination based on gender, caste or socio-economic status. 
          </div>
        </div>
        <div className="pad_more">
          <img className="uk-width-1-1 uk-width-1-2@s float_left" src={kid3} alt=""></img>
        </div>
      </div>

      {/* START  = CRY’s child safety & protection programs focus on: */}

      <div className="float_left div_red pad_little">
        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m float_left pad_little">
          <article className="uk-article">

            <div className="float_left">
              <h4 className="float_left uk-margin-right icon_block"><img src={c1} alt="Cannot load" /></h4>
              <div className="float_left uk-text-bolder uk-text-large">Child Labour <br /> <span className="yellowtxt">0 – 3 Years</span></div>
            </div>

            <p className="uk-width-1-1 float_left">A child’s early years are the foundation for developing their future learning abilities. Research says that 80% of a child’s brain is developed by the age of 3, which makes early childhood education an essential building block of a child’s future success.</p>

          </article>
        </div>

        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m float_left pad_little">
          <article className="uk-article">

            <div className="float_left">
              <h4 className="float_left uk-margin-right icon_block"><img src={c2} alt="Cannot load"/></h4>
              <div className="float_left uk-text-bolder uk-text-large">Child Marriage <br /> <span className="yellowtxt">3 – 6 Years</span></div>
            </div>

            <p className="uk-width-1-1 float_left">It has been observed that Anganwadi centres play a big role in preparing children for formal primary school. They help children develop the skills, knowledge and attitudes which are critical for them to succeed in school as well as late in life. Building the capacity of Anganwadi workers thus becomes a key area of intervention.</p>

          </article>
        </div>

        <div className="uk-width-1-1 uk-width-1-1@s uk-width-1-3@m float_left pad_little">
          <article className="uk-article">

            <div className="float_left">
              <h4 className="float_left uk-margin-right icon_block"><img src={c3} alt="Cannot load"/></h4>
              <div className="float_left uk-text-bolder uk-text-large">Child Trafficking <br /> <span className="yellowtxt">6 - 18 Years</span></div>
            </div>

            <p className="uk-width-1-1 float_left">Learning outcomes are influenced by children’s uninterrupted access to quality education. Ensuring that children are enrolled in school and don’t drop out before completing their education age appropriately is thus a critical area of intervention.</p>

          </article>
        </div>

      </div>

      {/* END =   CRY’s child safety & protection programs focus on: */}

      <div className="float_left div_red">
        <div className="pad_more">
          <img className="uk-width-1-1 uk-width-1-2@s float_left" src={kid4} alt=""></img>
        </div>
        <div className="uk-width-1-1 uk-width-1-2@s float_left pad_more">
          <div className="pad_more">
              <span className="whitetxt uk-text-left float_left">Education</span>
              <span className="yellowtxt uk-text-left uk-width-1-1 float_left">Right To Development</span>
          </div>
          <div className="pad_more float_left font_small_s font_large_s whitetxt_small">A quality education not only builds knowledge, capabilities, life skills and values amongst children but also develops their creative, social and emotional abilities. It is crucial for their cognitive and personal development, including critical thinking and problem-solving.
              We believe that every child should be able to go to school and complete their education without any discrimination based on gender, caste or socio-economic status. 
          </div>
        </div>
      </div>

      {/* Image and Content alignments */}
      
      <div className="uk-width-1-1"><img className="uk-width-1-1" src={yellowbar} alt="" /></div>

      {/* Accordion section */}
      <div className="uk-padding-small bg_cream">
          <div className="uk-width-1-1 uk-width-1-2@m float_left uk-padding-large uk-align-center">
            <div className="uk-padding-small">
                <span className="black_text_large">Our Research On Child Rights</span><br/>
                We constantly endeavour to deepen the public’s understanding of children’s rights by undertaking primary as well as secondary research studies. If you’d like to learn more, download our research reports here.
            </div>
            <div className="uk-box-shadow-large uk-padding-large">
              <ul uk-accordion="true">
                <li className="uk-open">
                  <a className="uk-accordion-title" href="#">Education</a>
                  <div className="uk-accordion-content">
                    <p>Impact Of COVID-19 On School Education in India (2020) </p>
                  </div>
                </li>
                <li>
                  <a className="uk-accordion-title" href="#">Health and Nutrition</a>
                  <div className="uk-accordion-content">
                    <p>Impact Of COVID-19 On School Education in India (2020) </p>
                  </div>
                </li>
                <li>
                  <a className="uk-accordion-title" href="#">Safety and Protection</a>
                  <div className="uk-accordion-content">
                    <p>Impact Of COVID-19 On School Education in India (2020) </p>
                  </div>
                </li>
                <li>
                  <a className="uk-accordion-title" href="#">Child Participation</a>
                  <div className="uk-accordion-content">
                    <p>Impact Of COVID-19 On School Education in India (2020) </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="uk-width-1-1 uk-width-1-2@m float_left uk-text-center uk-padding-large">
            <img src={mom} alt="alt preview"/>
          </div>
      </div>
      {/* Accordion section */}

      {/* Help/ Donate Div */}

      <div className="clear_float">
        <div className="uk-width-2-3 uk-text-center uk-align-center">
          <h2 className="uk-text-bolder">How do you want to <span className="yellowtxt_large">Help Children?</span> Today</h2>
          <div className="uk-text-center">Your smallest contribution makes a big difference to children’s lives. We count on the generosity of people like you to be able to create real change for India’s children!</div>
        </div>
        <button className="uk-padding-small dnbtn uk-text-center uk-align-center">
                    🖤 Donate for happier childhoods
        </button>
      </div>

      {/* Help/ Donate Div */}

      <div><img src={boys2} alt="Cannot load"/></div>

      <div className="uk-padding-large">
        <p className="float_left uk-article-meta uk-width-1-3@s uk-text-small@s uk-margin-remove"><FavoriteIcon/><div className="pad_side inline_block uk-text-middle">All our efforts are made possible only because of your support</div></p>
        <p className="float_left uk-article-meta uk-width-1-3@s uk-text-small@s uk-margin-remove"><MenuBookIcon /><div className="pad_side inline_block uk-text-middle">Your donations are tax exempted under 80G of the Indian Income</div></p>
        <p className="float_left uk-article-meta uk-width-1-3@s uk-text-small@s uk-margin-remove"><LockIcon /><div className="pad_side inline_block uk-text-middle">Your donation transactions are completely safe and secure</div></p>
      </div>

      

    </div>

  );
}

export default App;
