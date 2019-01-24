import glob
import os
folder = '.'

for filename in glob.iglob(os.path.join(folder, '*.js')):
    os.rename(filename, filename[:-4] + '.mjs')
