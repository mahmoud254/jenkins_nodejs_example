pipeline {
    agent any


    stages {
        stage('Build') {
            steps {
                
                // Get some code from a GitHub repository
                git 'https://github.com/mahmoud254/jenkins_nodejs_example.git'

                // Run Maven on a Unix agent.
                sh """ls
                    mkdir test
                
                """

                // To run Maven on a Windows agent, use
                // bat "mvn -Dmaven.test.failure.ignore=true clean package"
            }

        }
    }
}
