import { Link } from "react-router-dom";
import { Target, Users, Send, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const HowWeWork = () => {
  const steps = [
    {
      number: 1,
      title: "Targeted Ads",
      description: "We run Facebook & Instagram ads targeted to buyers and sellers in your local market.",
      icon: Target,
    },
    {
      number: 2,
      title: "Lead Capture",
      description: "Interested users land on a simple page and submit their contact details.",
      icon: Users,
    },
    {
      number: 3,
      title: "Lead Delivery",
      description: "Leads are delivered directly to you so you can contact them immediately.",
      icon: Send,
    },
    {
      number: 4,
      title: "Closing",
      description: "You handle calls, appointments, and deal closing. We focus on lead quality and consistency.",
      icon: Phone,
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Our Lead Generation System Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A simple, effective process to deliver qualified leads to your inbox.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="bg-background rounded-xl p-8 shadow-sm border border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Message */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-background rounded-xl p-10 shadow-sm border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              We Generate Leads. You Handle Calls and Closings.
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our focus is on delivering quality leads consistently so you can focus on what you do best – 
              building relationships and closing deals.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowWeWork;
