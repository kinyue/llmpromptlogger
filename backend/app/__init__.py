from flask import Flask

def create_app():
    # Create a new Flask app instance
    app = Flask(__name__, instance_relative_config=True)

    # Load the default configuration
    app.config.from_object('config')

    # Load the instance configuration, if it exists
    app.config.from_pyfile('config.py', silent=True)

    # Initialize extensions and blueprints here

    return app