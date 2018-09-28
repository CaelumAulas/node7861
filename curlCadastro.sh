#Cadsatro enviando JSON
curl -X POST -d '{"titulo": "LIVRO JSON", "preco":50, "descricao": "akshdasd"}' -H "Accept:application/json" -H "Content-Type:application/json" http://localhost:3000/produtos