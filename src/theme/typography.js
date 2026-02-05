// TIPOGRAFIA / FONTES DO SISTEMA
// AQUI SAO TODAS AS FONTES DO SISTEMA, ALTERANDO ALGUMA COISA AQUI, TODO O SISTEMA MUDA

export const typography = {

  // TÍTULO PRINCIPAL (PÁGINAS)

  h1: { 
    fontSize: "2.5rem",           
    fontWeight: 700,              
    lineHeight: 1.2,              
    letterSpacing: "-0.01em",     
    '@media (max-width:900px)': { 
      fontSize: "2.1rem"         
    },
    '@media (max-width:600px)': { 
      fontSize: "1.75rem"         
    },
  },

  // TÍTULO DE SEÇÃO

  h2: { 
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
    '@media (max-width:900px)': { 
      fontSize: "1.75rem" 
    },
    '@media (max-width:600px)': { 
      fontSize: "1.5rem" 
    },
  },

  // SUBTÍTULO FORTE (SEÇÕES / CARDS GRANDES)

  h3: { 
    fontSize: "1.75rem",
    fontWeight: 700,
    lineHeight: 1.35,
    '@media (max-width:600px)': { 
      fontSize: "1.5rem" 
    },
  },

  // SUBTÍTULO MÉDIO (CARDS)

  h4: { 
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.4,
    '@media (max-width:600px)': { 
      fontSize: "1.25rem" 
    },
  },

  // TÍTULO DE BLOCO / MODAL

  h5: { 
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },

  // LABEL FORTE / TÍTULO MENOR

  h6: { 
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.6,
  },

  // TEXTO PADRÃO (LISTAS, FORMULÁRIOS)

  body1: { 
    fontSize: "0.95rem",
    lineHeight: 1.7,
    fontWeight: 400,
  },

  // TEXTO AUXILIAR

  body2: { 
    fontSize: "0.875rem",
    lineHeight: 1.6,
    fontWeight: 400,
  },

  // SUBTÍTULO PADRÃO (LABELS)

  subtitle1: {
    fontSize: "0.95rem",
    fontWeight: 500,
    lineHeight: 1.6,
  },

  // SUBTÍTULO MENOR

  subtitle2: {
    fontSize: "0.8rem",
    fontWeight: 500,
    lineHeight: 1.6,
  },

  // TEXTO PEQUENO (HELPERS, STATUS)

  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.4,
    fontWeight: 400,
  },

  // TEXTO DE BOTÕES

  button: {
    textTransform: "none",
    fontWeight: 600,
    fontSize: "0.875rem",
    letterSpacing: "0.01em",
    lineHeight: 1.4,
  },

  // TEXTO DECORATIVO / LABEL SUPERIOR

  overline: {
    fontSize: "0.7rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    lineHeight: 1.4,
  },
};