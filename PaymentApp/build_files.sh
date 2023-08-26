 echo "BUILD START"
 py -m pip install -r requirements.txt
 py manage.py collectstatic --noinput --clear
 echo "BUILD END"