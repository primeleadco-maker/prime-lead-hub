import { Link } from "react-router-dom";
import { ArrowRight, Users, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Real Estate Agent",
    location: "London, UK",
    quote: "Prime Lead Company transformed my business. I went from struggling to find clients to having a consistent pipeline of qualified buyers every month.",
  },
  {
    name: "Raj Patel",
    role: "Property Broker",
    location: "Mumbai, India",
    quote: "The leads I get are genuinely interested in buying. The quality is far better than anything I tried before. Highly recommend their services.",
  },
  {
    name: "Maria Santos",
    role: "Real Estate Consultant",
    location: "São Paulo, Brazil",
    quote: "Professional team, excellent communication, and most importantly - results. My seller listings have increased significantly since working with them.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              We Help Real Estate Professionals Generate Qualified Buyer & Seller Leads
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Using Facebook & Instagram ads with a proven lead generation system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get More Leads
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Book a Free Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Founders</h2>
            <p className="text-muted-foreground">The team behind Prime Lead Company</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-background rounded-xl p-8 text-center shadow-sm border border-border">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Krishna Kumar</h3>
              <p className="text-primary font-medium">Co-Founder</p>
            </div>
            <div className="bg-background rounded-xl p-8 text-center shadow-sm border border-border">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Devansh Bhatia</h3>
              <p className="text-primary font-medium">Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Real Estate Professionals Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Targeted Advertising</h3>
              <p className="text-muted-foreground">We reach buyers and sellers actively looking in your market.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Proven System</h3>
              <p className="text-muted-foreground">Our lead generation funnel is designed for conversions.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Direct Delivery</h3>
              <p className="text-muted-foreground">Leads delivered straight to you for immediate follow-up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">Real estate professionals trust us to deliver results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-8 shadow-sm border border-border relative"
              >
                <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Grow Your Real Estate Business?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Get in touch today and let's discuss how we can help you generate more leads.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
