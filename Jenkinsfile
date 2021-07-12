pipeline {
  agent none
  stages {
    stage('Applications client Build') {
      agent {
        docker {
          image 'node:14-buster'
          reuseNode true
          args '-v $HOME/.npm:/.npm'
        }
      }
      steps {
        dir('Applications/client') {
          sh('npm install')
          sh('npx next build')
        }
      }
    }
    stage('Applications client Test') {
      agent {
        docker {
          image 'node:14-buster'
          reuseNode true
          args '-v $HOME/.npm:/.npm'
        }
      }
      steps {
        dir('Applications/client') {
          sh('npx jest')
        }
      }
    }
    stage('E2E Test') {
      agent any
      steps {
        sh('/usr/local/bin/docker-compose build')
        sh('/usr/local/bin/docker-compose up -d applications_client')
        sh('/usr/local/bin/docker-compose run --rm e2e_test')
      }
      post {
        always {
          sh('/usr/local/bin/docker-compose down')
        }
      }
    }
  }
}
