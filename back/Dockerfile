FROM node:16
RUN apt update; \
    apt install -y build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libreadline-dev libffi-dev; \
    wget https://www.python.org/ftp/python/3.9.7/Python-3.9.7.tgz; \
    tar -zxvf Python-3.9.7.tgz; \
    cd Python-3.9.7; \
    ./configure --prefix=/usr/local/python3; \
    make && make install; \
    ln -sf /usr/local/python3/bin/python3.9 /usr/bin/python3; \
    ln -sf /usr/local/python3/bin/pip3.9 /usr/bin/pip3
RUN pip3 install matplotlib sympy scikit-image
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "node", "index.js" ]