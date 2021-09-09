pipeline {
    agent any
  //triggers {pollSCM('* * * * *')}
  stages {
    stage('Checkout') {
      steps {
        // Get some code from a GitHub repository
        git branch: "main", url: 'https://github.com/nithya9906/Project3Angular.git'
      }
    }      
   stage('DockerBuild') {
      steps {
        sh 'docker build -t project03/passapp-front:latest .'
      }
        }
         stage('DockerRun') {
      steps {
        sh 'docker run -d --rm -p 9092:80 project03/passapp-front'
      }
        }
  }
}