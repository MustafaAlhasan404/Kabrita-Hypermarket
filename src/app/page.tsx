'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { content, type Locale, getDirection } from '@/lib/content';
import { 
  Mail, 
  MapPin, 
  Globe, 
  Menu, 
  X,
  MessageCircle,
  Star,
  Truck,
  Shield,
  Users,
  Target,
  Heart,
  Sparkles,
  CheckCircle,
  Handshake,
  Rocket,
  Quote
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const t = content[locale];
  const direction = getDirection(locale);

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div 
      className={`min-h-screen ${direction === 'rtl' ? 'rtl' : 'ltr'} ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`}
      dir={direction}
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">
                {locale === 'ar' ? 'كابريتا' : 'Kabrita'}
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('products')} className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.products}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors">
                {t.nav.contact}
              </button>
              <Button onClick={toggleLanguage} variant="outline" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                {t.nav.language}
              </Button>
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-muted-foreground hover:text-primary">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-muted-foreground hover:text-primary">
                  {t.nav.about}
                </button>
                <button onClick={() => scrollToSection('products')} className="block px-3 py-2 text-muted-foreground hover:text-primary">
                  {t.nav.products}
                </button>
                <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-muted-foreground hover:text-primary">
                  {t.nav.services}
                </button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-muted-foreground hover:text-primary">
                  {t.nav.contact}
                </button>
                <div className="flex gap-2 mt-2">
                  <Button onClick={toggleLanguage} variant="outline" size="sm">
                    <Globe className="h-4 w-4 mr-2" />
                    {t.nav.language}
                  </Button>
                  <ThemeToggle />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary mb-6 font-medium">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
            <Button size="lg" className="text-lg px-8 py-3" onClick={() => scrollToSection('contact')}>
              {t.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t.about.content}
            </p>
          </div>

          {/* Vision, Mission, Values */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Vision */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  {t.vision.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{t.vision.content}</p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  {t.mission.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {t.mission.points.map((point, index) => (
                    <li key={index} className="text-muted-foreground leading-relaxed">
                      • {point}
          </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  {t.values.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {t.values.items.map((value, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.products.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.products.items.map((product, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-yellow-500 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
          </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.services.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((service, index) => {
              const icons = [Globe, Shield, Truck, Users];
              const Icon = icons[index % icons.length];
              
              return (
                <Card key={index} className="h-full text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.stats.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {t.stats.items.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-primary-foreground/90">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.advantages.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.advantages.items.map((adv, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-base font-semibold text-primary">
                    {adv}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="mx-auto h-12 w-12 text-primary mb-6" />
          <p className="text-xl md:text-2xl italic text-foreground mb-4">
            {t.testimonial.quote}
          </p>
          <p className="text-primary font-semibold">{t.testimonial.author}</p>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.partners.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t.partners.globalTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  {t.partners.global.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t.partners.localTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  {t.partners.local.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Plans Section */}
      <section id="future" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.future.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.future.points.map((point, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-base font-semibold text-primary">
                    {point}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.contact.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">
                  {locale === 'ar' ? 'العنوان' : 'Address'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{t.contact.address}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href={`https://wa.me/${t.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  {t.contact.whatsapp}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">
                  {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href={`mailto:${t.contact.email}`}
                  className="text-primary hover:text-primary/80 font-medium text-sm"
                >
                  {t.contact.email}
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">
                  {locale === 'ar' ? 'للموزعين' : 'For Distributors'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href={`mailto:${t.contact.distributor}`}
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                >
                  {t.contact.distributor}
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              {locale === 'ar' ? 'كابريتا هايبر ماركت' : 'Kabrita Hypermarket'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {locale === 'ar' 
                ? 'من قلب دمشق... إلى قلب كل بيت سوري' 
                : 'From the heart of Damascus... to every Syrian home'
              }
            </p>
            <div className="flex justify-center items-center space-x-6">
              <a 
                href={`https://wa.me/${t.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                className="text-muted-foreground hover:text-green-500 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
        </a>
        <a
                href={`mailto:${t.contact.email}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <Separator className="my-6" />
            <p className="text-muted-foreground/70 text-sm">
              © 2025 Kabrita Hypermarket. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
