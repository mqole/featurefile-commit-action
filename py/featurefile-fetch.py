# nav to features folder
# recursively get all features inside
# match those feature names against our existing list
# return json(?) of only req names & content (lol)

import sys
import os

fileList = str(sys.argv[1])
fileList = fileList.split(',')

print(fileList)
print(os.getcwd())
os.chdir('../..')
print(os.getcwd())
