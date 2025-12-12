# PatrimoniX

### O que é o projeto PatrimoniX

PatrimoniX é um gerente de investimentos, nos quais os usuários podem registrar suas operações na bolsa de valores
com diversos tipos de ativos, assim como acompanhar seu desempenho com um dashboard e até mesmo simular aportes com 
uma calculadora de aportes inteligente!

## Como instalar?

Faça o clone do repositório e preencha o .env conforme o .env.example.

### Para desenvolvimento

 Suba os conteineres com o seguinte comando:

```docker compose up --build -d```

Assim irá se criar toda a infraestrutura capaz de rodar a aplicação.

#### Como popular meu banco?

Após todos os containers estarem de pé, faça o comanndo para popular:

```docker exec -it backend_patrimonix npm run populate```

É ideal que o volume do banco de dados esteja zerado antes disso, para não dar o erro de primary key. As tabelas de Ativos, Transações e Usuários serão populadas.

### Apenas para uso

Use o arquivo de compose "docker-compose-with-images.yml" que carrega a última versão da branch main que foi adicionada ao DockerHub. 

Obs.: Não precisa fazer o --build dessa vez.

```docker compose -f .\docker-compose-with-images.yml up -d ```

### Créditos

Esse foi um projeto desenvolvido no projeto WebAcademy, uma parceria Icomp-Motorola na UFAM

Nele, trabalharam 4 pessoas, a quais as 3 outras participantes estão a seguir:

👷 Thiago Wesley: https://www.linkedin.com/in/thiago-oliveira-899664b0/

👷 Max de Souza: https://www.linkedin.com/in/max-souza-4533b6196/

👷‍♀️ Daniele Greice: https://www.linkedin.com/in/daniele-greice-00b484186/


