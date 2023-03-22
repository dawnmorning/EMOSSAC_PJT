import os

BASE_DIR = os.path.dirname(__file__)

# SQLALCHEMY_DATABASE_URI = 'http://localhost:3306'.format(os.path.join(BASE_DIR, 'pybo.db'))
# SQLALCHEMY_DATABASE_URI = 'sqlite:///{}'.format(os.path.join(BASE_DIR, 'pybo.db'))

SQLALCHEMY_TRACK_MODIFICATIONS = False

DATABASE = {
    # 데이터베이스에 접속할 사용자 아이디
    'user': 'ssafy',
    # 사용자 비밀번호
    'password': 'ssafy',
    # 접속할 데이터베이스의 주소 (같은 컴퓨터에 있는 데이터베이스에 접속하기 때문에 localhost)
    'host': 'localhost:3306',
    # 관계형 데이터베이스는 주로 3306 포트를 통해 연결됨
    'port': 3306,
    # 실제 사용할 데이터베이스 이름
    'database': 'emosaac'
}

DB_URL = f"mysql+mysqlconnector://{DATABASE['user']}:{DATABASE['password']}@{DATABASE['host']}:{DATABASE['port']}/{DATABASE['database']}?charset=utf8"