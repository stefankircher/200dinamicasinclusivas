import React, { useState, useEffect } from 'react';
import { Play, VolumeX, CheckCircle2, XCircle, ChevronDown, Lock, ShieldCheck, HelpCircle } from 'lucide-react';

import heroImg from './assets/images/hero_historia_ludica_1788941999346.jpg';
import bonus1Img from './assets/images/bonus_1_minimal_blue_1788942538782.jpg';
import bonus2Img from './assets/images/bonus_2_minimal_yellow_1788942550966.jpg';
import bonus3Img from './assets/images/bonus_3_minimal_purple_1788942560043.jpg';
import bonus4Img from './assets/images/bonus_4_minimal_pink_1788942569846.jpg';
import bonus5Img from './assets/images/bonus_5_minimal_indigo_1788942579193.jpg';
import bonus6Img from './assets/images/bonus_6_minimal_orange_1788942590749.jpg';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  const faqs = [
    { question: "Como vou receber o material?", answer: "O acesso é enviado imediatamente para o seu e-mail logo após a confirmação do pagamento. Os arquivos estão em formato PDF prontos para baixar e imprimir." },
    { question: "Para qual faixa etária e diagnósticos as dinâmicas funcionam?", answer: "Atendem alunos da Educação Infantil ao 3º ano do Ensino Fundamental. O material possui adaptações focadas em Autismo (TEA), TDAH, Deficiência Intelectual, Síndrome de Down e atrasos no desenvolvimento." },
    { question: "Precisa de materiais caros para aplicar?", answer: "Não! Todas as dinâmicas foram estruturadas utilizando materiais acessíveis, impressos simples e recursos do dia a dia da sala de aula." },
    { question: "Funciona para Sala Regular e Sala de Recursos (AEE)?", answer: "Com certeza. Servem tanto para o atendimento individualizado na Sala de Recursos quanto para a professora regente adaptar suas aulas na turma regular." },
    { question: "São quantas atividades e dinâmicas no total?", answer: "No pacote completo, você recebe mais de 200 dinâmicas principais e mais de 300 recursos visuais e fichas nos bônus exclusivos." },
    { question: "E se eu não gostar?", answer: "Você tem 7 dias de garantia incondicional. Caso sinta que o material não é útil para você, basta solicitar o reembolso e devolveremos 100% do valor investido." }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Márcia Oliveira",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
      messages: [
        { text: "olha vou ser honesta, comprei sem muita esperanca", time: "11:20", me: false },
        { text: "achei q ia ser mais do mesmo sabe", time: "11:21", me: false },
        { text: "E ai? 😅", time: "11:21", me: true },
        { text: "me surpreendeu muito!! as dinamicas sao diferentes de tudo q ja vi", time: "11:22", me: false },
        { text: "to usando na turma do 4 ano e ta funcionando demais", time: "11:23", me: false },
        { text: "parabens pelo trabalho 🥰", time: "11:23", me: false },
      ]
    },
    {
      name: "Juliana Mendes",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
      messages: [
        { text: "Oi Juli, o que achou do material?", time: "09:15", me: true },
        { text: "nossa!! to aqui mostrando pra todo mundo na sala dos professores kkk", time: "09:17", me: false },
        { text: "a Ana tbm quer comprar", time: "09:18", me: false },
        { text: "falei q é mt bom mesmo", time: "09:18", me: false },
        { text: "Que maravilhoso!! 🎉🎉", time: "09:19", me: true },
      ]
    },
    {
      name: "Fernanda Lima",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
      messages: [
        { text: "gente eu chegava toda segunda sem saber o q fazer com as criancas", time: "14:32", me: false },
        { text: "comprei ontem e ja tenho a semana toda planejada kkk", time: "14:32", me: false },
        { text: "Que ótimo!! Fico muito feliz 😍", time: "14:33", me: true },
        { text: "mt organizado o material, amei demais", time: "14:33", me: false },
        { text: "já indiquei pras minhas colegas da escola 🙏", time: "14:34", me: false },
      ]
    },
    {
      name: "Patrícia Souza",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
      messages: [
        { text: "Pati, usou alguma dinâmica essa semana?", time: "16:44", me: true },
        { text: "Sim!! apliquei a de pintura com aquarela hoje", time: "16:46", me: false },
        { text: "as criancas AMARAM, nunca vi elas tao animadas assim", time: "16:46", me: false },
        { text: "tocou o sinal e ninguem queria ir embora kkk", time: "16:47", me: false },
        { text: "Isso é tudo!! 👏👏", time: "16:47", me: true },
        { text: "valeu muito o investimento ❤️", time: "16:48", me: false },
      ]
    },
    {
      name: "Renata Costa",
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100",
      messages: [
        { text: "bom dia!! comprei as 22h ontem", time: "08:05", me: false },
        { text: "ja acordei e usei uma dinamica na primeira aula kkk", time: "08:05", me: false },
        { text: "Bom dia!! Que incrível isso 😍", time: "08:06", me: true },
        { text: "minha turma do 3 ano adorou a de colagem", time: "08:07", me: false },
        { text: "muito obrigada mesmo, vc salvou minhas aulas ❤️❤️", time: "08:07", me: false },
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen font-sans bg-[#F8F9FB]">
      {/* Top Banner */}
      <div className="sticky top-0 bg-[#E43131] text-white py-3 px-4 flex flex-col sm:flex-row justify-center items-center gap-4 text-sm sm:text-base font-bold shadow-md z-50">
        <div className="flex items-center gap-2">
           <span className="text-xl">📚</span> OFERTA ESPECIAL EXPIRA EM:
        </div>
        <div className="flex items-center gap-2 text-xl sm:text-2xl">
          <div className="bg-white text-[#E43131] px-3 py-1 rounded shadow-inner min-w-[50px] text-center">
            {minutes.toString().padStart(2, '0')}
          </div>
          <span className="font-bold">:</span>
          <div className="bg-white text-[#E43131] px-3 py-1 rounded shadow-inner min-w-[50px] text-center">
            {seconds.toString().padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-blue-100 shadow-sm">
          <span>📚</span> Material exclusivo para educadoras e professoras do AEE / Educação Inclusiva
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A202C] leading-tight tracking-tight mb-6 max-w-3xl">
          <span className="text-[#2B6BFF]">+200 Adaptações e Dinâmicas</span> para<br/>
          Educação Inclusiva<br/>
          para você <span className="text-[#1DA853]">nunca mais<br/>
          chegar na sala</span><br/>
          sem saber como adaptar a aula para seus alunos atípicos.
        </h1>
        
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
          Para professoras do AEE, regentes e especialistas da Ed. Infantil ao 3º ano que lidam com turmas heterogêneas e chegam na segunda-feira exaustas com a sobrecarga de adaptações.
        </p>

        <a href="#planos" className="bg-[#2B6BFF] hover:bg-blue-700 hover-wobble text-white text-lg md:text-xl font-bold py-5 px-10 rounded-full shadow-lg shadow-blue-200 flex items-center gap-2">
          👉 Quero Acessar Agora 👈
        </a>
      </section>

      {/* Hero Image */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-gray-200 border-4 border-white relative">
          <img src={heroImg} alt="Materiais de AEE na Mesa" className="w-full h-auto object-cover" />
        </div>
      </section>

      {/* Badges & Social Proof */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-5 py-3 rounded-full font-bold shadow-sm border border-green-100">
              <CheckCircle2 size={20} className="fill-green-600 text-white" /> Funciona em qualquer contexto
            </div>
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-5 py-3 rounded-full font-bold shadow-sm border border-green-100">
              <CheckCircle2 size={20} className="fill-green-600 text-white" /> Na Sala Regular ou na Sala de Recursos
            </div>
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-5 py-3 rounded-full font-bold shadow-sm border border-green-100">
              <CheckCircle2 size={20} className="fill-green-600 text-white" /> Ed. Infantil ao 3º ano (Autismo, TDAH, Deficiência Intelectual e mais)
            </div>
            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-5 py-3 rounded-full font-bold shadow-sm border border-green-100">
              <CheckCircle2 size={20} className="fill-green-600 text-white" /> Comunicação, coordenação, alfabetização e autonomia
            </div>
          </div>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Mais de <strong className="text-gray-900">1.800 educadoras inclusivas</strong> já usam os materiais e adaptam suas aulas em minutos com total segurança. Estímulos sensoriais, rotinas visuais, consciência fonológica e alfabetização adaptada — tudo organizado e pronto pra imprimir e aplicar.
          </p>

          <a href="#planos" className="inline-block bg-[#1DA853] hover:bg-green-600 hover-wobble text-white text-xl font-bold py-5 px-12 rounded-full shadow-lg shadow-green-200">
            QUERO MEUS MATERIAIS ADAPTADOS
          </a>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            O PROBLEMA NÃO É VOCÊ
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A202C] leading-tight">
            Se você se identifica com isso,<br/>
            o problema <span className="text-[#E43131]">NÃO É VOCÊ.</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">Se você:</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-red-50/50 border border-red-100 rounded-3xl p-6 flex items-start gap-4">
            <XCircle className="text-red-500 flex-shrink-0 fill-red-500" size={32} />
            <p className="text-gray-700 font-medium leading-relaxed">Chega na segunda-feira sem saber como adaptar a atividade para o aluno público-alvo da Educação Inclusiva</p>
          </div>
          <div className="bg-red-50/50 border border-red-100 rounded-3xl p-6 flex items-start gap-4">
            <XCircle className="text-red-500 flex-shrink-0 fill-red-500" size={32} />
            <p className="text-gray-700 font-medium leading-relaxed">Fica horas na internet procurando materiais adaptados sem achar nada prático para a sua realidade</p>
          </div>
          <div className="bg-red-50/50 border border-red-100 rounded-3xl p-6 flex items-start gap-4">
            <XCircle className="text-red-500 flex-shrink-0 fill-red-500" size={32} />
            <p className="text-gray-700 font-medium leading-relaxed">Sente o aluno desinteressado, em crise ou sem conseguir acompanhar o ritmo do restante da turma</p>
          </div>
          <div className="bg-red-50/50 border border-red-100 rounded-3xl p-6 flex items-start gap-4">
            <XCircle className="text-red-500 flex-shrink-0 fill-red-500" size={32} />
            <p className="text-gray-700 font-medium leading-relaxed">Sente a ansiedade do domingo à noite por não ter o PDI ou as atividades adaptadas prontas</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-5xl md:text-7xl font-black text-[#1A202C] mb-6 flex justify-center items-center gap-4">
            Respira. <span className="text-5xl">📚</span>
          </h3>
          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mx-auto">
            O problema nunca foi o seu amor pela inclusão ou a sua capacidade pedagógica. Foi a falta de um <strong className="text-green-600 font-bold">acervo pronto, organizado e pensado especificamente para a realidade da Educação Inclusiva no Brasil.</strong> É exatamente isso que as 200 Adaptações e Dinâmicas resolvem.
          </p>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              SURPRESA ESPECIAL
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A202C] flex items-center justify-center gap-3">
              🎁 Bônus Exclusivos
            </h2>
            <p className="text-gray-500 mt-4 text-lg">Incluídos gratuitamente no Pacote Completo</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bonus 1 */}
            <div className="bg-[#1F4529] rounded-[2rem] p-8 text-center text-white flex flex-col items-center">
              <div className="w-full h-48 md:h-64 rounded-xl mb-6 shadow-xl relative overflow-hidden">
                 <img src={bonus1Img} alt="50 Atividades de Estímulo e Foco" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-3">50 Atividades de Estímulo e Foco para TDAH e Autismo</h3>
              <p className="text-gray-400 line-through mb-1">R$19,90</p>
              <p className="text-3xl font-black mb-6">R$0,00</p>
              <div className="bg-[#1DA853] text-white font-bold py-2 px-6 rounded-full text-sm">
                INCLUÍDO NO COMPLETO
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="bg-[#1F4529] rounded-[2rem] p-8 text-center text-white flex flex-col items-center">
              <div className="w-full h-48 md:h-64 rounded-xl mb-6 shadow-xl relative overflow-hidden">
                 <img src={bonus2Img} alt="Kit Prático de Cartões PECS" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-3">Kit Prático de Cartões de Comunicação Alternativa (PECS)</h3>
              <p className="text-gray-400 line-through mb-1">R$19,90</p>
              <p className="text-3xl font-black mb-6">R$0,00</p>
              <div className="bg-[#1DA853] text-white font-bold py-2 px-6 rounded-full text-sm">
                INCLUÍDO NO COMPLETO
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="bg-[#1F4529] rounded-[2rem] p-8 text-center text-white flex flex-col items-center">
              <div className="w-full h-48 md:h-64 rounded-xl mb-6 shadow-xl relative overflow-hidden">
                 <img src={bonus3Img} alt="60 Atividades de Integração Sensorial" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-3">60 Atividades de Integração Sensorial e Motora</h3>
              <p className="text-gray-400 line-through mb-1">R$19,90</p>
              <p className="text-3xl font-black mb-6">R$0,00</p>
              <div className="bg-[#1DA853] text-white font-bold py-2 px-6 rounded-full text-sm">
                INCLUÍDO NO COMPLETO
              </div>
            </div>

            {/* Bonus 4 */}
            <div className="bg-[#1F4529] rounded-[2rem] p-8 text-center text-white flex flex-col items-center">
              <div className="w-full h-48 md:h-64 rounded-xl mb-6 shadow-xl relative overflow-hidden">
                 <img src={bonus4Img} alt="100 Fichas de Rotina Visual" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-3">100 Fichas de Rotina Visual Ilustrada para Imprimir</h3>
              <p className="text-gray-400 line-through mb-1">R$19,90</p>
              <p className="text-3xl font-black mb-6">R$0,00</p>
              <div className="bg-[#1DA853] text-white font-bold py-2 px-6 rounded-full text-sm">
                INCLUÍDO NO COMPLETO
              </div>
            </div>
            
             {/* Bonus 5 */}
             <div className="bg-[#1F4529] rounded-[2rem] p-8 text-center text-white flex flex-col items-center">
              <div className="w-full h-48 md:h-64 rounded-xl mb-6 shadow-xl relative overflow-hidden">
                 <img src={bonus5Img} alt="Modelo Editável de PDI" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-3">Modelo Editável de PDI (Plano de Desenvolvimento Individual)</h3>
              <p className="text-gray-400 line-through mb-1">R$19,90</p>
              <p className="text-3xl font-black mb-6">R$0,00</p>
              <div className="bg-[#1DA853] text-white font-bold py-2 px-6 rounded-full text-sm">
                INCLUÍDO NO COMPLETO
              </div>
            </div>

            {/* Bonus 6 */}
            <div className="bg-[#1F4529] rounded-[2rem] p-8 text-center text-white flex flex-col items-center">
              <div className="w-full h-48 md:h-64 rounded-xl mb-6 shadow-xl relative overflow-hidden">
                 <img src={bonus6Img} alt="Guia Prático para Manejo de Comportamento" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-xl mb-3">Guia Prático para Manejo de Comportamento e Crises na Sala</h3>
              <p className="text-gray-400 line-through mb-1">R$19,90</p>
              <p className="text-3xl font-black mb-6">R$0,00</p>
              <div className="bg-[#1DA853] text-white font-bold py-2 px-6 rounded-full text-sm">
                INCLUÍDO NO COMPLETO
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center text-blue-800 font-bold text-lg md:text-xl">
             💡 São 6 bônus — <span className="text-blue-600">R$119,40 em materiais</span> — incluídos <span className="text-blue-600">GRATUITAMENTE</span> no Pacote Completo, somente hoje por <span className="text-blue-600">R$9,90.</span>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              ESCOLHA SEU PLANO
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A202C]">
              Escolha Seu <span className="text-[#1DA853]">Plano</span>
            </h2>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-center py-3 px-4 rounded-xl font-bold mb-8 max-w-4xl mx-auto flex items-center justify-center gap-2">
            <span>⚠️</span> ÚLTIMAS UNIDADES POR ESSE VALOR PROMOCIONAL
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mt-6 relative">
              <h3 className="text-2xl font-black text-[#1A202C] mb-2">PLANO BÁSICO</h3>
              <p className="text-gray-500 mb-6 font-medium">Para começar a transformar a inclusão na sua escola hoje</p>
              
              <div className="mb-8">
                <p className="text-gray-400 line-through text-lg mb-1">De R$47,00</p>
                <p className="text-5xl font-black text-[#1A202C]">R$5,90</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  +200 Dinâmicas e Atividades Adaptadas para AEE
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  Acesso imediato via e-mail
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  Funciona em qualquer celular ou computador
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  Garantia incondicional de 7 dias
                </li>
              </ul>

              <a href="#planos" className="block text-center w-full bg-[#1DA853] hover:bg-green-600 hover-wobble text-white font-black py-4 rounded-xl shadow-lg shadow-green-200">
                COMPRAR AGORA — R$5,90
              </a>
            </div>

            {/* Complete Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#1DA853] relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1DA853] text-white px-6 py-1.5 rounded-full font-bold text-sm flex items-center gap-2 whitespace-nowrap shadow-md">
                ⭐ MAIS ESCOLHIDO
              </div>
              
              <h3 className="text-2xl font-black text-[#1DA853] mb-2 mt-4">PLANO COMPLETO</h3>
              <p className="text-gray-500 mb-6 font-medium">O kit definitivo de Educação Inclusiva e AEE que você sempre precisou</p>
              
              <div className="mb-4">
                <p className="text-gray-400 line-through text-lg mb-1">De R$67,00</p>
                <p className="text-5xl font-black text-[#1DA853]">R$14,90</p>
              </div>

              <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-800 border border-yellow-200 px-3 py-1 rounded-full text-sm font-bold mb-6">
                🎫 Cupom aplicado: INCLUSAO
              </div>

              <div className="bg-yellow-400 text-yellow-900 font-black text-center py-3 rounded-xl mb-8 shadow-sm flex justify-center items-center gap-2">
                ⭐ ACESSO VITALÍCIO
              </div>

              <ul className="space-y-4 mb-8 border-t border-gray-100 pt-6">
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  <div>
                    <span className="font-bold">+200 dinâmicas e atividades adaptadas em PDF organizadas por necessidade (TEA, TDAH, DI, Mobilidade)</span>
                    <ul className="list-disc ml-5 mt-1 text-gray-500 font-normal">
                      <li>Alfabetização adaptada, autonomia, rotinas e estímulos sensoriais</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  50 Atividades de Estímulo e Foco para TDAH e Autismo
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  Kit Prático de Comunicação Alternativa (PECS)
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  60 Atividades de Integração Sensorial e Motora
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  100 Fichas de Rotina Visual Ilustrada para Imprimir
                </li>
                 <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  Modelo Editável de PDI (Plano de Desenvolvimento Individual)
                </li>
                 <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  Guia Prático para Manejo de Comportamento e Crises
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  Planner Semanal da Professora Inclusiva
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  Baixa, imprime e aplica no mesmo dia
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  Acesso vitalício ao material completo
                </li>
                <li className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-[#1DA853] flex-shrink-0 mt-0.5 fill-[#1DA853] text-white" size={20} />
                  Garantia incondicional de 7 dias
                </li>
              </ul>

              <a href="#planos" className="block text-center w-full bg-[#EAB308] hover:bg-yellow-600 hover-wobble text-[#1A202C] font-black text-xl py-5 rounded-xl shadow-lg shadow-yellow-200">
                COMPRAR AGORA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-8">
            <span>👉</span> Mais de 1.800 educadoras já utilizam
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#1A202C] mb-12">
            O que dizem sobre o <span className="text-[#1DA853]">Material Adaptado</span>
          </h2>

          <div className="bg-gray-100 p-4 rounded-3xl inline-block max-w-sm w-full mx-auto relative shadow-inner">
             {/* WhatsApp carousel */}
             <div className="bg-white rounded-2xl overflow-hidden shadow-sm relative text-left">
                <div className="bg-[#075e54] text-white p-3 flex items-center gap-3 relative z-10">
                   <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${testimonials[activeTestimonial].img})` }}></div>
                   </div>
                   <div>
                      <div className="font-bold">{testimonials[activeTestimonial].name}</div>
                      <div className="text-xs opacity-80">online</div>
                   </div>
                   <div className="ml-auto flex gap-4">
                      <span className="opacity-80">📞</span>
                      <span className="opacity-80">🎥</span>
                   </div>
                </div>
                
                <div className="p-4 bg-[#efe7dd] min-h-[350px] flex flex-col relative overflow-hidden">
                    {/* Chat background pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] pointer-events-none mix-blend-multiply"></div>
                    
                    <div className="relative z-10 flex flex-col w-full px-1">
                       {testimonials[activeTestimonial].messages.map((msg, i, arr) => {
                         const isSameAsPrev = i > 0 && arr[i-1].me === msg.me;
                         
                         let borderRadiusClass = 'rounded-lg';
                         if (msg.me) {
                            if (!isSameAsPrev) borderRadiusClass += ' rounded-tr-none';
                         } else {
                            if (!isSameAsPrev) borderRadiusClass += ' rounded-tl-none';
                         }

                         return (
                           <div key={i} className={`text-[15px] max-w-[85%] relative shadow-sm flex flex-col px-3 pt-1.5 pb-2 ${msg.me ? 'bg-[#dcf8c6] self-end' : 'bg-white self-start'} ${borderRadiusClass} ${!isSameAsPrev ? 'mt-3' : 'mt-1'}`}>
                              <span className="text-gray-900 leading-snug break-words" style={{ paddingRight: '2.5rem' }}>{msg.text}</span>
                              <div className={`text-[11px] ${msg.me ? 'text-gray-500' : 'text-gray-400'} flex items-center justify-end gap-0.5 absolute bottom-1 right-2`}>
                                 {msg.time} {msg.me && <span className="text-blue-500 tracking-tighter ml-0.5">✓✓</span>}
                              </div>
                           </div>
                         );
                       })}
                    </div>
                </div>
             </div>
             
             {/* Carousel Controls */}
             <button onClick={prevTestimonial} className="absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer font-bold text-xl z-20 hover:bg-gray-100 transition-colors">&lsaquo;</button>
             <button onClick={nextTestimonial} className="absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer font-bold text-xl z-20 hover:bg-gray-100 transition-colors">&rsaquo;</button>
             
             <div className="flex justify-center gap-2 mt-4">
               {testimonials.map((_, i) => (
                 <button key={i} onClick={() => setActiveTestimonial(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${activeTestimonial === i ? 'bg-green-500' : 'bg-gray-300'}`} aria-label={`Ir para depoimento ${i + 1}`} />
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-[#1A202C] text-center mb-12">
          Conheça a <span className="text-[#1DA853]">Profa. Eliane Rodrigues</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-[#2B6BFF] p-1 flex-shrink-0 shadow-2xl shadow-blue-200">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
               <div className="w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400')]"></div>
            </div>
          </div>
          
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Pedagoga especialista em Educação Inclusiva e AEE com mais de 12 anos de experiência na rede pública e privada. Criou o acervo de +200 Adaptações e Dinâmicas depois de vivenciar na pele a angústia de ver alunos atípicos deixados de lado por falta de tempo e materiais adequados. Hoje, seus materiais já ajudaram mais de 1.800 professoras em todo o Brasil a realizarem uma inclusão de fato, promovendo autonomia e aprendizado real do Infantil ao Fundamental.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white border border-gray-200 px-4 py-2 rounded-full font-bold text-gray-700 shadow-sm flex items-center gap-2">
                🎓 +12 anos de experiência
              </div>
              <div className="bg-white border border-gray-200 px-4 py-2 rounded-full font-bold text-gray-700 shadow-sm flex items-center gap-2">
                👩‍🏫 +1.800 educadoras impactadas
              </div>
              <div className="bg-white border border-gray-200 px-4 py-2 rounded-full font-bold text-gray-700 shadow-sm flex items-center gap-2">
                📚 Especialista em AEE e Inclusão
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-[#1F4529] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className="text-4xl">🔒</span>
            <span className="text-4xl">🛡️</span>
            <div className="bg-[#1DA853] text-white px-3 py-1 rounded flex items-center gap-2">
              <CheckCircle2 size={24} className="fill-green-400 text-white" />
              <span className="font-black text-2xl text-yellow-400">7 dias</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase">
            VOCÊ ESTÁ PROTEGIDA PELA<br/>GARANTIA!
          </h2>
          
          <p className="text-[#1DA853] text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
            Se em 7 dias você não gostar do material por qualquer motivo, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Zero risco para você.
          </p>
          
          <div className="bg-black text-white font-bold py-4 px-8 rounded-xl inline-block shadow-xl">
             REALIZE O PAGAMENTO E RECEBA VIA E-MAIL IMEDIATAMENTE
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A202C] text-center mb-12">
            Perguntas <span className="text-[#2B6BFF]">Frequentes</span>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-[#1A202C] text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`text-gray-400 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#planos" className="inline-block bg-[#1DA853] hover:bg-green-600 hover-wobble text-white text-xl font-bold py-5 px-12 rounded-full shadow-lg shadow-green-200">
              QUERO MINHAS DINÂMICAS E ADAPTAÇÕES PRONTAS
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#1A202C] text-gray-400 py-8 text-center text-sm px-4">
         <div className="mb-4 text-gray-300 font-bold">Acesso imediato · Garantia de 7 dias · Pagamento seguro</div>
         <p>© {new Date().getFullYear()} Profa. Eliane Rodrigues — Todos os direitos reservados.</p>
         <p className="mt-2 text-xs">Política de Privacidade · Termos de Uso</p>
      </footer>
    </div>
  );
}
