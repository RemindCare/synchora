
import React from "react";
import FadeIn from "./animations/FadeIn";
import { Check } from "lucide-react";

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <div className="relative">
                <div className="glass-panel rounded-2xl p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-5 p-4 bg-white rounded-xl shadow-sm">
                      <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xl font-bold">87%</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Reduction in No-Shows</h4>
                        <p className="text-sm text-gray-600">
                          Average reduction reported by healthcare providers after 3 months
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5 p-4 bg-white rounded-xl shadow-sm">
                      <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 text-xl font-bold">23%</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">More Patient Capacity</h4>
                        <p className="text-sm text-gray-600">
                          Increased throughput without increasing staff or hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5 p-4 bg-white rounded-xl shadow-sm">
                      <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <span className="text-purple-600 text-xl font-bold">4.8</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Patient Satisfaction Score</h4>
                        <p className="text-sm text-gray-600">
                          Average rating from patients using our reminder system
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -z-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 -top-10 -left-10"></div>
                <div className="absolute -z-10 w-60 h-60 bg-health-200 rounded-full blur-3xl opacity-20 -bottom-10 -right-10"></div>
                
                {/* Chart-like decoration */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center p-4 border border-gray-100">
                  <div className="w-full h-full relative">
                    <div className="absolute bottom-0 left-0 w-6 h-14 bg-health-200 rounded-sm"></div>
                    <div className="absolute bottom-0 left-8 w-6 h-10 bg-health-300 rounded-sm"></div>
                    <div className="absolute bottom-0 left-16 w-6 h-18 bg-health-500 rounded-sm"></div>
                    <div className="absolute bottom-0 left-24 w-6 h-16 bg-health-400 rounded-sm"></div>
                    <div className="absolute top-0 left-0 w-full text-xs text-gray-500 text-center">
                      Efficiency
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="order-1 lg:order-2">
            <FadeIn>
              <span className="bg-health-100 text-health-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">
                Tangible Results
              </span>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Practice with Data-Driven Insights
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-xl text-gray-600 mb-8">
                Our platform doesn't just send reminders—it delivers measurable improvements across your entire practice.
              </p>
            </FadeIn>
            
            <div className="space-y-4">
              {[
                "Reduce operational costs by automating manual reminder calls",
                "Free up staff time for higher-value patient interactions",
                "Improve revenue by filling canceled appointments quickly",
                "Enhance patient satisfaction with timely, personalized communications",
                "Make data-driven decisions with comprehensive analytics",
                "Optimize scheduling patterns based on historical data"
              ].map((benefit, index) => (
                <FadeIn key={index} delay={0.5 + index * 0.1}>
                  <div className="flex items-start gap-3">
                    <div className="bg-health-100 rounded-full p-1 mt-0.5">
                      <Check className="h-4 w-4 text-health-600" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
