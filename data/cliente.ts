// Objeto centralizado com todas as informações variáveis do cliente
// Modifique este arquivo para adaptar o layout para diferentes clientes

export const dadosCliente = {
  // Cores do tema
  cores: {
    primaryColor: "#d4af37", // Dourado
    secondaryColor: "#1a1a1a", // Preto
    accentColor: "#c9a227", // Dourado escuro
  },

  // Informações de contato
  contato: {
    whatsappNumber: "5511980718259",
    whatsappLink: "https://wa.me/5511980718259?text=Olá, Preciso de um orçamento!!",
    instagram: "https://instagram.com", // Adicione o link real se houver
    email: "",
    endereco: "São Paulo - SP",
    telefone: "(11) 98071-8259",
  },

  // Conteúdo principal
  conteudo: {
    tituloPrincipal: "DS CHAVEIROS 24 HORAS",
    subtitulo: "Serviços de chaveiro profissionais quando você mais precisa.\nEstamos prontos para ajudar 24/7.",
    sobreNos:
      "Somos uma empresa especializada em serviços de chaveiro profissional com atendimento 24 horas. Oferecemos soluções rápidas e confiáveis para todos os tipos de fechaduras e serviços relacionados. Nossa equipe é experiente e utiliza equipamentos de última geração para garantir segurança e qualidade.",
  },

  // Serviços oferecidos
  servicos: [
    {
      id: 1,
      titulo: "Atendimento 24/7",
      descricao: "Disponível todos os dias, sem intervalo",
      icone: "🔑",
    },
    {
      id: 2,
      titulo: "Cobertura Ampla",
      descricao: "Atuação em toda São Paulo e região",
      icone: "🗺️",
    },
    {
      id: 3,
      titulo: "Profissionais Experientes",
      descricao: "Equipe treinada e certificada",
      icone: "👨‍🔧",
    },
    {
      id: 4,
      titulo: "Preços Transparentes",
      descricao: "Sem taxas ocultas, orçamento honesto",
      icone: "💰",
      destaque: true,
    },
  ],

  // Recursos principais (exibidos no hero)
  recursos: [
    {
      titulo: "Resposta Rápida",
      descricao: "Atendimento em menos de 20 minutos",
    },
    {
      titulo: "Serviços Variados",
      descricao: "Residencial, comercial e automotivo",
    },
    {
      titulo: "Confiança Garantida",
      descricao: "Profissionais qualificados e seguros",
    },
  ],

  // Metadados SEO
  seo: {
    siteTitle: "DS CHAVEIROS 24 HORAS | (11) 98071-8259",
    description:
      "Serviços de chaveiro profissional 24 horas. Atendimento rápido em São Paulo e região. Residencial, comercial e automotivo.",
    url: "https://ds-chaveiros.vercel.app",
    ogImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0g-image-chaveiro-yX4xASV82kiLKElZcedbaXleabz4jX.jpg",
  },
}
