sudo apt update && sudo apt upgrade -y
sudo apt install git -y

curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y

node -v
npm -v

sudo apt install nginx -y

sudo systemctl status nginx

OPEN :
http://EC2-PUBLIC-IP

git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

cd my-app/backend

npm install

node server.js

Server running on port 5000

Open another SSH terminal so the server keeps running.
curl http://localhost:5000/api
{"message":"Hello from Backend!"}

cd ../frontend

sudo cp index.html /var/www/html/

sudo nano /etc/nginx/sites-available/default

server {
    listen 80;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
    }
}


sudo nginx -t

sudo systemctl restart nginx


http://EC2-PUBLIC-IP


Keep the Backend Running

cd /backend 
sudo npm install -g pm2
pm2 start server.js
pm2 save
pm2 startup
pm2 save