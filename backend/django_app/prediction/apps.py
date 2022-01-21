from django.apps import AppConfig

import pandas as pd
import pickle
import os

class PredictionConfig(AppConfig):
    name = 'prediction'
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    MLMODEL_FOLDER = os.path.join(BASE_DIR, 'prediction/mlmodel/')
    MLMODEL_FILE = os.path.join(MLMODEL_FOLDER, "Stroke.pkl")
    mlmodel = pickle.load(open(MLMODEL_FILE,'rb'))