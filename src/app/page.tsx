'use client';

import { useState, useEffect } from 'react';
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
  Truck,
  Shield,
  Users,
  Target,
  Heart,
  Sparkles,
  CheckCircle,
  Handshake,
  Rocket,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  
  const t = content[locale];
  const direction = getDirection(locale);

  // Hero background images - representing Al-Hamidiyah Souq and modern Syrian markets
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", 
      alt: "Modern Syrian hypermarket interior",
      title: "Modern Excellence"
    },
    {
      url: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Fresh produce in Syrian market",
      title: "Quality Products"
    },
    {
      url: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Damascus old city architecture and traditional markets",
      title: "Damascus Heritage"
    },
    {
      url: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      alt: "Middle Eastern family shopping together in modern supermarket",
      title: "Family Values"
    },
  ];

  // Product showcase images - professional presentation matching the content
  const productImages = [
    {
      url: "/sugar-image.jpg",
      alt: "Premium refined white sugar - minimal aesthetic",
      title: "Premium Quality Sugar",
      product: t.products.items[0]
    },
    {
      url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80", 
      alt: "Premium Indian Basmati rice grains showcasing quality",
      title: "Finest Basmati Rice",
      product: t.products.items[1]
    }
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Auto-rotate product images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [productImages.length]);

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div 
      className={`min-h-screen ${direction === 'rtl' ? 'rtl' : 'ltr'} ${locale === 'ar' ? 'font-arabic' : 'font-sans'}`}
      dir={direction}
    >
      {/* Navigation - Enhanced Professional Design */}
      <nav className="fixed top-0 w-full bg-background/85 backdrop-blur-md border-b border-border/50 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-foreground to-foreground/80 rounded-lg flex items-center justify-center">
                  <span className="text-background font-semibold text-sm">K</span>
                </div>
                <h1 className="text-2xl font-light tracking-wide text-foreground">
                  {locale === 'ar' ? 'كابريتا' : 'Kabrita'}
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation - Minimal */}
            <div className="hidden md:flex items-center space-x-12">
              <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('products')} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                {t.nav.products}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
                {t.nav.contact}
              </button>
              <div className="flex items-center gap-4">
                <Button onClick={toggleLanguage} variant="ghost" size="sm" className="text-xs">
                  <Globe className="h-4 w-4 mr-2" />
                  {t.nav.language}
                </Button>
                <ThemeToggle />
              </div>
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
              <div className="px-2 pt-2 pb-8 space-y-6 bg-background border-t">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-muted-foreground hover:text-foreground text-sm font-medium">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-muted-foreground hover:text-foreground text-sm font-medium">
                  {t.nav.about}
                </button>
                <button onClick={() => scrollToSection('products')} className="block px-3 py-2 text-muted-foreground hover:text-foreground text-sm font-medium">
                  {t.nav.products}
                </button>
                <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-muted-foreground hover:text-foreground text-sm font-medium">
                  {t.nav.services}
                </button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-muted-foreground hover:text-foreground text-sm font-medium">
                  {t.nav.contact}
                </button>
                <div className="flex gap-4 mt-6">
                  <Button onClick={toggleLanguage} variant="ghost" size="sm" className="text-xs">
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

      {/* Hero Section - Clean & Minimalist */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              {/* Minimal overlay for text readability */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>

        {/* Minimal Navigation Controls */}
        <button
          onClick={prevImage}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Minimal Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? 'bg-white w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content - Clean Typography */}
        <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl">
            {/* Clean title badge */}
            <div className="inline-block mb-8 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white/90 text-sm font-medium tracking-wide">
                {heroImages[currentImageIndex].title}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-6 font-light leading-relaxed">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-white/70 mb-12 max-w-2xl leading-relaxed font-light">
              {t.hero.description}
            </p>
            <Button 
              size="lg" 
              className="text-base px-8 py-3 bg-white text-black hover:bg-white/90 rounded-full font-medium transition-all" 
              onClick={() => scrollToSection('contact')}
            >
              {t.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Unified Design */}
      <section id="about" className="min-h-screen flex items-center py-24">
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Unified Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-muted/40 rounded-full border border-border/50">
              <span className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                About Kabrita
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              {t.about.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              {t.about.content}
            </p>
          </div>

          {/* Unified Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision */}
            <Card className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 p-6 group">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Target className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl font-medium tracking-wide">
                  {t.vision.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed font-light">{t.vision.content}</p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 p-6 group">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Heart className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl font-medium tracking-wide">
                  {t.mission.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3">
                  {t.mission.points.map((point, index) => (
                    <li key={index} className="text-muted-foreground leading-relaxed font-light flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 mr-3 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 p-6 group">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-foreground" />
                </div>
                <CardTitle className="text-xl font-medium tracking-wide">
                  {t.values.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  {t.values.items.map((value, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-foreground mb-1 tracking-wide text-sm">{value.title}</h4>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
        </div>
        </div>
      </section>

      {/* Products Section - Unified Carousel */}
      <section id="products" className="min-h-screen flex items-center py-24 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Unified Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-background/40 backdrop-blur-sm rounded-full border border-border/50">
              <span className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                Our Products
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              {t.products.title}
            </h2>
          </div>

          {/* Unified Product Showcase Carousel */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-md">
            {/* Background Image Carousel */}
            <div className="absolute inset-0 z-0">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentProductIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image.url})` }}
                  />
                  {/* Minimal overlay for text readability */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              ))}
            </div>

            {/* Unified Navigation Controls */}
            <button
              onClick={prevProduct}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all backdrop-blur-sm"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextProduct}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all backdrop-blur-sm"
              aria-label="Next product"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Unified Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-3">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProductIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentProductIndex
                      ? 'bg-white w-8'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>

            {/* Product Content - Unified Typography */}
            <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
              <div className="max-w-6xl mx-auto px-12 w-full">
                <div className="max-w-2xl">
                  <h3 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight tracking-tight">
                    {productImages[currentProductIndex]?.product?.name}
                  </h3>
                  
                  {/* Unified Product Features */}
                  <div className="space-y-4 mb-8">
                    {productImages[currentProductIndex]?.product?.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-white/90">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60"></div>
                        <span className="text-lg leading-relaxed font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    size="lg" 
                    className="text-base px-8 py-3 bg-white text-black hover:bg-white/90 rounded-full font-medium transition-all pointer-events-auto" 
                    onClick={() => scrollToSection('contact')}
                  >
                    {locale === 'ar' ? 'اطلب الآن' : 'Order Now'}
                  </Button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Services & Statistics Section - Unified */}
      <section id="services" className="min-h-screen flex items-center py-24">
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Unified Services Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-muted/40 rounded-full border border-border/50">
              <span className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              {t.services.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {t.services.items.map((service, index) => {
              const icons = [Globe, Shield, Truck, Users];
              const Icon = icons[index % icons.length];
              
              return (
                <Card key={index} className="group border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center">
                  <CardHeader className="p-0 mb-4">
                    <div className="mx-auto mb-4 w-12 h-12 bg-muted rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <CardTitle className="text-lg font-medium tracking-wide">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Unified Statistics Section */}
          <div className="bg-foreground text-background rounded-2xl py-16 px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
                {t.stats.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {t.stats.items.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-light mb-2 tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-sm text-background/70 font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Kabrita - Unified Overview */}
      <section id="advantages" className="min-h-screen flex items-center py-24 bg-muted/20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Unified Why Choose Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-background/40 backdrop-blur-sm rounded-full border border-border/50">
              <span className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              {t.advantages.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {t.advantages.items.map((adv, index) => (
              <Card key={index} className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 p-6 group">
                <CardHeader className="p-0 mb-2">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-foreground" />
                  </div>
                  <CardTitle className="text-base font-medium tracking-wide">
                    {adv}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Unified Client Testimonial */}
          <div className="bg-background/50 backdrop-blur-sm rounded-2xl py-16 px-8 mb-24 border border-border/50">
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="mx-auto h-12 w-12 text-muted-foreground mb-8" />
              <p className="text-2xl md:text-3xl font-light text-foreground mb-6 leading-relaxed tracking-wide">
                {t.testimonial.quote}
              </p>
              <p className="text-foreground font-medium tracking-wide">{t.testimonial.author}</p>
            </div>
          </div>

          {/* Unified Partners Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
                {t.partners.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-medium tracking-wide">{t.partners.globalTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    {t.partners.global.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground font-light leading-relaxed flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 p-6">
                <CardHeader className="p-0 mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Handshake className="h-6 w-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl font-medium tracking-wide">{t.partners.localTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    {t.partners.local.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground font-light leading-relaxed flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2.5 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Unified Future Plans */}
          <div className="bg-foreground text-background rounded-2xl py-16 px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
                {t.future.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.future.points.map((point, index) => (
                <Card key={index} className="border-0 bg-background/5 hover:bg-background/10 transition-all duration-300 p-6">
                  <CardHeader className="p-0 mb-2">
                    <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center mb-4">
                      <Rocket className="h-6 w-6 text-background" />
                    </div>
                    <CardTitle className="text-base font-medium tracking-wide text-background">
                      {point}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Unified Professional Style */}
      <section id="contact" className="min-h-screen flex items-center py-24">
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Unified Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-muted/40 rounded-full border border-border/50">
              <span className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              {locale === 'ar' 
                ? 'نحن هنا لخدمتكم. تواصلوا معنا عبر أي من القنوات التالية'
                : 'We\'re here to serve you. Reach out to us through any of the following channels'
              }
            </p>
          </div>

          {/* Unified Contact Showcase */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-md bg-foreground text-background">
            {/* Contact Content */}
            <div className="absolute inset-0 z-10 flex items-center">
              <div className="max-w-6xl mx-auto px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Left Side - Primary Contact */}
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-background/10 rounded-full mb-8">
                      <MessageCircle className="h-10 w-10 text-background" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-light mb-6 leading-tight tracking-tight">
                      {locale === 'ar' ? 'تواصل معنا فوراً' : 'Connect With Us Instantly'}
                    </h3>
                    
                    <p className="text-xl text-background/80 mb-8 font-light leading-relaxed">
                      {locale === 'ar' 
                        ? 'نحن متواجدون دائماً لخدمتكم وتلبية احتياجاتكم'
                        : 'We\'re always here to serve you and meet your business needs'
                      }
                    </p>

                    {/* Primary WhatsApp CTA */}
                    <div className="space-y-3">
                      <Button 
                        asChild
                        size="lg"
                        className="text-base px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all"
                      >
                        <a 
                          href={`https://wa.me/${t.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hey i got your number from your official website')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3"
                        >
                          <MessageCircle className="h-5 w-5" />
                          {t.contact.whatsapp}
                        </a>
                      </Button>
                      <p className="text-sm text-background/60 font-light">
                        {locale === 'ar' ? 'انقر للمراسلة الفورية' : 'Click for instant messaging'}
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Contact Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Address */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-background/10 rounded-full mb-3">
                        <MapPin className="h-6 w-6 text-background" />
                      </div>
                      <h4 className="text-lg font-medium mb-2">
                        {locale === 'ar' ? 'العنوان' : 'Address'}
                      </h4>
                      <p className="text-sm text-background/70 leading-relaxed font-light">
                        {t.contact.address}
                      </p>
                    </div>

                    {/* Email */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-background/10 rounded-full mb-3">
                        <Mail className="h-6 w-6 text-background" />
                      </div>
                      <h4 className="text-lg font-medium mb-2">
                        {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </h4>
                      <a 
                        href={`mailto:${t.contact.email}?subject=Contact from Official Website&body=${encodeURIComponent('Hey i got your number from your official website')}`}
                        className="text-sm text-background hover:text-background/80 font-medium transition-colors break-all"
                      >
                        {t.contact.email}
                      </a>
                    </div>

                    {/* Distributor Contact */}
                    <div className="text-center sm:col-span-2">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-background/10 rounded-full mb-3">
                        <Users className="h-6 w-6 text-background" />
                      </div>
                      <h4 className="text-lg font-medium mb-2">
                        {locale === 'ar' ? 'للموزعين والشراكات' : 'For Distributors & Partnerships'}
                      </h4>
                      <a 
                        href={`mailto:${t.contact.distributor}?subject=Partnership Inquiry from Official Website&body=${encodeURIComponent('Hey i got your number from your official website')}`}
                        className="text-sm text-background hover:text-background/80 font-medium transition-colors break-all"
                      >
                        {t.contact.distributor}
                      </a>
                      <p className="text-xs text-background/60 mt-1 font-light">
                        {locale === 'ar' ? 'للشراكات التجارية والتوزيع' : 'For business partnerships & distribution'}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full border border-background/20"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border border-background/20"></div>
              <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full border border-background/20 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
        </div>
      </section>

      {/* Footer - Unified Minimal */}
      <footer className="py-12 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-light mb-4 text-foreground tracking-wide">
              {locale === 'ar' ? 'كابريتا هايبر ماركت' : 'Kabrita Hypermarket'}
            </h3>
            <p className="text-muted-foreground mb-6 font-light">
              {locale === 'ar' 
                ? 'من قلب دمشق... إلى قلب كل بيت سوري' 
                : 'From the heart of Damascus... to every Syrian home'
              }
            </p>
            <div className="flex justify-center items-center space-x-6 mb-6">
              <a 
                href={`https://wa.me/${t.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hey i got your number from your official website')}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${t.contact.email}?subject=Contact from Official Website&body=${encodeURIComponent('Hey i got your number from your official website')}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <Separator className="mb-6" />
            <p className="text-muted-foreground/70 text-sm font-light">
              © 2025 Coddra. inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
