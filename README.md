# DEPENDENCIAS

# BACKEND
- cd todo-api
- npm install -g @nestjs/cli
- npm install --save @nestjs/typeorm typeorm mysql2
- npm install --save @nestjs/passport passport passport-jwt passport-local bcrypt @nestjs/jwt
- npm i --save class-validator class-transformer
- npm i --save @nestjs/websockets @nestjs/platform-socket.io socket.io

# FRONTEND
- cd angular-frontend
- npm install -g @angular/cli
- ng add @angular/material
- npm i @auth0/angular-jwt
- npm install socket.io-client

# Docker 
- cd .. / Sem entrar no backend(todo-api) ou no frontend(angular-frontend)
- docker compose up -d

# Como Usar

# Iniciação
- Precisa ter o Docker desktop aberto
- docker compose up -d
- cd todo-api
- npm run start:dev (localhost:3000)
- Mantenha o backend ativo
- Abra outro terminal
- cd angular-frontend
- ng serve (localhost:4200)
- Para funcionar os dois precisamm estar ativos
- Agora é só usar o localhost:4200 

