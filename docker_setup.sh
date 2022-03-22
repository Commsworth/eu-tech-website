#!/bin/sh
# BASE_URL=$(sed -n "s/^BASE_URL=//p" /home/credicity-uat/credicityuat/frontend-fhf_private-uat-develop/.env) 
# PORT=$(sed -n "s/^PORT=//p" /home/credicity-uat/credicityuat/frontend-fhf_private-uat-develop/.env) 


sudo docker build --tag commsworthdevops/eutech:$1 /home/eutech/eutech-home/eu-tech-website-pipeline

if [ $? -eq 0 ]; then
   echo Deploy Services
   echo $2 | sudo docker login -u $3  --password-stdin && sudo docker push commsworthdevops/eutech:$1 

   # sudo docker service update --image 127.0.0.1:5000/credicity_mortgage_frontend_admin:$1 credicity_mortgage_frontend_admin
   
   if [ $? -eq 0 ]; then
   echo "Y" | docker system prune -a
   echo Updated Services Successfully
   sudo docker service update --image commsworthdevops/eutech:$1 eutech


   else
   echo "Y" | docker system prune -a
   echo Fresh Deployment
   sudo docker service create -p 8008:3000 --name eutech commsworthdevops/eutech:$1
  
   fi
else
   exit 1
   echo Error In Build or Push Process
fi










