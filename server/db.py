DB_FILENAME = 'db.sqlite'

from os         import *
from peewee     import *
from pathlib    import *

db = SqliteDatabase(DB_FILENAME)
db.connect()

class DbModel(Model):
    class Meta:
        database = db
