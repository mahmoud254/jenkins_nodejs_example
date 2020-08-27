
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -f dockerfile . -t mahmom/jenkins_node:v1.0'
            }
        }
        stage('push') {
            steps {
                withCredentials([usernamePassword(credentialsId:"docker",usernameVariable:"USERNAME",passwordVariable:"PASSWORD")]){
                sh 'docker login --username $USERNAME --password $PASSWORD'
                sh 'docker push mahmom/jenkins_node:v1.0'
            }
            
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 mahmom/jenkins_node:v1.0'
            }
        }
    }
}
