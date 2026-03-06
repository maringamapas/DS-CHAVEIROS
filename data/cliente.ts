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
    whatsappNumber: "5524988334260",
    whatsappLink: "https://wa.me/5524988334260?text=Olá, preciso de socorro!",
    instagram: "https://instagram.com", // Adicione o link real se houver
    email: "contato@lourenco-guincho.com",
    endereco: "Barra Mansa, RJ",
    telefone: "(24) 98833-4260",
  },

  // Conteúdo principal
  conteudo: {
    tituloPrincipal: "Auto Socorro Lourenço Guincho",
    subtitulo: "Guincho rápido quando você mais precisa.\n Cobertura em Barra Mansa e região.\nEstamos prontos para ajudar.",
    sobreNos:
      "Somos uma empresa especializada em serviços de guincho e socorro automotivo com mais de 15 anos de experiência na região. Nossa equipe é treinada e certificada para oferecer o melhor atendimento 24/7.",
  },

  // Serviços oferecidos
  servicos: [
    {
      id: 1,
      titulo: "Ampla Cobertura",
      descricao: "Barra Mansa, Volta Redonda, Pirai, Resende, Itatiaia, Rio Claro, Lidice, Barra do Pirai - RJ e Santa Rita de Jacutinga - MG",
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
      descricao: "Acompanhe o guinchos pelo app ou WhatsApp",
    },
    {
      titulo: "Profissionais Experientes",
      descricao: "Equipe treinada e certificada",
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "Auto Socorro Lourenço Guincho | (24) 98833-4260",
    description:
      "Guincho rápido quando você mais precisa. Cobertura: Barra Mansa, Volta Redonda, Pirai, Resende, Itatiaia, Rio Claro, Lidice, Barra do Pirai - RJ e Santa Rita de Jacutinga - MG",
    url: "https://vitrine-guincho.vercel.app",
    ogImage: "https://vitrine-guincho.vercel.app/og-image.jpg",
  },
}
