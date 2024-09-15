import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Users, Zap, BarChart, Lock } from 'lucide-react';

const Button = ({ children, className, ...props }) => (
  <button className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${className}`} {...props}>
    {children}
  </button>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-orange-600">Polysync</h1>
            <div className="space-x-4">
              <Button className="text-green-700 hover:text-green-800">
                <Link to="/login">Login</Link>
              </Button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-orange-600">
            Polysync: AI-Powered Citizen-Centric Policy Creation
          </h1>
          <p className="text-2xl mb-8 max-w-2xl mx-auto text-green-700">
            Empowering citizens to shape policies through AI and Blockchain technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full transition-transform hover:scale-105">
              <Link to="/login" className="flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-4 rounded-full transition-transform hover:scale-105">
              <Link to="#learn-more">Learn More</Link>
            </Button>
          </div>
        </section>

        <section id="learn-more" className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-700">Why Polysync?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-800">
                In the heart of the world's largest democracy, where every citizen's voice matters, the need for a system that truly reflects the people's will is paramount. India's democratic ethos is built on the principle that power comes from the people, and every voice should be heard. Yet, traditional policy-making often overlooks this fundamental principle, leaving many citizens feeling disconnected and unheard.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <p className="text-gray-800">
                <strong className="text-orange-600">Polysync</strong> bridges this gap by using advanced Generative AI and Blockchain technology to ensure that every citizen's input is not only heard but also plays a crucial role in shaping policy decisions. Our platform transforms the policy-making process into a collaborative, transparent, and data-driven exercise, embodying the true spirit of democracy.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-700">Importance of the Project</h2>
          <div className="bg-gradient-to-r from-orange-100 to-green-100 rounded-lg p-8 shadow-lg">
            <p className="mb-4 text-gray-800">
              As India continues to grow and evolve, the complexity of societal challenges increases. From environmental issues to healthcare needs, policies must adapt swiftly to address emerging concerns. Polysync empowers citizens to directly contribute to policy formation, ensuring that policies are not just reactive but proactive, reflecting the real-time needs and aspirations of the populace.
            </p>
            <p className="text-gray-800">
              Imagine a platform where your suggestions for reducing pollution or improving public healthcare are not only considered but also simulated in real-time, with the results transparently recorded and available for everyone to see. This is the future of governance that Polysync aims to build.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-700">Key Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Zap, title: "Generative AI", description: "Our AI models, built on TensorFlow and PyTorch, simulate potential policy outcomes using vast datasets." },
              { Icon: Lock, title: "Blockchain", description: "We use Ethereum or Hyperledger to record every policy suggestion and voting outcome, ensuring transparency and immutability." },
              { Icon: Users, title: "React.js", description: "Our user-friendly interface allows citizens to easily submit policy ideas, view simulation results, and participate in voting." },
              { Icon: BarChart, title: "Node.js & Express.js", description: "These technologies power the server-side logic, handling requests between the frontend and backend." }
            ].map(({ Icon, title, description }, index) => (
              <div key={index} className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <Icon className="h-12 w-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-green-700">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-700">How It Works</h2>
          <div className="bg-white border-2 border-green-200 rounded-lg p-8 shadow-lg">
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-gray-800"><strong className="text-orange-600">Citizen Interaction:</strong> Citizens log into Polysync, submit their policy suggestions, and see the potential impact through real-time simulations.</li>
              <li className="text-gray-800"><strong className="text-orange-600">Generative AI Simulations:</strong> The AI generates detailed simulations based on historical and current data, showing potential benefits and drawbacks of each policy.</li>
              <li className="text-gray-800"><strong className="text-orange-600">Blockchain Transparency:</strong> All submissions and results are recorded on a blockchain, ensuring that every suggestion is transparent and unalterable.</li>
              <li className="text-gray-800"><strong className="text-orange-600">Decentralized Voting:</strong> Citizens vote on policies, with the blockchain guaranteeing a secure and accurate voting process.</li>
              <li className="text-gray-800"><strong className="text-orange-600">Final Policy Adoption:</strong> Policymakers review AI simulations, citizen votes, and feedback to make final decisions.</li>
            </ol>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-700">Example Use Case: Local Environmental Policy Change</h2>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8 shadow-lg">
            <p className="mb-4 text-gray-800">Consider a local citizen who proposes stricter regulations on factories to reduce carbon emissions. Polysync's AI simulates:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800">
              <li>A 20% reduction in carbon emissions over five years.</li>
              <li>Increased compliance costs for factories, potentially leading to job cuts in the short term.</li>
              <li>Long-term benefits including reduced healthcare costs due to fewer pollution-related illnesses.</li>
            </ul>
            <p className="text-gray-800">The suggestion and simulation results are recorded in the blockchain, ensuring transparency. Citizens vote on the policy, and the final decision is made by policymakers, guided by AI simulations and blockchain-verified votes.</p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-700">Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Users, title: "Increased Citizen Engagement", description: "Polysync transforms governance into a participatory process." },
              { Icon: CheckCircle, title: "Data-Driven Policy Making", description: "Policies are informed by accurate predictions and real-time data." },
              { Icon: Shield, title: "Transparency and Trust", description: "Blockchain technology ensures accountability in governance." },
              { Icon: ArrowRight, title: "Real-Time Responsiveness", description: "Immediate policy iteration based on citizen feedback." },
              { Icon: Users, title: "Decentralized Governance", description: "Citizens influence local policies directly." }
            ].map(({ Icon, title, description }, index) => (
              <div key={index} className="bg-white border-2 border-orange-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center">
                <Icon className="h-16 w-16 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-green-700">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-700">Challenges and Future Scope</h2>
          <div className="bg-gradient-to-r from-orange-100 to-blue-100 rounded-lg p-8 shadow-lg">
            <p className="mb-4 text-gray-800">While Polysync aims to revolutionize policy-making, there are challenges:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-800">
              <li><strong className="text-orange-600">Data Availability:</strong> Access to comprehensive datasets is crucial for accurate AI simulations.</li>
              <li><strong className="text-orange-600">AI Model Accuracy:</strong> Continuous refinement of AI models is needed to maintain reliable predictions.</li>
              <li><strong className="text-orange-600">Blockchain Scalability:</strong> Managing a large-scale decentralized system requires sophisticated blockchain solutions.</li>
            </ul>
            <p className="text-gray-800">Future enhancements include global integration, advanced AI models, and gamification to boost citizen engagement.</p>
          </div>
        </section>
      </main>

      <footer className="bg-green-700 py-8 text-center text-white">
        <p>&copy; 2024 EXE DEVELOPERS | Citizen-Centric Governance</p>
      </footer>
    </div>
  );
}