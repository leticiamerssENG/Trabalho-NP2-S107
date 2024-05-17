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
                    // Executar testes unitários usando Mocha ou Jest
                    sh 'npm test'
                }
            }
            post {
                success {
                // Arquivar os relatórios de teste
                junit 'reports/jest/**/*.xml'
            }
        }

        stage('Build') {
            steps {
                script {
                    // Empacotar o software usando ferramentas como Webpack ou Parcel
                    sh 'npm run build'
                }
            }
            post {
                success {
                    // Arquivar o artefato gerado (ajustar o caminho)
                    archiveArtifacts artifacts: 'dist/**/*', allowEmptyArchive: true
                }
            }
        }

        stage('Notif') {

            steps {
                echo 'Notificando'
                sh '''
                    cd script
                    chmod 775 *
                    ./enviar_email.sh
                    '''
            }
        }
    }
}