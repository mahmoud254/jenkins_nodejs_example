pipeline {
    agent any


    stages {
        stage('preparation') {
            steps {
                
                // Get some code from a GitHub repository
                git 'https://github.com/mahmoud254/jenkins_nodejs_example.git'
            }

        }
        stage('docker build') {
            steps {
                
                // Get some code from a GitHub repository
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh """
                   docker build . -f dockerfile -t mahmom/sprints_jenkins_course:latest
                   docker login -u ${USERNAME} -p ${PASSWORD}
                   docker push mahmom/sprints_jenkins_course:latest
                """
            }
            }
        }        
    }
}
