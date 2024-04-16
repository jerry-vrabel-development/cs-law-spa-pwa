import './LawServices.css';
import { FaScaleBalanced, FaShield } from "react-icons/fa6";
import { GiFamilyHouse } from "react-icons/gi";
import { MdAccountBalance, MdOutlineRealEstateAgent } from "react-icons/md";
import { FaUserInjured } from "react-icons/fa";

const LawServices: React.FC = () => {
  return (
    <div id="law-services-wrapper" className="law-services-wrapper">
      <div id="law-services" className="law-services">
        <h1><FaScaleBalanced className='law-service-icon' /> Law Services</h1>
        <ul>
          <li><a href='#family-law' className=''><GiFamilyHouse className="law-service-icon" />Family Law</a></li>
          <li><a href='#criminal-defense' className=''><FaShield className="law-service-icon" />Criminal Defense</a></li>
          <li><a href='#business-law' className=''><MdAccountBalance className="law-service-icon" />Business Law</a></li>
          <li><a href='#estate-planning' className=''><MdOutlineRealEstateAgent className="law-service-icon" />Estate Planning</a></li>
          <li><a href='#personal-injury' className=''><FaUserInjured className="law-service-icon" />Personal Injury</a></li>
        </ul>
      </div>
      <div id="family-law" className="family-law">
        <div className='family-law-content'>
          <h2><GiFamilyHouse className="law-service-icon" />Family Law</h2>
          <p>Navigating the complexities of family law requires compassionate support and expert guidance. At Conrad Szewczyk & Associates, we understand the emotional and legal challenges that families face during these times. Our dedicated team is committed to providing comprehensive family law services tailored to your unique needs.</p>
          <h3>Our Approach</h3>
          <p>With sensitivity and professionalism, we approach each case with the utmost care and attention to detail. Whether you're facing a divorce, child custody dispute, adoption, or any other family-related legal matter, we strive to achieve the best possible outcome for you and your loved ones.</p>
          <h3>Our Services</h3>
          <p>Divorce and Separation: Ending a marriage is never easy. Our experienced attorneys are here to guide you through the divorce process, ensuring your rights are protected and helping you move forward with confidence.</p>
          <p>Child Custody and Support: We prioritize the well-being of your children and work tirelessly to secure fair custody arrangements and child support agreements that serve their best interests.</p>
          <p>Adoption: Welcoming a new member into your family through adoption is a joyous occasion. We provide comprehensive legal assistance to navigate the complexities of adoption law, helping you build the family you've always dreamed of.</p>
          <p>Prenuptial and Postnuptial Agreements: Planning for the future is essential. Our attorneys can assist you in drafting prenuptial and postnuptial agreements that protect your assets and provide clarity in the event of a divorce.</p>
          <p>Domestic Violence: If you or a loved one is experiencing domestic violence, we're here to help you take legal action to ensure your safety and well-being.</p>
          <h3>Why Choose Us</h3>
          <p>Experience: With years of experience in family law, our attorneys have the knowledge and expertise to handle even the most complex cases.</p>
          <p>Compassion: We understand the emotional toll that family legal matters can take. You can trust us to provide compassionate support every step of the way.</p>
          <p>Personalized Attention: Your case is unique, and we treat it as such. We take the time to understand your individual needs and tailor our approach accordingly.</p>
          <h3>Contact Us</h3>
          <p>If you're in need of family law assistance, don't hesitate to reach out to us. Schedule a consultation today to discuss your case and learn how we can help you navigate the legal process with confidence.</p>
        </div>
      </div>

      <div id="criminal-defense" className="criminal-defense">
        <div className='criminal-defense-content'>
        <h2><FaShield className="law-service-icon" />Criminal Defense</h2>
        <p>When facing criminal charges, your freedom and future are on the line. At Conrad Szewczyk & Associates, we understand the gravity of the situation and are committed to providing aggressive and effective legal representation to protect your rights.</p>
        <h3>Our Approach</h3>
        <p>With unwavering dedication and a strategic approach, our experienced criminal defense attorneys will fight tirelessly to secure the best possible outcome for your case. From investigation to trial, we leave no stone unturned in building a strong defense on your behalf.</p>
        <h3>Our Services</h3>
        <ul>
          <li><strong>DUI and Traffic Offenses:</strong> Being charged with a DUI or other traffic offense can have serious consequences. Our attorneys have a proven track record of successfully defending clients against these charges, minimizing penalties and protecting driving privileges.</li>
          <li><strong>Drug Offenses:</strong> Whether you're facing possession, distribution, or trafficking charges, we have the knowledge and experience to challenge the prosecution's case and pursue the best possible outcome for you.</li>
          <li><strong>Assault and Violent Crimes:</strong> Accusations of assault or other violent crimes can have severe consequences, including lengthy prison sentences. Our attorneys will vigorously defend your rights and work to achieve the most favorable resolution for your case.</li>
          <li><strong>Theft and Property Crimes:</strong> Allegations of theft or property crimes can damage your reputation and future opportunities. We'll work to mitigate the impact of these charges and protect your rights throughout the legal process.</li>
          <li><strong>White Collar Crimes:</strong> Complex white-collar crime allegations require skilled legal representation. Our attorneys have the expertise to navigate intricate financial cases and develop strong defenses tailored to your specific situation.</li>
        </ul>
        <h3>Why Choose Us</h3>
        <ul>
          <li><strong>Experience:</strong> With a proven track record of success in criminal defense, our attorneys have the knowledge and expertise to handle even the most challenging cases.</li>
          <li><strong>Aggressive Advocacy:</strong> We're not afraid to take on tough cases and fight tirelessly to protect our clients' rights and freedoms.</li>
          <li><strong>Client-Centered Approach:</strong> Your well-being is our top priority. We'll take the time to listen to your concerns, explain your options, and craft a personalized legal strategy designed to achieve the best possible outcome for your case.</li>
        </ul>
        <h3>Contact Us</h3>
        <p>If you're facing criminal charges, don't wait to seek legal representation. Contact us today to schedule a confidential consultation with one of our experienced criminal defense attorneys.</p>
      </div>
      </div>

      <div id="business-law" className="business-law">
      <div className='business-law-content'>
        <h2><MdAccountBalance className="law-service-icon" />Business Law</h2>
        <p>Operating a business in today's complex legal landscape requires proactive legal guidance and strategic planning. At Conrad Szewczyk & Associates, we offer comprehensive business law services to help entrepreneurs, startups, and established companies navigate legal challenges and achieve their goals.</p>
        <h3>Our Approach</h3>
        <p>With a deep understanding of business law and a focus on our clients' objectives, our experienced attorneys provide tailored legal solutions designed to protect their interests and promote growth. Whether you're launching a new venture, negotiating a contract, or facing a business dispute, we're here to help.</p>
        <h3>Our Services</h3>
        <ul>
          <li><strong>Business Formation:</strong> Choosing the right legal structure for your business is crucial. We'll guide you through the process of forming a corporation, LLC, partnership, or other entity, ensuring compliance with state and federal regulations.</li>
          <li><strong>Contracts and Agreements:</strong> Clear and enforceable contracts are essential for protecting your business interests. Our attorneys can draft, review, and negotiate contracts and agreements tailored to your specific needs, including partnership agreements, employment contracts, and commercial leases.</li>
          <li><strong>Intellectual Property:</strong> Safeguarding your intellectual property rights is vital in today's competitive marketplace. We provide comprehensive IP services, including trademark registration, copyright protection, and trade secret counseling.</li>
          <li><strong>Business Transactions:</strong> Whether you're buying or selling a business, merging with another company, or entering into a joint venture, we'll help you navigate the complexities of business transactions and ensure your interests are protected every step of the way.</li>
          <li><strong>Corporate Governance:</strong> Establishing sound corporate governance practices is essential for long-term success. Our attorneys can advise on corporate compliance, board governance, and shareholder relations to help your business operate efficiently and ethically.</li>
        </ul>
        <h3>Why Choose Us</h3>
        <ul>
          <li><strong>Legal Expertise:</strong> Our attorneys have in-depth knowledge of business law and a track record of success in representing clients across a wide range of industries.</li>
          <li><strong>Client-Centric Approach:</strong> We take the time to understand our clients' unique needs and goals, providing personalized legal solutions that address their specific challenges and objectives.</li>
          <li><strong>Strategic Guidance:</strong> We're not just lawyers; we're trusted advisors who provide strategic guidance to help our clients navigate complex legal issues and make informed business decisions.</li>
        </ul>
        <h3>Contact Us</h3>
        <p>Whether you're starting a new business, expanding an existing one, or facing a legal issue, we're here to help. Contact us today to schedule a consultation with one of our experienced business law attorneys.</p>
          </div>
      </div>

      <div id="estate-planning" className="estate-planning">
        <div className='estate-planning-content'>
        <h2><MdOutlineRealEstateAgent className="law-service-icon" />Estate Planning</h2>
        <p>Planning for the future is one of the most important things you can do to protect your loved ones and your assets. At Conrad Szewczyk & Associates, we offer comprehensive estate planning services to help you create a plan that reflects your wishes and provides peace of mind for you and your family.</p>
        <h3>Our Approach</h3>
        <p>With compassion and attention to detail, our experienced estate planning attorneys will work closely with you to understand your unique circumstances and goals. Whether you're looking to create a will, establish a trust, or navigate the probate process, we'll guide you through every step of the process with care and professionalism.</p>
        <h3>Our Services</h3>
        <ul>
          <li><strong>Wills and Trusts:</strong> We can help you draft a comprehensive will that specifies how your assets should be distributed upon your passing. Additionally, we offer trust creation services to help you minimize estate taxes, avoid probate, and provide for the future financial security of your loved ones.</li>
          <li><strong>Advance Directives:</strong> Planning for incapacity is an essential part of estate planning. We can assist you in drafting advance directives, including powers of attorney and healthcare directives, to ensure that your wishes regarding medical care and financial matters are honored if you become unable to make decisions for yourself.</li>
          <li><strong>Probate and Estate Administration:</strong> If you've been named as an executor or administrator of a loved one's estate, we can guide you through the probate process and handle all aspects of estate administration, including asset inventory, creditor claims, and distribution of assets to beneficiaries.</li>
          <li><strong>Estate Tax Planning:</strong> We can help you develop strategies to minimize estate taxes and maximize the value of your estate for your beneficiaries, ensuring that your hard-earned assets are preserved for future generations.</li>
          <li><strong>Asset Protection:</strong> Protecting your assets from creditors and lawsuits is a crucial aspect of estate planning. We can advise you on asset protection strategies, including the use of trusts and other legal instruments, to shield your wealth from potential threats.</li>
        </ul>
        <h3>Why Choose Us</h3>
        <ul>
          <li><strong>Experience:</strong> Our attorneys have extensive experience in estate planning and probate law, allowing us to provide knowledgeable guidance and effective solutions for our clients.</li>
          <li><strong>Personalized Service:</strong> We understand that every client's situation is unique, and we take the time to listen to your concerns and tailor our services to meet your specific needs and goals.</li>
          <li><strong>Peace of Mind:</strong> By creating a comprehensive estate plan with our help, you can have confidence knowing that your wishes will be carried out and your loved ones will be provided for according to your instructions.</li>
        </ul>
        <h3>Contact Us</h3>
        <p>Don't wait until it's too late to start planning for the future. Contact us today to schedule a consultation with one of our experienced estate planning attorneys and take the first step toward protecting your legacy.</p>
          </div>
      </div>

      <div id="personal-injury" className="personal-injury">
        <div className='personal-injury-content'>
        <h2><FaUserInjured className="law-service-icon" />Personal Injury</h2>
        <p>Being injured due to someone else's negligence can have devastating consequences for you and your family. At Conrad Szewczyk & Associates, we're dedicated to helping personal injury victims seek justice and recover the compensation they deserve for their injuries and losses.</p>
        <h3>Our Approach</h3>
        <p>With compassion and tenacity, our experienced personal injury attorneys will fight tirelessly to protect your rights and pursue maximum compensation for your injuries. We understand the physical, emotional, and financial toll that accidents can take, and we're here to guide you through every step of the legal process.</p>
        <h3>Our Services</h3>
        <ul>
          <li><strong>Car Accidents:</strong> If you've been injured in a car accident caused by another driver's negligence, we can help you pursue compensation for medical expenses, lost wages, property damage, and pain and suffering.</li>
          <li><strong>Truck Accidents:</strong> Accidents involving commercial trucks can result in catastrophic injuries. Our attorneys have the knowledge and resources to take on trucking companies and their insurers to ensure that you're fully compensated for your injuries and losses.</li>
          <li><strong>Slip and Fall Accidents:</strong> Property owners have a legal duty to maintain safe premises for visitors. If you've been injured in a slip and fall accident due to hazardous conditions on someone else's property, we can help you hold the negligent party accountable for your injuries.</li>
          <li><strong>Medical Malpractice:</strong> When healthcare providers fail to meet the accepted standard of care, patients can suffer serious harm. We have experience handling complex medical malpractice cases and can advocate for your rights against negligent doctors, hospitals, and other medical professionals.</li>
          <li><strong>Wrongful Death:</strong> Losing a loved one due to someone else's negligence is a tragedy. We provide compassionate legal representation to surviving family members in wrongful death cases, seeking compensation for medical expenses, funeral costs, lost income, and the pain and suffering of the deceased.</li>
        </ul>
        <h3>Why Choose Us</h3>
        <ul>
          <li><strong>Experience:</strong> Our attorneys have a proven track record of success in personal injury cases, securing significant verdicts and settlements for our clients.</li>
          <li><strong>Resources:</strong> We have the resources and expertise to thoroughly investigate your case, gather evidence, and build a strong legal strategy on your behalf.</li>
          <li><strong>Personalized Attention:</strong> We understand that every personal injury case is unique, and we'll take the time to listen to your story, answer your questions, and provide personalized legal guidance every step of the way.</li>
        </ul>
        <h3>Contact Us</h3>
        <p>If you've been injured in an accident, don't wait to seek legal representation. Contact us today to schedule a free consultation with one of our experienced personal injury attorneys and learn how we can help you get the compensation you deserve.</p>
          </div>
      </div>
    </div>
  );
};

export default LawServices;
