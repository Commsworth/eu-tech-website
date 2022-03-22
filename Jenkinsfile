pipeline {
  
  
agent any
  
      environment {

                DOCKER_PRISMIC = credentials('prismic-docker')
                
            }

  stages {
   
// Stage 1: Checkout Code from Git
    stage('Application Code Checkout from Git') {
      steps{
        // sh 'sudo chown -R jenkins:jenkins /var/lib/jenkins/workspace'
        // sh 'sudo find / -name ".git" | xargs sudo rm -rf'
        checkout scm
    }}
    
    

// Stage 5: Build Docker Image    
    stage('Ssh into Virtual Machine') {
      when{
        branch 'prod-pipeline'
      }
      steps{
          script {
            // sh("chmod +x docker_setup.sh && ./docker_setup.sh ${env.BUILD_ID}")
            //             sh('''
            // set +x
            // echo "BASE_URL=$ADMIN_BASE_URL \nPORT=3000" > .env 
            // ''')

            sh('cat .env | tr -d " \t\r" >/dev/null')

            sh("sudo ansible-playbook /var/lib/jenkins/eutech-pipeline-playbook.yaml -i /etc/ansible/inventory -v --tags prod --extra-vars 'TAG=${env.BUILD_ID} DOCKER_PRISMIC_PSW=${DOCKER_PRISMIC_PSW} DOCKER_PRISMIC_USR=${DOCKER_PRISMIC_USR}'")


            sh "ls ${JENKINS_HOME}/workspace | xargs rm -rf"
        }}
    }



     






  }
}


