import { Link } from "react-router-dom";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Prime Lead Company
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Performance-focused lead generation for real estate professionals worldwide.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-xl p-10 shadow-sm border border-border mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Prime Lead Company is a performance-focused lead generation agency helping 
              real estate professionals grow through paid social advertising. We specialize 
              in creating targeted Facebook and Instagram ad campaigns that connect you with 
              qualified buyers and sellers in your local market.
            </p>
          </div>

          {/* Founders */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Founders</h2>
            <p className="text-muted-foreground">The leadership behind Prime Lead Company</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-10 text-center shadow-sm border border-border">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Krishna Kumar</h3>
              <p className="text-primary font-semibold text-lg">Co-Founder</p>
            </div>
            <div className="bg-background rounded-xl p-10 text-center shadow-sm border border-border">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Devansh Bhatia</h3>
              <p className="text-primary font-semibold text-lg">Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Ready to grow your real estate business with qualified leads?
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
