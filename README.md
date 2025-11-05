# Exercicios Docker

Como rodar cada exercício. Cada um tem uma simples aplicação node. 

## Exercicio 1 
    cd Docker_Ex1 
    docker compose up 

## Exercicio 2 
    cd Docker_Ex2

* Faça uma cópia do .env_template para um .env e preencha como julgar conveniente. Em seguida:
    
        docker compose up -d

## Exercicio 3  
    cd Docker_Ex3

* Faça uma cópia do conteúdo do .env_template para um .env e preencha como julgar conveniente. Em seguida teste o conteiner de desenvolvimento:
   
        docker compose -f docker-compose.dev.yml up --build

* Faça o mesmo só que agora para o de produção:
        
        docker compose -f docker-compose.prod.yml up --build


