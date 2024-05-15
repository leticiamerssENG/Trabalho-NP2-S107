pipeline {
    agent any
    environment {
            EMAIL_ADDRESS = 'davidossantosbalbinomarcelino@gmail.com'
        }
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
             archiveArtifacts artifacts: '**', fingerprint: true
             
             emailext (
                subject: "Resultado do Pipeline CI/CD",
                body: "Pipeline: ${currentBuild.fullDisplayName}\nStatus: ${currentBuild.result}\nPara mais informações, acesse o Jenkins: ${env.BUILD_URL}",
                to: "${env.EMAIL_ADDRESS}",
                mimeType: 'text/plain'
            )
        }
    }
}
