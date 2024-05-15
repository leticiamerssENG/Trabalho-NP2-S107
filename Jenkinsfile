pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Instalar dependências usando npm ou yarn
                    sh 'npm install'
                }
            }
        }

        stage('Execute Tests') {
            steps {
                script {
                    // Executar testes unitários usando Jest
                    sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Empacotar o software usando Webpack ou outra ferramenta
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        always {
            // Arquivar os artefatos gerados no build
             archiveArtifacts artifacts: '**', fingerprint: true
            // Arquivar outros artefatos, se necessário
        }
    }
}
