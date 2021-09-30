pipeline {
    agent any
    stages {
        stage('Preparation') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/osamamagdy/jenkins_nodejs_example.git'
            }
        }
        stage('Build') {
            steps {
                // Get some code from a GitHub repository
                withCredentials([usernamePassword(credentialsId:"dockerhub",usernameVariable:"username",passwordVariable:"pass")]){
                sh 'docker build . -t ${username}/jenkins_sprints:v1.0'
                sh 'docker login -u ${username} -p ${pass}'
                sh 'docker push ${username}/jenkins_sprints:v1.0'
                }
            }
        }  
        stage ('deploy'){
            steps{
                withCredentials([usernamePassword(credentialsId:"test",usernameVariable:"username",passwordVariable:"pass")]){
                
                sh 'docker run -p 3000:3000 -d ${username}/jenkins_sprints:v1.0'
                }
            }
            
        }
    }
}
