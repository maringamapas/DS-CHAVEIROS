// Objeto centralizado com todas as informações variáveis do cliente
// Modifique este arquivo para adaptar o layout para diferentes clientes

export const dadosCliente = {
  // Cores do tema
  cores: {
    primaryColor: "#f59e0b", // Âmbar
    secondaryColor: "#1f2937", // Cinza escuro
    accentColor: "#ea580c", // Laranja
  },

  // Informações de contato
  contato: {
    whatsappNumber: "5544999324635",
    whatsappLink: "https://wa.me/5544999324635?text=Olá, Preciso de um orçamento!!",
    instagram: "https://instagram.com", // Adicione o link real se houver
    email: "",
    endereco: "Maringá - PR",
    telefone: "(44) 99932-4635",
  },

  // Conteúdo principal
  conteudo: {
    tituloPrincipal: "Silver Key Chaveiro 24h",
    subtitulo: "Chaveiro rápido quando você mais precisa.\nEstamos prontos para ajudar.",
    sobreNos:
      "Somos uma empresa especializada em serviços de Chaveiro, socorro automotivo e residêncial com mais de 15 anos de experiência na região. Nossa equipe é treinada e certificada para oferecer o melhor atendimento 24/7.",
  },

  // Serviços oferecidos
  servicos: [
    {
      id: 1,
      titulo: "Ampla Cobertura",
      descricao: "Maringá, Sarandi e região",
      icone: "🗺️",
    },
    {
      id: 2,
      titulo: "Disponível 24/7",
      descricao: "Atendimento ininterrupto, todos os dias",
      icone: "⏰",
    },
    {
      id: 3,
      titulo: "Profissionais",
      descricao: "Equipe treinada e muito experiente",
      icone: "👨‍🔧",
    },
    {
      id: 4,
      titulo: "Preços Justos",
      descricao: "Transparência total sem taxas ocultas",
      icone: "💰",
      destaque: true,
    },
  ],

  // Recursos principais (exibidos no hero)
  recursos: [
    {
      titulo: "Resposta Rápida",
      descricao: "Atendimento em menos de 15 minutos",
    },
    {
      titulo: "Rastreamento em Tempo Real",
      descricao: "Acompanhe pelo app ou WhatsApp",
    },
    {
      titulo: "Profissionais Experientes",
      descricao: "Equipe treinada e certificada",
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "Silver Key Chaveiro 24h | (44) 99932-4635",
    description:
      "Chaveirorápido quando você mais precisa. Cobertura: Maringá, Sarandi e região",
    url: "https://vitrine-guincho.vercel.app",
    ogImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/og-images-sJuuuAvIHqa8z89YgojuEIUX24PxJ0.jpg",
  },
}
