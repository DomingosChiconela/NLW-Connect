import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'http://localhost:3333/docs/json',// onde está a documentação da API
    output: {
      target: './src/http/api.ts',//onde salvar o arquivo
      client: 'fetch',// qual cliente http usar
      httpClient: 'fetch',// qual cliente http usar
      clean: true,
      baseUrl: 'http://localhost:3333',

      override: {
        fetch: {
          includeHttpResponseReturnType: false,// se quiser retornar o response completo
        },
      },
    },
  },
})