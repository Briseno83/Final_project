from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re


app = Flask(__name__)
app.secret_key = 'Matrix2022'

# Enter your database connection details below
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'video'

# Intialize MySQL
mysql = MySQL(app)

# http://localhost:5000/pythonlogin/ - the following will be our login page, which will use both GET and POST requests
@app.route('/', methods=['GET', 'POST'])
def login():
    # Output message if something goes wrong...
    msg = ''
    # Check if "username" and "password" POST requests exist (user submitted form)
    if request.method == 'POST' and 'username' in request.form and 'password' in request.form:
        # Create variables for easy access
        username = request.form['username']
        password = request.form['password']
        # Check if account exists using MySQL
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM accounts WHERE username = %s AND password = %s', (username, password,))
        # Fetch one record and return result
        account = cursor.fetchone()
        # If account exists in accounts table in out database
        if account:
            # Create session data, we can access this data in other routes
            session['loggedin'] = True
            session['id'] = account['id']
            session['username'] = account['username']
            # Redirect to home page
            return redirect(url_for('index'))
        else:
            # Account doesnt exist or username/password incorrect
            msg = 'Incorrect username/password!'
    # Show the login form with message (if any)
    return render_template('login.html', msg=msg)



# http://localhost:5000/pythinlogin/profile - this will be the profile page, only accessible for loggedin users
@app.route('/profile')
def profile():
    # Check if user is loggedin
    if 'loggedin' in session:
        # We need all the account info for the user so we can display it on the profile page
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM accounts WHERE id = %s', (session['id'],))
        account = cursor.fetchone()
        # Show the profile page with account info
        return render_template('profile.html', account=account)
    # User is not loggedin redirect to login page
    return redirect(url_for('login'))

@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/banner_file.html')
def banner():
    return render_template('banner_file.html')

@app.route('/rental_main.html', methods=['GET', 'POST'])
def main():
    if request.method == 'POST': 
        name = request.form['txtName']
        phone = request.form['txtPhoneNum']
        email = request.form['txtEmail']
        video = request.form['txtVideo']
        price = request.form['txtprice']
        delivery_fee = request.form['txtDeliveryFee']
        total_price = request.form['txtTotalCost']
        cursor = mysql.connection.cursor() 
        cursor.execute('INSERT INTO matrix_video (name_cust,Phone,Email,Video_rented,Price,delivery_fee,Total_price) VALUES ( %s, %s, %s, %s, %s, %s, %s)', (name, phone, email, video, price, delivery_fee, total_price))
        mysql.connection.commit()
        cursor.close()
        #return 'success'
    return render_template('rental_main.html')

@app.route('/rental_images.html')
def content():
    return render_template('rental_images.html')

@app.route('/detail.html')
def detail():
    return render_template('detail.html')

#Start functions to call movie trailer pages

@app.route('/1.html')
def one():
    return render_template('1.html')

@app.route('/2.html')
def two():
    return render_template('2.html')

@app.route('/3.html')
def three():
    return render_template('3.html')

@app.route('/4.html')
def four():
    return render_template('4.html')

@app.route('/5.html')
def five():
    return render_template('5.html')

@app.route('/6.html')
def six():
    return render_template('6.html')

@app.route('/7.html')
def seven():
    return render_template('7.html')

@app.route('/8.html')
def eight():
    return render_template('8.html')

@app.route('/9.html')
def nine():
    return render_template('9.html')

@app.route('/10.html')
def ten():
    return render_template('10.html')

@app.route('/11.html')
def eleven():
    return render_template('11.html')

if __name__ == "__main__":
    app.run(debug=True)