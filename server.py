from flask import Flask, render_template, request, Response

app = Flask(__name__, static_url_path='')


@app.route("/", methods=['GET', 'PUT'])
def hello():
    if request.method == 'GET':
        return render_template('index.html')
    if request.method == 'PUT':
        if 'thefile' not in request.files:
            return Response('no file in request', status=400)
        return Response('good', status=200)
