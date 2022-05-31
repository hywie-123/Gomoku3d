from datetime import *
from peewee   import *

from server.db import DbModel

class DbUser(DbModel):
    uid         = IntegerField   (primary_key=True)
    username    = CharField      (null=False, max_length=31, unique=True, index=True)
    password    = CharField      (null=False, max_length=31)
    nickname    = CharField      (null=False, max_length=31)
    created_at  = DateTimeField  (null=False, default=datetime.now)

DbUser.create_table()
