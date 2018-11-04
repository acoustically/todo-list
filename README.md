# todo-list
2018 winter coding 2nd test

1.의존성 설치
1-1 angular client
sudo apt-get install npm
sudo npm install -g n
sudo n latest
sudo npm install @angular/cli
sudo npm install --save-dev @angular-devkit/build-angular
cd ...../todo-list/client
ng serve

1-2 flask server
sudo apt-get install python3 python3-pip
sudo pip3 install flask jsonify blueprint flask-cors pymongo
cd ..../todo-list/server
python3 app.py

1-3 mongodb
sudo apt-get install mongodb
sudo service mongodb start

2. 사용 방법
빈 화면을 클릭해서 todo를 생성한 다음 다시 todo 를 클릭하여 작성할수 있습니다.
자유롭게 todo를 이동시키면서 사용할 수 있습니다.
todo의 작업을 완료할시 오른쪽 Done 리스트에 옮기면 됩니다.
삭제는 오른쪽 하단에 휴지통에 드래그앤 드랍으로 이용할 수 있습니다.
