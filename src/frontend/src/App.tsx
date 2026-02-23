import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Heart } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    orderDetails: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your order! We will contact you soon.');
    setFormData({ name: '', mobile: '', orderDetails: '' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-[#ff6f00] to-[#ff9800] text-white">
        <div className="container mx-auto px-6 py-12 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Kanhaiya Sweet House
          </h1>
          <p className="text-lg md:text-xl opacity-95">
            Pure & Fresh Indian Sweets in Karhal
          </p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/assets/generated/hero-sweets.dim_1200x400.png" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#e65100] sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center py-3 gap-6 md:gap-12">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white font-bold hover:opacity-80 transition-opacity"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-white font-bold hover:opacity-80 transition-opacity"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('order')}
              className="text-white font-bold hover:opacity-80 transition-opacity"
            >
              Order
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white font-bold hover:opacity-80 transition-opacity"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="py-16 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#ff6f00]">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to Kanhaiya Sweet House. We serve fresh and delicious sweets made with pure ingredients.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-6 text-center bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#ff6f00]">
            Our Special Menu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-[#ff6f00]">Laddu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-700">₹400/kg</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-[#ff6f00]">Kaju Katli</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-700">₹900/kg</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-[#ff6f00]">Gulab Jamun</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold text-gray-700">₹350/kg</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-16 px-6 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#ff6f00]">
            Place Your Order
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-left">
              <Label htmlFor="name" className="text-base mb-2 block">
                Your Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full"
              />
            </div>

            <div className="text-left">
              <Label htmlFor="mobile" className="text-base mb-2 block">
                Mobile Number
              </Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
                className="w-full"
              />
            </div>

            <div className="text-left">
              <Label htmlFor="orderDetails" className="text-base mb-2 block">
                Order Details
              </Label>
              <Textarea
                id="orderDetails"
                placeholder="Order Details"
                value={formData.orderDetails}
                onChange={(e) => setFormData({ ...formData, orderDetails: e.target.value })}
                required
                rows={5}
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              className="w-full md:w-auto px-8 py-6 text-lg font-bold bg-[#ff6f00] hover:bg-[#ff8c00] text-white"
            >
              Submit Order
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 text-center bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#ff6f00]">
            Visit Us
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            XR25+GFX, Meethepur, Karhal, 206245
          </p>
          <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=XR25+GFX,Karhal&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              title="Kanhaiya Sweet House Location"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-8 px-6 text-center">
        <div className="container mx-auto">
          <p className="mb-4">© {new Date().getFullYear()} Kanhaiya Sweet House | Karhal</p>
          <p className="text-sm opacity-80">
            Built with <Heart className="inline-block w-4 h-4 text-red-400 fill-red-400" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'kanhaiya-sweet-house'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
