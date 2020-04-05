# Motivação
Através do [Lucas Montano](https://www.youtube.com/channel/UCyHOBY6IDZF9zOKJPou2Rgg), vi um projeto em Kotlin e decidi implementar em Angular para treinar minhas skills nesse framework.
A ideia do projeto é através da API do Google Maps selecionar um local, onde o componente do mapa emite as coordenadas e o componente de tempo recebe essas coordenadas e imprime a temperatura, nome do lugar, sigla do país, temperatura mínima e máxima do dia.
Aceito sugestões para melhorar o projeto.

# Foi utilizado
* [Node.js 12.14.0](https://nodejs.org/en/)
* [Angular 9.0.3](https://angular.io/)
* [Angular Google Maps](https://angular-maps.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Console Google](https://console.developers.google.com/) 
* [OpenWeatherMap API](https://openweathermap.org/)

# API Keys necessárias para utilizar o projeto.
em app.module.ts, na parte de importar módulos, vamos importar o módulo do Angular Google Maps:
`AgmCoreModule.forRoot({
      apiKey:"YOUR GOOGLE API KEY HERE"
    })`
em weather.service.ts, é necessário colocar a key do OpenWeatherMap na string MY_API_KEY:
`api : string = "http://api.openweathermap.org/data/2.5/weather?";
    MY_API_KEY: string = "YOUR OPENWEATHERMAP API KEY HERE";`

# Rodar o projeto
 1º- Instalar o Node Module - > npm install 
 2º-Instalar Angular Google Maps. Ler o Doc no link acima.
 3º- Após intalar todas as depencências, executar `ng s` para rodar o projeto.
