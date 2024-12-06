import React from 'react';
import { Shield, DollarSign, Users, Heart, Lock, Globe } from 'lucide-react';

const PitchDeck = () => {
  const slides = [
    {
      id: 'cover',
      content: (
        <div className="bg-gradient-to-br from-purple-700 to-purple-900 p-12 rounded-lg shadow-xl text-white h-full">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <img src="../../Kintaraa logo.jpg" alt="Kintaraa Logo" className="w-32 h-32" />
            <h1 className="text-5xl font-bold text-center">Kintaraa</h1>
            <p className="text-2xl text-purple-200">Transforming GBV Support Through ICP Blockchain</p>
            <p className="text-xl text-purple-300 mt-8">ICP MEGAHACKATHON</p>
          </div>
        </div>
      )
    },
    {
      id: 'problem',
      content: (
        <div className="bg-white p-12 rounded-lg shadow-xl h-full">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">The Problem</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-purple-900 mb-2">40%</h3>
              <p className="text-gray-700">of women face gender-based violence in Kenya</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-purple-900 mb-2">92%</h3>
              <p className="text-gray-700">of 8,149 reported cases are female victims</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-purple-900 mb-2">$1B+</h3>
              <p className="text-gray-700">Annual cost to society</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-4xl font-bold text-purple-900 mb-2">1 in 3</h3>
              <p className="text-gray-700">Cases reported due to fear and limited support</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'solution',
      content: (
        <div className="bg-white p-12 rounded-lg shadow-xl h-full">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">Our Solution</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Shield className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="text-xl font-semibold text-purple-900">Secure Reporting</h3>
                  <p className="text-gray-600">ICP Blockchain-powered anonymous reporting</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Heart className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="text-xl font-semibold text-purple-900">Holistic Support</h3>
                  <p className="text-gray-600">Medical, legal, psychological help</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Lock className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="text-xl font-semibold text-purple-900">Data Privacy</h3>
                  <p className="text-gray-600">End-to-end encryption</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Blockchain Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Immutable case records</li>
                <li>• Smart contract automation</li>
                <li>• Transparent fund tracking</li>
                <li>• Secure data storage</li>
                <li>• Decentralized governance</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
        id: 'market',
        content: (
          <div className="bg-white p-12 rounded-lg shadow-xl h-full">
            <h2 className="text-3xl font-bold text-purple-900 mb-8">Market Opportunity</h2>
            <div className="grid grid-cols-1 gap-8">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <Globe className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold text-purple-900">$2.3T</h3>
                  <p className="text-gray-600">Impact investing market</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold text-purple-900">40M+</h3>
                  <p className="text-gray-600">Crypto users in Africa</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <DollarSign className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-bold text-purple-900">45%</h3>
                  <p className="text-gray-600">YoY crypto growth</p>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-900 mb-4">Why Now?</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-700">
                  <div>• Growing blockchain adoption in Africa</div>
                  <div>• Rising impact investment focus</div>
                  <div>• Urgent need for GBV solutions</div>
                  <div>• Strong regulatory support</div>
                </div>
              </div>
            </div>
          </div>
        )
      },
    {
      id: 'revenue',
      content: (
        <div className="bg-white p-12 rounded-lg shadow-xl h-full">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">Revenue Model</h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">KINTARAA Token Metrics</h3>
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Total Supply</p>
                  <p className="text-xl font-bold text-purple-900">100M KINTARAA</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Initial Price</p>
                  <p className="text-xl font-bold text-purple-900">$0.10</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Staking APY</p>
                  <p className="text-xl font-bold text-purple-900">15%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Year 1 Target</p>
                  <p className="text-xl font-bold text-purple-900">$5M</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <DollarSign className="w-8 h-8 text-purple-600 mb-2" />
                <h4 className="text-lg font-semibold text-purple-900 mb-2">Token Sales</h4>
                <p className="text-3xl font-bold text-purple-600">80%</p>
                <p className="text-gray-600 text-sm">of revenue</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-2">Transaction Fees</h4>
                <p className="text-3xl font-bold text-purple-600">15%</p>
                <p className="text-gray-600 text-sm">of revenue</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-2">Premium Services</h4>
                <p className="text-3xl font-bold text-purple-600">5%</p>
                <p className="text-gray-600 text-sm">of revenue</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
        id: 'competitive',
        content: (
          <div className="bg-white p-12 rounded-lg shadow-xl h-full">
            <h2 className="text-3xl font-bold text-purple-900 mb-8">Competitive Advantage</h2>
            <div className="space-y-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="grid grid-cols-4 gap-4">
                  <div className="font-bold text-purple-900">Feature</div>
                  <div className="font-bold text-purple-900">Kintaraa</div>
                  <div className="font-bold text-purple-900">Traditional NGOs</div>
                  <div className="font-bold text-purple-900">Other Blockchain</div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div className="text-gray-700">Token Economy</div>
                  <div className="text-green-600">✓</div>
                  <div className="text-red-600">✗</div>
                  <div className="text-green-600">✓</div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div className="text-gray-700">GBV Expertise</div>
                  <div className="text-green-600">✓</div>
                  <div className="text-green-600">✓</div>
                  <div className="text-red-600">✗</div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div className="text-gray-700">Local Partnerships</div>
                  <div className="text-green-600">✓</div>
                  <div className="text-green-600">✓</div>
                  <div className="text-red-600">✗</div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div className="text-gray-700">Real Utility</div>
                  <div className="text-green-600">✓</div>
                  <div className="text-red-600">✗</div>
                  <div className="text-red-600">✗</div>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div className="text-gray-700">Social Impact</div>
                  <div className="text-green-600">✓</div>
                  <div className="text-green-600">✓</div>
                  <div className="text-red-600">✗</div>
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  Kintaraa bridges cutting-edge blockchain innovation with grassroots expertise, creating a unique, trusted ecosystem for real-world impact.
                </p>
              </div>
            </div>
          </div>
        )
      },
    {
      id: 'roadmap',
      content: (
        <div className="bg-white p-12 rounded-lg shadow-xl h-full">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">Roadmap</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-purple-900">Q1 2025</h3>
              <p className="text-purple-600 font-semibold">Platform Launch</p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• MVP Release</li>
                <li>• Partner Onboarding</li>
                <li>• Initial Testing</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-purple-900">Q2 2025</h3>
              <p className="text-purple-600 font-semibold">Token Launch</p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• ICO</li>
                <li>• Exchange Listing</li>
                <li>• Staking Program</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-purple-900">Q3 2025</h3>
              <p className="text-purple-600 font-semibold">Regional Growth</p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Kenya Expansion</li>
                <li>• Feature Updates</li>
                <li>• Community Growth</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-purple-900">2025</h3>
              <p className="text-purple-600 font-semibold">Pan-African</p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Continental Launch</li>
                <li>• Full Features</li>
                <li>• Scale Operations</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'team',
      content: (
        <div className="bg-white p-12 rounded-lg shadow-xl h-full">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">Our Team</h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <img src="/api/placeholder/120/120" alt="CEO" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-900">Stella Oiro</h3>
              <p className="text-purple-600 font-semibold">CEO</p>
              <p className="text-gray-600 text-sm mt-2">10+ years in GBV advocacy</p>
            </div>
            <div className="text-center">
              <img src="/api/placeholder/120/120" alt="CTO" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-900">Cheryl Owala</h3>
              <p className="text-purple-600 font-semibold">CTO</p>
              <p className="text-gray-600 text-sm mt-2">Blockchain architect</p>
            </div>
            <div className="text-center">
              <img src="/api/placeholder/120/120" alt="CFO" className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-purple-900">Sheila Fana</h3>
              <p className="text-purple-600 font-semibold">CFO</p>
              <p className="text-gray-600 text-sm mt-2">Fintech expert</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cta',
      content: (
        <div className="bg-gradient-to-br from-purple-700 to-purple-900 p-12 rounded-lg shadow-xl text-white h-full">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <h2 className="text-4xl font-bold text-center">Join Us in Creating Change</h2>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <p className="text-2xl font-bold">Q3 2024</p>
                <p className="text-purple-200">Token Launch</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">$0.10</p>
                <p className="text-purple-200">Initial Price</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">15% APY</p>
                <p className="text-purple-200">Staking Rewards</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-xl text-purple-200 mb-4">Contact Us</p>
              <p className="text-white">invest@kintaraa.com</p>
              <p className="text-white">@_kintaraa</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-8">
      {slides.map((slide) => (
        <div key={slide.id} className="w-full aspect-[16/9]">
          {slide.content}
        </div>
      ))}
    </div>
  );
};

export default PitchDeck;