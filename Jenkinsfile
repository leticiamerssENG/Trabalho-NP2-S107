pipeline {
    agent any

    stages {
        stage('Test') {
             triggers {
        // Aciona a pipeline quando houver um push para o repositório Git
            githubPush()
        }
            steps {
                // Aqui é onde você executa o comando npm test
                sh 'npm install' // Instala as dependências do projeto
                sh 'npm test' // Executa os testes
            }
        }
    }
}
