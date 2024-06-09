pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Add your build steps here
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                // Add your test steps here
                sh 'make test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add your deployment steps here
                withCredentials([sshUserPrivateKey(credentialsId: 'ec2-ssh-key', keyFileVariable: 'SSH_KEY')]) {
                    sh '''
                    scp -i $SSH_KEY -o StrictHostKeyChecking=no output_file.zip ec2-user@your-ec2-instance:/path/to/deploy/
                    ssh -i $SSH_KEY -o StrictHostKeyChecking=no ec2-user@your-ec2-instance 'unzip /path/to/deploy/output_file.zip -d /path/to/deploy/'
                    '''
                }
            }
        }
    }
}
