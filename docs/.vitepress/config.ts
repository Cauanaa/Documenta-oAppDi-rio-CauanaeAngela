import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Aplicativo Diário - Para Estomizados',
  description: 'Acompanhe sua rotina, confira dicas de saúde e monitore seu progresso.',

  themeConfig: {
    
    sidebar: [
      {
        items: [
          { text: 'Introdução', link: '/introducao' },
          { text: 'Descrição do Projeto', link: '/descricao' },
          { text: 'Principais Recursos e Funcionalidades', link: '/recursos' },
          {
            text: 'Diagramas',
            collapsed: true,
            items: [
              { text: 'Diagrama de Casos de Uso', link: '/diagrama_caso_uso' },
              { text: 'Diagrama de Classes', link: '/diagrama_classes' },
            ],
          },
          { text: 'Prtorótipo de Telas', link: '/prototipo' },
          { text: 'Cronograma e Entrega', link: '/cronograma' },
          { text: 'Riscos e Mitigação', link: '/riscos' },
          { text: 'Custos e Orçamento', link: '/custos' },
          { text: 'Considerações Finais', link: '/consideracoes_finais' },
        ],
      },
    ],
    footer: {
      message: 'Documentação Aplicativo Diário Para Estomizados - MIT License.',
      copyright: 'Copyright © 2023 - Cauana Tubin e Angela Tubin'
    },
    search: {
      provider: 'local'
    }
    }
});
