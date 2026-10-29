# nav to features folder
# recursively get all features inside
# match those feature names against our existing list
# return json(?) of only req names & content (lol)

import sys
import os

fileList = str(sys.argv[1])
filePath = str('../../'+sys.argv[2])

print('File list: '+fileList)
fileList = fileList.split(',')
os.chdir(filePath) # cd back out of this repo & into docs repo
print('File path: '+os.getcwd())

dirPath = os.path.dirname(os.path.realpath())
print('dirPath: '+dirPath)