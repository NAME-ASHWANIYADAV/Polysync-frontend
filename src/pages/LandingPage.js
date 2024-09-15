import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css'; // Updated responsive styles

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="hero-section">
        <h1>Polysync: AI-Powered Citizen-Centric Policy Creation</h1>
        <p className="subhead">Empowering citizens to shape policies through AI and Blockchain technology.</p>
        <div className="buttons">
          <Link to="/login"><button className="btn">Login</button></Link>
          <Link to="/signup"><button className="btn">Sign Up</button></Link>
        </div>
      </div>
      <div className="info-section">
        <h2 className="headings">Why Polysync?</h2>
        <br/>
        <p>In the heart of the world's largest democracy, where every citizen's voice matters, the need for a system that truly reflects the people's will is paramount. India’s democratic ethos is built on the principle that power comes from the people, and every voice should be heard. Yet, traditional policy-making often overlooks this fundamental principle, leaving many citizens feeling disconnected and unheard.</p>
        <p><strong>Polysync</strong> bridges this gap by using advanced Generative AI and Blockchain technology to ensure that every citizen's input is not only heard but also plays a crucial role in shaping policy decisions. Our platform transforms the policy-making process into a collaborative, transparent, and data-driven exercise, embodying the true spirit of democracy.</p>
        
        <h2  className="headings">Importance of the Project</h2>
        <p>As India continues to grow and evolve, the complexity of societal challenges increases. From environmental issues to healthcare needs, policies must adapt swiftly to address emerging concerns. Polysync empowers citizens to directly contribute to policy formation, ensuring that policies are not just reactive but proactive, reflecting the real-time needs and aspirations of the populace.</p>
        <p>Imagine a platform where your suggestions for reducing pollution or improving public healthcare are not only considered but also simulated in real-time, with the results transparently recorded and available for everyone to see. This is the future of governance that Polysync aims to build.</p>
        <br/>

        <h2 className="headings">Key Technologies</h2>
        <br/>
        <p>Polysync harnesses cutting-edge technologies to deliver an unparalleled policy-making experience:</p>
        <ul>
          <li><strong>Generative AI:</strong> Our AI models, built on TensorFlow and PyTorch, simulate potential policy outcomes using vast datasets. These models predict economic, social, and environmental impacts, helping citizens and policymakers make informed decisions.</li>
          <li><strong>Blockchain:</strong> We use Ethereum or Hyperledger to record every policy suggestion and voting outcome. This ensures transparency, immutability, and accountability, building trust in the process and making it impossible to alter historical records.</li>
          <li><strong>React.js:</strong> Our user-friendly interface, designed with React.js, allows citizens to easily submit policy ideas, view simulation results, and participate in voting. The responsive design ensures a seamless experience across all devices.</li>
          <li><strong>Node.js & Express.js:</strong> These technologies power the server-side logic, handling requests between the frontend and backend, and integrating seamlessly with our AI and Blockchain components.</li>
        </ul>
        <br/>

        <h2 className="headings">How It Works</h2>
        <br/>
        <p>Polysync is designed to be intuitive and impactful:</p>
        <ol>
          <li><strong>Citizen Interaction:</strong> Citizens log into Polysync, submit their policy suggestions, and see the potential impact through real-time simulations.</li>
          <li><strong>Generative AI Simulations:</strong> The AI generates detailed simulations based on historical and current data, showing potential benefits and drawbacks of each policy.</li>
          <li><strong>Blockchain Transparency:</strong> All submissions and results are recorded on a blockchain, ensuring that every suggestion is transparent and unalterable.</li>
          <li><strong>Decentralized Voting:</strong> Citizens vote on policies, with the blockchain guaranteeing a secure and accurate voting process. The system tracks votes to ensure every opinion counts.</li>
          <li><strong>Final Policy Adoption:</strong> Policymakers review AI simulations, citizen votes, and feedback to make final decisions, ensuring policies are data-driven and reflective of public sentiment.</li>
        </ol>
        <br/>

        <h2 className="headings">Example Use Case: Local Environmental Policy Change</h2>
        <br/>
        <p>Consider a local citizen who proposes stricter regulations on factories to reduce carbon emissions. Polysync's AI simulates:</p>
        <ul>
          <li>A 20% reduction in carbon emissions over five years.</li>
          <li>Increased compliance costs for factories, potentially leading to job cuts in the short term.</li>
          <li>Long-term benefits including reduced healthcare costs due to fewer pollution-related illnesses.</li>
        </ul>
        <p>The suggestion and simulation results are recorded in the blockchain, ensuring transparency. Citizens vote on the policy, and the final decision is made by policymakers, guided by AI simulations and blockchain-verified votes.</p>
        <br/>

        <h2 className="headings">Benefits</h2>
        <br/>
        <ul>
          <li><strong>Increased Citizen Engagement:</strong> Polysync transforms governance into a participatory process, where citizens are directly involved in shaping policies.</li>
          <li><strong>Data-Driven Policy Making:</strong> By leveraging AI, policies are informed by accurate predictions and real-time data, reducing risks and improving outcomes.</li>
          <li><strong>Transparency and Trust:</strong> Blockchain technology ensures that every step of the policy-making process is transparent and accountable, rebuilding trust in governance.</li>
          <li><strong>Real-Time Responsiveness:</strong> The platform allows for immediate policy iteration based on citizen feedback, making governance more agile and responsive.</li>
          <li><strong>Decentralized Governance:</strong> Citizens influence local policies directly, fostering a more democratic and inclusive system.</li>
        </ul>
        <br/>
        
        <h2 className="headings">Challenges and Future Scope</h2>
        <br/>
        <p>While Polysync aims to revolutionize policy-making, there are challenges:</p>
        <ul>
          <li><strong>Data Availability:</strong> Access to comprehensive datasets is crucial for accurate AI simulations.</li>
          <li><strong>AI Model Accuracy:</strong> Continuous refinement of AI models is needed to maintain reliable predictions.</li>
          <li><strong>Blockchain Scalability:</strong> Managing a large-scale decentralized system requires sophisticated blockchain solutions.</li>
        </ul>
        <p>Future enhancements include global integration, advanced AI models, and gamification to boost citizen engagement.</p>
        <br/>
      </div>
      <footer className="footer">
        <p>&copy; 2024 EXE DEVELOPERS | Citizen-Centric Governance</p>
      </footer>
    </div>
  );
};

export default LandingPage;
