import { Link } from "react-router-dom";
import { 
  Target, 
  Palette, 
  Layers, 
  Send, 
  BarChart, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Facebook & Instagram Ad Management",
      description: "Strategic ad campaigns targeting buyers and sellers in your market.",
    },
    {
      icon: Palette,
      title: "Ad Creatives and Audience Targeting",
      description: "Compelling ad designs and precise audience selection for maximum impact.",
    },
    {
      icon: Layers,
      title: "Lead Funnel & Landing Page Setup",
      description: "Conversion-optimized landing pages designed to capture quality leads.",
    },
    {
      icon: Send,
      title: "Lead Delivery System",
      description: "Instant lead delivery so you can follow up while interest is high.",
    },
    {
      icon: BarChart,
      title: "Weekly Performance Reporting",
      description: "Clear, actionable reports on campaign performance and lead metrics.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive lead generation services designed for real estate professionals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Generating Leads?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Let's discuss how our services can help grow your real estate business.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
