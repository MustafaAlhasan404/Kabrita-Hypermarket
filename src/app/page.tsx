'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { content, type Locale, getDirection } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useParallax, useMouseParallax } from '@/hooks/useParallax';
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
  
  // Initialize scroll animations
  useScrollAnimation();
  
  // Parallax effects
  const [heroRef, heroParallax] = useParallax({ speed: 0.5 });
  const [floatingRef, floatingOffset] = useMouseParallax(0.02);

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
      className={['min-h-screen', direction === 'rtl' ? 'rtl' : 'ltr', locale === 'ar' ? 'font-arabic' : 'font-sans'].join(' ')}
      dir={direction}
    >
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="particle absolute w-2 h-2 bg-emerald-400/20 rounded-full top-[10%] left-[10%]" style={{ animationDelay: '0s' }}></div>
        <div className="particle absolute w-3 h-3 bg-emerald-300/20 rounded-full top-[20%] left-[80%]" style={{ animationDelay: '2s' }}></div>
        <div className="particle absolute w-2 h-2 bg-emerald-500/20 rounded-full top-[60%] left-[20%]" style={{ animationDelay: '4s' }}></div>
        <div className="particle absolute w-4 h-4 bg-emerald-400/20 rounded-full top-[80%] left-[70%]" style={{ animationDelay: '6s' }}></div>
        <div className="particle absolute w-2 h-2 bg-emerald-300/20 rounded-full top-[40%] left-[50%]" style={{ animationDelay: '8s' }}></div>
      </div>

      {/* Navigation - Enhanced with Glassmorphism */}
      <nav className="fixed top-0 w-full bg-emerald-500/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-emerald-600/30 dark:border-gray-700/30 z-50 animate-fadeIn">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 rounded-xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 hover:rotate-12 glow-effect">
                  <span className="text-white font-semibold text-lg">K</span>
                </div>
                <h1 className="text-2xl font-light tracking-wide text-white dark:text-gray-200 text-shimmer">
                  {locale === 'ar' ? 'كابريتا' : 'Kabrita'}
                </h1>
              </div>
            </div>
            
            {/* Desktop Navigation - Minimal */}
            <div className="hidden md:flex items-center space-x-12">
              <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-emerald-300 transition-all text-sm font-medium hover:scale-105 hover-magnetic relative group">
                {t.nav.home}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-emerald-300 transition-all text-sm font-medium hover:scale-105">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('products')} className="text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-emerald-300 transition-all text-sm font-medium hover:scale-105">
                {t.nav.products}
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-emerald-300 transition-all text-sm font-medium hover:scale-105">
                {t.nav.services}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-emerald-300 transition-all text-sm font-medium hover:scale-105">
                {t.nav.contact}
              </button>
              <div className="flex items-center gap-4">
                <Button onClick={toggleLanguage} variant="ghost" size="sm" className="text-xs text-white dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800">
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
            <div className="md:hidden animate-fadeIn">
              <div className="px-2 pt-2 pb-8 space-y-6 bg-emerald-500 dark:bg-gray-900 border-t border-emerald-600/30 dark:border-gray-700">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-emerald-300 text-sm font-medium transition-colors">
                  {t.nav.home}
                </button>
                <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-emerald-300 text-sm font-medium transition-colors">
                  {t.nav.about}
                </button>
                <button onClick={() => scrollToSection('products')} className="block px-3 py-2 text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-emerald-300 text-sm font-medium transition-colors">
                  {t.nav.products}
                </button>
                <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-emerald-300 text-sm font-medium transition-colors">
                  {t.nav.services}
                </button>
                <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-white/80 hover:text-white dark:text-gray-300 dark:hover:text-emerald-300 text-sm font-medium transition-colors">
                  {t.nav.contact}
                </button>
                <div className="flex gap-4 mt-6">
                  <Button onClick={toggleLanguage} variant="ghost" size="sm" className="text-xs text-white dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-800">
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

      {/* Hero Section - Enhanced with Parallax */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        {/* Parallax Background Layers */}
        <div className="absolute inset-0 z-0" ref={heroRef} style={{ transform: `translateY(${heroParallax}px)` }}>
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
              {/* Enhanced gradient overlay with noise texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/60 to-transparent noise-overlay" />
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

        {/* Floating Elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-[30%] right-[15%] w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl float-animation-reverse"></div>
        </div>

        {/* Hero Content - Enhanced Typography */}
        <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
          <div className="max-w-4xl animate-fadeInUp" ref={floatingRef} style={{ transform: `translate(${floatingOffset.x}px, ${floatingOffset.y}px)` }}>
            {/* Animated title badge with shimmer */}
            <div className="inline-block mb-8 px-6 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 animate-scaleIn overflow-hidden relative">
              <span className="text-emerald-100 text-sm font-medium tracking-wide relative z-10">
                {heroImages[currentImageIndex].title}
              </span>
              <div className="absolute inset-0 shimmer"></div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
              {t.hero.title.split(' ').map((word, index) => (
                <span key={index} className="inline-block animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                  {word}&nbsp;
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-6 font-light leading-relaxed">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-emerald-50/90 mb-12 max-w-2xl leading-relaxed font-light">
              {t.hero.description}
            </p>
            <Button 
              size="lg" 
              className="text-base px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-2xl hover-3d relative overflow-hidden group" 
              onClick={() => scrollToSection('contact')}
            >
              <span className="relative z-10">{t.hero.cta}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced with Modern Effects */}
      <section id="about" className="min-h-screen flex items-center py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/30 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
        {/* Morphing background shapes */}
        <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-emerald-200/20 dark:bg-emerald-400/5 rounded-full morphing-shape blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-emerald-300/20 dark:bg-emerald-400/5 rounded-full morphing-shape blur-3xl" style={{ animationDelay: '4s' }}></div>
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Unified Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-200/50 dark:bg-gray-800 rounded-full border border-emerald-300/50 dark:border-gray-700">
              <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium tracking-wide uppercase">
                About Kabrita
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-emerald-800 dark:text-emerald-300 mb-6 tracking-tight">
              {t.about.title}
            </h2>
            <p className="text-xl text-emerald-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              {t.about.content}
            </p>
          </div>

          {/* Unified Cards Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-stagger">
            {/* Vision */}
            <Card className="border border-emerald-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-300 p-6 group hover-3d relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="p-0 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-400/20 dark:to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 glow-effect">
                  <Target className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-xl font-medium tracking-wide text-emerald-900 dark:text-emerald-300">
                  {t.vision.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 relative z-10">
                <p className="text-emerald-700 dark:text-gray-300 leading-relaxed font-light">{t.vision.content}</p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border border-emerald-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 p-6 group hover-lift">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-xl font-medium tracking-wide text-emerald-900 dark:text-emerald-300">
                  {t.mission.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-3">
                  {t.mission.points.map((point, index) => (
                    <li key={index} className="text-emerald-700 dark:text-gray-300 leading-relaxed font-light flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2.5 mr-3 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="border border-emerald-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 p-6 group hover-lift">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-xl font-medium tracking-wide text-emerald-900 dark:text-emerald-300">
                  {t.values.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  {t.values.items.map((value, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-emerald-900 dark:text-emerald-300 mb-1 tracking-wide text-sm">{value.title}</h4>
                      <p className="text-sm text-emerald-700 dark:text-gray-400 font-light leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
        </div>
        </div>
      </section>

      {/* Products Section - Enhanced 3D Carousel */}
      <section id="products" className="min-h-screen flex items-center py-24 bg-gradient-to-br from-emerald-200 via-emerald-100 to-emerald-200 dark:from-gray-900 dark:via-black dark:to-gray-900 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 animated-gradient opacity-10"></div>
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Unified Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-100/70 dark:bg-gray-800 backdrop-blur-sm rounded-full border border-emerald-300/50 dark:border-gray-700">
              <span className="text-emerald-800 dark:text-emerald-400 text-sm font-medium tracking-wide uppercase">
                Our Products
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-emerald-900 dark:text-emerald-300 mb-6 tracking-tight">
              {t.products.title}
            </h2>
          </div>

          {/* Enhanced 3D Product Showcase */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl animate-scaleIn hover-3d gpu-accelerated">
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
                  {/* Enhanced overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>
              ))}
            </div>

            {/* Unified Navigation Controls */}
            <button
              onClick={prevProduct}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 bg-emerald-500/20 hover:bg-emerald-500/40 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextProduct}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 bg-emerald-500/20 hover:bg-emerald-500/40 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110"
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
                  <h3 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight tracking-tight animate-slideInLeft">
                    {productImages[currentProductIndex]?.product?.name}
                  </h3>
                  
                  {/* Unified Product Features */}
                  <div className="space-y-4 mb-8">
                    {productImages[currentProductIndex]?.product?.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 text-emerald-50">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-300"></div>
                        <span className="text-lg leading-relaxed font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    size="lg" 
                    className="text-base px-8 py-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-full font-medium transition-all pointer-events-auto hover:scale-105 hover:shadow-lg" 
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

      {/* Services & Statistics Section - Modern Glass Design */}
      <section id="services" className="min-h-screen flex items-center py-24 bg-gradient-to-br from-emerald-100 to-white dark:from-gray-800 dark:to-black relative">
        {/* Floating geometric shapes */}
        <div className="absolute top-[20%] left-[5%] w-32 h-32 border-2 border-emerald-300/20 dark:border-emerald-400/10 rounded-lg rotate-45 float-animation"></div>
        <div className="absolute bottom-[20%] right-[10%] w-24 h-24 border-2 border-emerald-300/20 dark:border-emerald-400/10 rounded-full float-animation-reverse"></div>
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Unified Services Section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-50/70 dark:bg-gray-900 rounded-full border border-emerald-200/50 dark:border-gray-700">
              <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium tracking-wide uppercase">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-emerald-800 dark:text-emerald-300 mb-6 tracking-tight">
              {t.services.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 animate-stagger">
            {t.services.items.map((service, index) => {
              const icons = [Globe, Shield, Truck, Users];
              const Icon = icons[index % icons.length];
              
              return (
                <Card key={index} className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-300 p-6 text-center hover-3d relative overflow-hidden border border-emerald-200/50 dark:border-gray-700/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="p-0 mb-4 relative z-10">
                    <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-emerald-200 to-emerald-300 dark:from-emerald-400/20 dark:to-emerald-500/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 glow-effect">
                      <Icon className="h-6 w-6 text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors" />
                    </div>
                    <CardTitle className="text-lg font-medium tracking-wide text-emerald-900 dark:text-emerald-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-emerald-700 dark:text-gray-300 text-sm leading-relaxed font-light">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enhanced Statistics Section with Animation */}
          <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 dark:from-black dark:to-gray-900 text-emerald-50 dark:text-gray-200 rounded-2xl py-16 px-8 shadow-2xl animate-scaleIn dark:border dark:border-gray-700 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] repeat"></div>
            </div>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
                {t.stats.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {t.stats.items.map((stat, index) => (
                <div key={index} className="transform hover:scale-110 transition-all duration-300 group relative">
                  <div className="text-3xl md:text-4xl font-light mb-2 tracking-tight text-emerald-50 dark:text-emerald-400 text-gradient group-hover:text-shimmer transition-all">
                    {stat.number}
                  </div>
                  <div className="text-sm text-emerald-100 dark:text-gray-400 font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                  <div className="absolute -inset-4 bg-emerald-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Kabrita - Premium Design */}
      <section id="advantages" className="min-h-screen flex items-center py-24 bg-gradient-to-br from-emerald-300 via-emerald-200 to-emerald-300 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Unified Why Choose Section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-200/70 dark:bg-gray-800 backdrop-blur-sm rounded-full border border-emerald-400/50 dark:border-gray-700">
              <span className="text-emerald-800 dark:text-emerald-400 text-sm font-medium tracking-wide uppercase">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-emerald-900 dark:text-emerald-300 mb-6 tracking-tight">
              {t.advantages.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 animate-stagger">
            {t.advantages.items.map((adv, index) => (
              <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-emerald-400/50 dark:border-gray-700/50 shadow-sm hover:shadow-2xl transition-all duration-300 p-6 group hover-3d relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <CardHeader className="p-0 mb-2 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-300 dark:from-emerald-400/20 dark:to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 glow-effect">
                    <CheckCircle className="h-6 w-6 text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300" />
                  </div>
                  <CardTitle className="text-base font-medium tracking-wide text-emerald-900 dark:text-emerald-300">
                    {adv}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Enhanced Client Testimonial with Glassmorphism */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl py-16 px-8 mb-24 border border-emerald-200/50 dark:border-gray-700/50 animate-scaleIn relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/20 to-transparent"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <Quote className="mx-auto h-12 w-12 text-emerald-600 dark:text-emerald-400 mb-8 float-animation" />
              <p className="text-2xl md:text-3xl font-light text-emerald-900 dark:text-gray-200 mb-6 leading-relaxed tracking-wide">
                {t.testimonial.quote}
              </p>
              <p className="text-emerald-800 dark:text-emerald-300 font-medium tracking-wide">{t.testimonial.author}</p>
            </div>
          </div>

          {/* Unified Partners Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
                {t.partners.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-stagger">
              <Card className="border border-emerald-400 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 p-6 hover-lift">
                <CardHeader className="p-0 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-200 dark:bg-emerald-400/20 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <CardTitle className="text-xl font-medium tracking-wide text-emerald-900 dark:text-emerald-300">{t.partners.globalTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    {t.partners.global.map((item, idx) => (
                      <li key={idx} className="text-emerald-700 dark:text-gray-300 font-light leading-relaxed flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2.5 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-emerald-400 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 p-6 hover-lift">
                <CardHeader className="p-0 mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-200 dark:bg-emerald-400/20 flex items-center justify-center mb-4">
                    <Handshake className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                  </div>
                  <CardTitle className="text-xl font-medium tracking-wide text-emerald-900 dark:text-emerald-300">{t.partners.localTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3">
                    {t.partners.local.map((item, idx) => (
                      <li key={idx} className="text-emerald-700 dark:text-gray-300 font-light leading-relaxed flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2.5 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Future Plans with Modern Design */}
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 dark:from-gray-900 dark:to-black text-emerald-50 dark:text-gray-200 rounded-2xl py-16 px-8 shadow-2xl animate-fadeIn dark:border dark:border-gray-700 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M0 40L40 0H20L0 20M40 40V20L20 40%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] repeat"></div>
            </div>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
                {t.future.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.future.points.map((point, index) => (
                <Card key={index} className="border-0 bg-emerald-50/10 dark:bg-gray-800/50 hover:bg-emerald-50/20 dark:hover:bg-gray-700/50 transition-all duration-300 p-6 hover:scale-105 hover-3d relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="p-0 mb-2 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-50/20 to-emerald-100/20 dark:from-emerald-400/20 dark:to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 glow-effect">
                      <Rocket className="h-6 w-6 text-emerald-100 dark:text-emerald-400 group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-base font-medium tracking-wide text-emerald-100 dark:text-emerald-300">
                      {point}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Premium Glass Design */}
      <section id="contact" className="min-h-screen flex items-center py-24 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
        {/* Animated contact background */}
        <div className="absolute inset-0">
          <div className="absolute top-[10%] right-[20%] w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl float-animation"></div>
          <div className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-emerald-300/20 rounded-full blur-2xl float-animation-reverse"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Unified Section Header */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-block mb-4 px-4 py-2 bg-emerald-200/50 dark:bg-gray-800 rounded-full border border-emerald-300/50 dark:border-gray-700">
              <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium tracking-wide uppercase">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-emerald-950 dark:text-gray-200 mb-6 tracking-tight">
              {t.contact.title}
            </h2>
            <p className="text-xl text-emerald-700 dark:text-gray-400 max-w-2xl mx-auto font-light">
              {locale === 'ar' 
                ? 'نحن هنا لخدمتكم. تواصلوا معنا عبر أي من القنوات التالية'
                : 'We\'re here to serve you. Reach out to us through any of the following channels'
              }
            </p>
          </div>

          {/* Premium Contact Card with Glassmorphism */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-emerald-800/90 dark:bg-gray-900/90 backdrop-blur-sm text-emerald-50 dark:text-gray-200 animate-scaleIn border border-emerald-700/30 dark:border-gray-700/30 hover-3d">
            {/* Contact Content */}
            <div className="absolute inset-0 z-10 flex items-center">
              <div className="max-w-6xl mx-auto px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Left Side - Primary Contact */}
                  <div className="text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-50/20 to-emerald-100/20 dark:from-emerald-400/20 dark:to-emerald-500/20 rounded-full mb-8 glow-effect float-animation">
                      <MessageCircle className="h-10 w-10 text-emerald-100 dark:text-emerald-300" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-light mb-6 leading-tight tracking-tight text-white dark:text-emerald-300">
                      {locale === 'ar' ? 'تواصل معنا فوراً' : 'Connect With Us Instantly'}
                    </h3>
                    
                    <p className="text-xl text-emerald-100 dark:text-gray-300 mb-8 font-light leading-relaxed">
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
                        className="text-base px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 dark:from-emerald-400 dark:to-emerald-500 dark:hover:from-emerald-500 dark:hover:to-emerald-600 text-white dark:text-black rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-2xl relative overflow-hidden group"
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
                      <p className="text-sm text-emerald-100/60 dark:text-gray-400 font-light">
                        {locale === 'ar' ? 'انقر للمراسلة الفورية' : 'Click for instant messaging'}
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Contact Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Address */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50/20 dark:bg-emerald-400/20 rounded-full mb-3">
                        <MapPin className="h-6 w-6 text-emerald-100 dark:text-emerald-300" />
                      </div>
                      <h4 className="text-lg font-medium mb-2 text-white dark:text-gray-200">
                        {locale === 'ar' ? 'العنوان' : 'Address'}
                      </h4>
                      <p className="text-sm text-emerald-100/70 dark:text-gray-400 leading-relaxed font-light">
                        {t.contact.address}
                      </p>
                    </div>

                    {/* Email */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50/20 dark:bg-emerald-400/20 rounded-full mb-3">
                        <Mail className="h-6 w-6 text-emerald-100 dark:text-emerald-300" />
                      </div>
                      <h4 className="text-lg font-medium mb-2 text-white dark:text-gray-200">
                        {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </h4>
                      <a 
                        href={`mailto:${t.contact.email}?subject=Contact from Official Website&body=${encodeURIComponent('Hey i got your number from your official website')}`}
                        className="text-sm text-emerald-100 hover:text-emerald-200 dark:text-emerald-300 dark:hover:text-emerald-200 font-medium transition-colors break-all"
                      >
                        {t.contact.email}
                      </a>
                    </div>

                    {/* Distributor Contact */}
                    <div className="text-center sm:col-span-2">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50/20 dark:bg-emerald-400/20 rounded-full mb-3">
                        <Users className="h-6 w-6 text-emerald-100 dark:text-emerald-300" />
                      </div>
                      <h4 className="text-lg font-medium mb-2 text-white dark:text-gray-200">
                        {locale === 'ar' ? 'للموزعين والشراكات' : 'For Distributors & Partnerships'}
                      </h4>
                      <a 
                        href={`mailto:${t.contact.distributor}?subject=Partnership Inquiry from Official Website&body=${encodeURIComponent('Hey i got your number from your official website')}`}
                        className="text-sm text-emerald-100 hover:text-emerald-200 dark:text-emerald-300 dark:hover:text-emerald-200 font-medium transition-colors break-all"
                      >
                        {t.contact.distributor}
                      </a>
                      <p className="text-xs text-emerald-100/60 dark:text-gray-400 mt-1 font-light">
                        {locale === 'ar' ? 'للشراكات التجارية والتوزيع' : 'For business partnerships & distribution'}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 border-emerald-50/30 dark:border-gray-600/30 animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border-2 border-emerald-50/30 dark:border-gray-600/30 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full border-2 border-emerald-50/30 dark:border-gray-600/30 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-20 left-1/3 w-20 h-20 rounded-lg border border-emerald-50/20 dark:border-gray-600/20 rotate-45 float-animation"></div>
            </div>
        </div>
        </div>
      </section>

      {/* Footer - Enhanced Minimal Design */}
      <footer className="py-12 bg-gradient-to-b from-emerald-800 to-emerald-900 dark:from-gray-900 dark:to-black border-t border-emerald-700/50 dark:border-gray-700/50 relative overflow-hidden">
        {/* Footer background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] repeat"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center animate-fadeIn">
            <h3 className="text-2xl font-light mb-4 text-emerald-100 dark:text-gray-200 tracking-wide">
              {locale === 'ar' ? 'كابريتا هايبر ماركت' : 'Kabrita Hypermarket'}
            </h3>
            <p className="text-emerald-100 dark:text-gray-300 mb-6 font-light">
              {locale === 'ar' 
                ? 'من قلب دمشق... إلى قلب كل بيت سوري' 
                : 'From the heart of Damascus... to every Syrian home'
              }
            </p>
            <div className="flex justify-center items-center space-x-6 mb-6">
              <a 
                href={`https://wa.me/${t.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hey i got your number from your official website')}`}
                className="text-emerald-100/70 dark:text-gray-400 hover:text-emerald-100 dark:hover:text-emerald-300 transition-all transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${t.contact.email}?subject=Contact from Official Website&body=${encodeURIComponent('Hey i got your number from your official website')}`}
                className="text-emerald-100/70 dark:text-gray-400 hover:text-emerald-100 dark:hover:text-emerald-300 transition-all transform hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <Separator className="mb-6 bg-emerald-700 dark:bg-gray-700" />
            <p className="text-emerald-100/50 dark:text-gray-500 text-sm font-light">
              © 2025 Coddra. inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
