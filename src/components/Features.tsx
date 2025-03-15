
import React from "react";
import FadeIn from "./animations/FadeIn";
import { Bell, PhoneCall, BarChart, Calendar, Clock, MessageSquare } from "lucide-react";

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}> = ({ icon, title, description, delay }) => {
  return (
    <FadeIn delay={delay} className="h-full">
      <div className="h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all-300 hover:translate-y-[-4px]">
        <div className="bg-health-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </FadeIn>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Bell className="h-7 w-7 text-health-600" />,
      title: "Smart Reminders",
      description: "Automated SMS, email, and push notifications based on patient preferences and engagement patterns.",
    },
    {
      icon: <PhoneCall className="h-7 w-7 text-health-600" />,
      title: "Personalized Voice Calls",
      description: "AI-powered voice reminders that sound natural and can respond to basic patient queries.",
    },
    {
      icon: <BarChart className="h-7 w-7 text-health-600" />,
      title: "No-Show Prediction",
      description: "Advanced analytics to predict potential no-shows, allowing for targeted intervention.",
    },
    {
      icon: <Calendar className="h-7 w-7 text-health-600" />,
      title: "Intelligent Scheduling",
      description: "Optimizes appointment slots based on patient history, provider availability, and urgency.",
    },
    {
      icon: <Clock className="h-7 w-7 text-health-600" />,
      title: "Wait Time Updates",
      description: "Real-time updates to patients when appointments are running behind schedule.",
    },
    {
      icon: <MessageSquare className="h-7 w-7 text-health-600" />,
      title: "Two-Way Communication",
      description: "Patients can easily confirm, reschedule, or ask questions about their appointments.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <span className="bg-health-100 text-health-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">
              Feature-Rich Platform
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Streamline Your Patient Communications
            </h2>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of tools helps healthcare providers reduce no-shows, optimize staff time, and improve patient satisfaction.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
