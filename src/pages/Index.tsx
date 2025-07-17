import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedDonate, setSelectedDonate] = useState<string | null>(null);

  const donationTiers = [
    {
      name: "Пчёлка",
      price: "199₽",
      icon: "🐝",
      features: ["Цветное имя", "Особый значок", "Доступ к /msg", "Приоритет входа"],
      color: "bg-yellow-500"
    },
    {
      name: "Рабочая пчела",
      price: "399₽", 
      icon: "🍯",
      features: ["Все из Пчёлки", "Персональный ящик", "Больше слотов", "Доступ к /heal"],
      color: "bg-orange-500"
    },
    {
      name: "Пчелиная матка",
      price: "799₽",
      icon: "👑",
      features: ["Все предыдущие", "Особые эмоции", "VIP поддержка", "Доступ к /tp"],
      color: "bg-purple-500"
    }
  ];

  const rules = [
    { title: "Уважение к игрокам", desc: "Запрещены оскорбления, угрозы и токсичное поведение" },
    { title: "Честная игра", desc: "Читы, дюпы и эксплоиты строго запрещены" },
    { title: "Сохранность построек", desc: "Не ломайте чужие постройки без разрешения" },
    { title: "Адекватность в чате", desc: "Без спама, мата и рекламы других серверов" }
  ];

  const mechanics = [
    { title: "Выживание", desc: "Классический режим выживания как задумал Mojang", icon: "⚔️" },
    { title: "Постройки", desc: "Стройте удивительные сооружения и делитесь с друзьями", icon: "🏠" },
    { title: "Исследования", desc: "Изучайте огромный мир полный тайн и приключений", icon: "🗺️" },
    { title: "Сообщество", desc: "Дружное комьюнити игроков всех возрастов", icon: "👥" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 via-orange-800 to-yellow-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-orange-600/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-2xl">
                🐝
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">BeePlanet</h1>
                <p className="text-orange-300 text-sm">Minecraft Server</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-white hover:text-orange-300 transition-colors">Главная</a>
              <a href="#donate" className="text-white hover:text-orange-300 transition-colors">Донаты</a>
              <a href="#rules" className="text-white hover:text-orange-300 transition-colors">Правила</a>
              <a href="#mechanics" className="text-white hover:text-orange-300 transition-colors">Механики</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-6xl font-bold text-white mb-4 tracking-wider">
              BEE<span className="text-yellow-400">PLANET</span>
            </h2>
            <p className="text-xl text-orange-200 mb-8 max-w-2xl mx-auto">
              Добро пожаловать на лучший ванильный Minecraft сервер! Создавай, строй и исследуй вместе с друзьями в мире пчёл.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                <Icon name="Play" className="mr-2" />
                Играть сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-8 py-3">
                <Icon name="Users" className="mr-2" />
                Дискорд
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-black/40 border-orange-600/30 text-white">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🎮</div>
                <CardTitle className="text-orange-300">Онлайн 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Сервер работает круглосуточно без перебоев</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 border-orange-600/30 text-white">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">👥</div>
                <CardTitle className="text-orange-300">Активное сообщество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Более 1000 активных игроков каждый день</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 border-orange-600/30 text-white">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <CardTitle className="text-orange-300">Чистый ванильный</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Оригинальный Minecraft без модов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donations Section */}
      <section id="donate" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Донаты</h2>
            <p className="text-orange-200 text-lg">Поддержи сервер и получи уникальные привилегии</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {donationTiers.map((tier, index) => (
              <Card key={index} className={`bg-black/40 border-green-600/30 text-white hover:scale-105 transition-transform cursor-pointer ${selectedDonate === tier.name ? 'ring-2 ring-yellow-400' : ''}`}
                    onClick={() => setSelectedDonate(tier.name)}>
                <CardHeader className="text-center">
                  <div className="text-5xl mb-3">{tier.icon}</div>
                  <CardTitle className="text-2xl text-orange-300">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-yellow-400">{tier.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <Icon name="Check" className="mr-2 text-orange-400" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Правила сервера</h2>
            <p className="text-orange-200 text-lg">Соблюдай правила для комфортной игры всех участников</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {rules.map((rule, index) => (
                <AccordionItem key={index} value={`rule-${index}`} className="bg-black/40 border-orange-600/30 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-orange-300">
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-3 border-orange-500 text-orange-400">
                        #{index + 1}
                      </Badge>
                      {rule.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    {rule.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Mechanics Section */}
      <section id="mechanics" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Игровые механики</h2>
            <p className="text-orange-200 text-lg">Особенности нашего ванильного сервера</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mechanics.map((mechanic, index) => (
              <Card key={index} className="bg-black/40 border-orange-600/30 text-white hover:bg-black/60 transition-colors">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-3">{mechanic.icon}</div>
                  <CardTitle className="text-xl text-orange-300">{mechanic.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{mechanic.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-orange-600/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-xl">
              🐝
            </div>
            <h3 className="text-2xl font-bold text-white">BeePlanet</h3>
          </div>
          <p className="text-gray-400 mb-4">
            IP: <span className="text-yellow-400 font-mono">mc.beeplanet.fun</span>
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Icon name="MessageCircle" className="mr-2" />
              Discord
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Icon name="Users" className="mr-2" />
              VK
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Icon name="Play" className="mr-2" />
              YouTube
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}