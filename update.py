import os

cmd = os.system

cmd('python3 scrape.py')
cmd('git add .')
cmd('git commit -m "updating news items"')
cmd('git push origin master')

