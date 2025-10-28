import { ArrowLeft, Target, Brain, Zap, TrendingUp, Users, Mail, BarChart3, CheckCircle, Sparkles, Globe, MessageSquare, Filter, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import TrialModal from "./TrialModal";

export default function LeadMachine() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Lead Scoring",
      description: "Machine learning algorithms analyze 50+ data points to predict lead quality and conversion probability in real-time"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Intelligent Prospecting",
      description: "Automatically discover and qualify high-value prospects based on your ideal customer profile and market signals"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Multi-Channel Outreach",
      description: "Orchestrate personalized campaigns across email, LinkedIn, SMS, and phone with AI-optimized timing and messaging"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Smart Personalization",
      description: "Generate hyper-personalized messages using AI that analyzes prospect behavior, industry, and engagement patterns"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Automated Nurturing",
      description: "Set up intelligent drip campaigns that adapt based on prospect actions and engagement levels"
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Advanced Segmentation",
      description: "Dynamic audience segmentation using behavioral data, firmographics, and predictive analytics"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Conversion Analytics",
      description: "Deep insights into pipeline performance, conversion rates, and ROI across all channels and campaigns"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "CRM Integration",
      description: "Seamlessly sync with Salesforce, HubSpot, Pipedrive, and 50+ CRM platforms for unified data management"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Conversation Intelligence",
      description: "AI analyzes sales conversations to identify winning patterns, objections, and coaching opportunities"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Forecasting",
      description: "Accurate revenue predictions using historical data and AI-powered trend analysis"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Real-time lead assignment, task automation, and performance tracking for your entire sales team"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Lead Enrichment",
      description: "Automatically enrich leads with company data, social profiles, and contact information from 200+ sources"
    }
  ];

  const benefits = [
    "Increase qualified leads by 300%",
    "Reduce lead acquisition costs by 50%",
    "Improve conversion rates by 45%",
    "Save 20+ hours per week on manual tasks",
    "Accelerate sales cycles by 35%",
    "Boost team productivity by 60%",
    "Scale outreach without adding headcount",
    "Maximize ROI with data-driven insights"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <TrialModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)}
        productName="Lead Machine"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/">
            <Button variant="ghost" className="text-gray-400 hover:text-white mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-500 p-4 mx-auto mb-6 shadow-2xl shadow-cyan-500/30">
              <Users className="w-full h-full text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Lead Machine
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              The most advanced AI-powered lead generation and sales acceleration platform
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => setIsTrialModalOpen(true)}
                className="bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-700 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/30"
              >
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Value Proposition */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/10 to-blue-500/10 border-y border-cyan-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Transform Your Sales Pipeline with AI
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent mb-2">
                  10x
                </div>
                <p className="text-gray-300">More Qualified Leads</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent mb-2">
                  50%
                </div>
                <p className="text-gray-300">Lower Acquisition Cost</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent mb-2">
                  45%
                </div>
                <p className="text-gray-300">Higher Conversion Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-500/10 text-cyan-300 border-cyan-500/20">
              Advanced Capabilities
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything You Need to Dominate Lead Generation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade features powered by cutting-edge AI and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-500 p-2.5 mb-4 text-white">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Measurable Business Impact
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-cyan-600 to-blue-500 border-0 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to 10x Your Lead Generation?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Join top-performing sales teams using AI to dominate their markets
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => setIsTrialModalOpen(true)}
                  className="bg-white text-cyan-600 hover:bg-gray-100"
                >
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}