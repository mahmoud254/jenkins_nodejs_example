pipeline {
    agent any

    stages {
        stage('CI') {
            steps {
                // Get some code from a GitHub repository
                // Run Maven on a Unix agent.
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {

                sh """
                docker build . -f dockerfile -t mahmom/nagwa_jenkins:latest
                docker login -u ${USERNAME}  -p ${PASSWORD}
                docker push mahmom/nagwa_jenkins:latest
                
                """

                // To run Maven on a Windows agent, use
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
            }
}
        }
        
        
                stage('CD') {
            steps {

                sh """

                docker run -p 3000:3000 mahmom/nagwa_jenkins:latest
                
                """

                // To run Maven on a Windows agent, use
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
            }

        }
    }
}
