// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="https://readdy.ai/home/eefce950-7206-4b5c-b79b-0940bc5f1137/29e21dfd-3b24-4849-84cb-9cc3bebafc67"
              data-readdy="true"
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              <span>Retour aux résultats</span>
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              EmploiConnect
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
              Postuler maintenant
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/30 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={companyData.coverImage}
            alt={companyData.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="bg-white p-3 rounded-lg shadow-lg">
              <Avatar className="h-32 w-32 md:h-40 md:w-40">
                <img
                  src={companyData.logo}
                  alt={companyData.name}
                  className="object-cover"
                />
              </Avatar>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {companyData.name}
              </h1>
              <p className="text-xl text-white/90 mb-6">{companyData.sector}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-white/80 text-sm">Fondée en</div>
                  <div className="text-white font-bold text-lg">
                    {companyData.founded}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-white/80 text-sm">Employés</div>
                  <div className="text-white font-bold text-lg">
                    {companyData.employees}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-white/80 text-sm">Postes ouverts</div>
                  <div className="text-white font-bold text-lg">
                    {companyData.jobs.length}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-white/80 text-sm">Site web</div>
                  <div className="text-white font-bold text-lg">
                    {companyData.website}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="w-full justify-start h-16 bg-transparent border-b-0">
              <TabsTrigger
                value="about"
                className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-16 !rounded-button whitespace-nowrap cursor-pointer"
              >
                À propos
              </TabsTrigger>
              <TabsTrigger
                value="jobs"
                className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-16 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Offres d'emploi
              </TabsTrigger>
              <TabsTrigger
                value="culture"
                className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-16 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Culture & Avantages
              </TabsTrigger>
              <TabsTrigger
                value="testimonials"
                className="data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none h-16 !rounded-button whitespace-nowrap cursor-pointer"
              >
                Témoignages
              </TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="pt-12 pb-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    À propos de {companyData.name}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    {companyData.description}
                  </p>

                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Notre mission
                    </h3>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                      <p className="text-gray-800 text-lg italic">
                        {companyData.mission}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Nos valeurs
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {companyData.values.map((value, index) => (
                      <Card
                        key={index}
                        className="p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                            <i className={`fas ${value.icon} text-xl`}></i>
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                              {value.title}
                            </h4>
                            <p className="text-gray-700">{value.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <Card className="p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Informations
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mr-3">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Localisations
                          </h4>
                          <ul className="mt-1 space-y-1">
                            {companyData.locations.map((location, index) => (
                              <li key={index} className="text-gray-600">
                                {location}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mr-3">
                          <i className="fas fa-users"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Taille de l'entreprise
                          </h4>
                          <p className="mt-1 text-gray-600">
                            {companyData.employees} employés
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mr-3">
                          <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Fondée en
                          </h4>
                          <p className="mt-1 text-gray-600">
                            {companyData.founded}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mr-3">
                          <i className="fas fa-globe"></i>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Site web
                          </h4>
                          <a
                            href={`https://${companyData.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 text-blue-600 hover:underline"
                          >
                            {companyData.website}
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Suivez-nous
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Jobs Tab */}
            <TabsContent value="jobs" className="pt-12 pb-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {companyData.jobs.length} offres d'emploi
                    </h2>
                    <div className="relative">
                      <Input
                        type="text"
                        placeholder="Rechercher un poste"
                        className="pl-10 border-gray-300 w-64"
                      />
                      <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                    </div>
                  </div>

                  <div className="mb-6 flex flex-wrap gap-3">
                    <Badge
                      variant="outline"
                      className="bg-white hover:bg-gray-100 text-gray-700 cursor-pointer"
                    >
                      Tous les postes
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-white hover:bg-gray-100 text-gray-700 cursor-pointer"
                    >
                      Développement
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-white hover:bg-gray-100 text-gray-700 cursor-pointer"
                    >
                      Design
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-white hover:bg-gray-100 text-gray-700 cursor-pointer"
                    >
                      Marketing
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-white hover:bg-gray-100 text-gray-700 cursor-pointer"
                    >
                      Produit
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-white hover:bg-gray-100 text-gray-700 cursor-pointer"
                    >
                      Data
                    </Badge>
                  </div>

                  <div className="space-y-6">
                    {companyData.jobs.map((job) => (
                      <Card
                        key={job.id}
                        className="p-6 hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="flex flex-col md:flex-row md:items-center">
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-gray-900">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-y-2 mt-2">
                              <div className="flex items-center text-gray-600 mr-4">
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center text-gray-600 mr-4">
                                <i className="fas fa-file-contract mr-2"></i>
                                <span>{job.type}</span>
                              </div>
                              <div className="flex items-center text-gray-600 mr-4">
                                <i className="fas fa-building mr-2"></i>
                                <span>{job.department}</span>
                              </div>
                              <div className="flex items-center text-gray-600">
                                <i className="fas fa-clock mr-2"></i>
                                <span>Publié le {job.date}</span>
                              </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {job.skills.map((skill, index) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className="bg-gray-100 text-gray-700"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                              Voir le poste
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <Card className="p-6 sticky top-[160px]">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Détails du poste
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Sélectionnez un poste pour voir les détails ou cliquez sur
                      le bouton ci-dessous pour postuler spontanément.
                    </p>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-4 !rounded-button whitespace-nowrap cursor-pointer">
                      Postuler spontanément
                    </Button>

                    <div className="mt-8">
                      <h4 className="font-bold text-gray-900 mb-3">
                        Processus de recrutement
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">1</span>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900">
                              Candidature en ligne
                            </h5>
                            <p className="text-sm text-gray-600">
                              Envoi de votre CV et lettre de motivation
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">2</span>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900">
                              Entretien téléphonique
                            </h5>
                            <p className="text-sm text-gray-600">
                              Premier échange avec notre équipe RH
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">3</span>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900">
                              Entretien technique
                            </h5>
                            <p className="text-sm text-gray-600">
                              Évaluation de vos compétences techniques
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 flex-shrink-0">
                            <span className="text-sm font-bold">4</span>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900">
                              Entretien final
                            </h5>
                            <p className="text-sm text-gray-600">
                              Rencontre avec votre futur manager
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Culture & Benefits Tab */}
            <TabsContent value="culture" className="pt-12 pb-16">
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Notre environnement de travail
                </h2>
                <Carousel className="w-full">
                  <CarouselContent>
                    {companyData.workspaceImages.map((image, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-1">
                          <Card className="overflow-hidden">
                            <div className="h-64 overflow-hidden">
                              <img
                                src={image.url}
                                alt={image.caption}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                            <div className="p-4 text-center">
                              <p className="font-medium text-gray-900">
                                {image.caption}
                              </p>
                            </div>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center mt-6">
                    <CarouselPrevious className="relative static translate-y-0 mr-2" />
                    <CarouselNext className="relative static translate-y-0" />
                  </div>
                </Carousel>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Nos avantages
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companyData.benefits.map((benefit, index) => (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                          <i className={`fas ${benefit.icon} text-xl`}></i>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-700">{benefit.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Foire aux questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium text-gray-900">
                      Comment se déroule l'intégration chez TechVision ?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      <p>
                        Notre processus d'intégration dure deux semaines et
                        comprend :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                          Une journée d'accueil et présentation de l'entreprise
                        </li>
                        <li>
                          Des sessions de formation sur nos produits et
                          technologies
                        </li>
                        <li>Des rencontres avec les différentes équipes</li>
                        <li>
                          Un programme de mentorat avec un collègue expérimenté
                        </li>
                        <li>
                          Des déjeuners d'équipe pour faciliter l'intégration
                          sociale
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium text-gray-900">
                      Quelle est votre politique de télétravail ?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Nous proposons un modèle hybride flexible. Les
                      collaborateurs peuvent travailler à distance jusqu'à 3
                      jours par semaine, avec une présence au bureau encouragée
                      les mardis et jeudis pour favoriser la collaboration et
                      les échanges d'équipe. Cette politique est adaptable selon
                      les besoins spécifiques des projets et des équipes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium text-gray-900">
                      Comment encouragez-vous le développement professionnel ?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      <p>
                        Nous investissons activement dans le développement de
                        nos collaborateurs via :
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Un budget formation annuel individuel</li>
                        <li>
                          Des abonnements à des plateformes d'apprentissage en
                          ligne
                        </li>
                        <li>
                          Des sessions de partage de connaissances internes
                          hebdomadaires
                        </li>
                        <li>
                          La participation à des conférences et événements
                          professionnels
                        </li>
                        <li>
                          Des plans de carrière personnalisés avec revues
                          semestrielles
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium text-gray-900">
                      Quels événements d'entreprise organisez-vous ?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      Nous organisons régulièrement des événements pour
                      renforcer la cohésion d'équipe et célébrer nos succès :
                      séminaires bi-annuels, hackathons internes, after-works
                      mensuels, célébrations des lancements de produits,
                      journées sportives, fêtes de fin d'année et anniversaires
                      de l'entreprise. Nous encourageons également les
                      initiatives spontanées des équipes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-medium text-gray-900">
                      Comment abordez-vous la diversité et l'inclusion ?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      La diversité et l'inclusion sont au cœur de notre culture.
                      Nous avons mis en place des processus de recrutement non
                      discriminatoires, des formations sur les biais
                      inconscients, et nous soutenons activement des initiatives
                      pour promouvoir la diversité dans le secteur tech. Nous
                      mesurons et publions régulièrement nos progrès en matière
                      de parité et d'inclusion.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            {/* Testimonials Tab */}
            <TabsContent value="testimonials" className="pt-12 pb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Ce que disent nos collaborateurs
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {companyData.testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <i className="fas fa-quote-left text-4xl text-blue-200"></i>
                      </div>
                      <p className="text-gray-700 italic mb-8 flex-grow">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center mt-auto">
                        <Avatar className="h-14 w-14 mr-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="object-cover"
                          />
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600">
                            {testimonial.position}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {testimonial.years}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Satisfaction des employés
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Chez TechVision, nous mesurons régulièrement la
                      satisfaction de nos collaborateurs pour nous assurer de
                      créer un environnement de travail épanouissant.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-900">
                            Équilibre vie pro/perso
                          </span>
                          <span className="font-medium text-blue-600">92%</span>
                        </div>
                        <Progress value={92} className="h-2 bg-gray-200" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-900">
                            Développement professionnel
                          </span>
                          <span className="font-medium text-blue-600">88%</span>
                        </div>
                        <Progress value={88} className="h-2 bg-gray-200" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-900">
                            Culture d'entreprise
                          </span>
                          <span className="font-medium text-blue-600">95%</span>
                        </div>
                        <Progress value={95} className="h-2 bg-gray-200" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-900">
                            Management
                          </span>
                          <span className="font-medium text-blue-600">87%</span>
                        </div>
                        <Progress value={87} className="h-2 bg-gray-200" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Rejoignez notre équipe
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Vous souhaitez faire partie de l'aventure TechVision ?
                      Découvrez nos opportunités et postulez dès maintenant.
                    </p>

                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-3"></i>
                        <span className="text-gray-700">
                          Projets innovants et stimulants
                        </span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-3"></i>
                        <span className="text-gray-700">
                          Équipe talentueuse et passionnée
                        </span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-3"></i>
                        <span className="text-gray-700">
                          Opportunités d'évolution rapide
                        </span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-check-circle text-green-500 mr-3"></i>
                        <span className="text-gray-700">
                          Environnement de travail moderne
                        </span>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white !rounded-button whitespace-nowrap cursor-pointer">
                        Voir nos offres d'emploi
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à rejoindre l'équipe TechVision ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez nos opportunités et faites partie d'une entreprise
            innovante qui valorise le talent et la créativité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer">
              Voir toutes nos offres
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer"
            >
              Postuler spontanément
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">EmploiConnect</h3>
              <p className="text-gray-400 mb-6">
                La plateforme qui connecte les talents avec les meilleures
                entreprises en France.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Pour les candidats</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Rechercher un emploi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Créer un compte
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Conseils de carrière
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Alertes emploi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Pour les entreprises</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Publier une offre
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Solutions de recrutement
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Marque employeur
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Tarifs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Contacter l'équipe commerciale
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Recevez les dernières offres d'emploi et conseils de carrière.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Votre email"
                  className="bg-gray-800 border-gray-700 text-white rounded-r-none focus:ring-blue-500 focus:border-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-l-none !rounded-button whitespace-nowrap cursor-pointer">
                  <i className="fas fa-paper-plane"></i>
                </Button>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-800" />

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 EmploiConnect. Tous droits réservés.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                CGU
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white cursor-pointer"
              >
                Cookies
              </a>
              <div className="flex items-center text-gray-400">
                <span className="mr-2">FR</span>
                <i className="fas fa-globe"></i>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
            <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
            <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
            <i className="fab fa-cc-apple-pay text-2xl text-gray-400"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
