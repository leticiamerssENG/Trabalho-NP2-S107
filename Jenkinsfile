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
        }

        stage('Build') {
            steps {
                script {
                    // Empacotar o software usando ferramentas como Webpack ou Parcel
                    sh 'npm run build'
                }
            }
        }

        // stage('Notify Users') {
        //     steps {
        //         withEnv {
        //             EMAIL_ADDRESS = 'leticia.merss1999@gmail.com'
        //         }
        //         script {
                    // Enviar e-mail com informações da execução do pipeline
        //             def emailAddress = System.getenv('EMAIL_ADDRESS')
        //             def pipelineStatus = pipeline.currentBuild.result

        //             def emailContent = """
        //                 Pipeline: ${pipeline.currentBuild.fullDisplayName}
        //                 Status: ${pipelineStatus}

        //                 Para mais informações, acesse o Jenkins: http://localhost:8080/job/${pipeline.currentBuild.fullName}
        //             """

        //             sendmail(
        //                 to: emailAddress,
        //                 subject: "Resultado do Pipeline CI/CD",
        //                 body: emailContent
        //             )
        //         }
        //     }
        // }
    }
post {
        always {
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
        }
    }
}