#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jul 24 11:07:55 2025

@author: sharonvitiell_snhu
"""

from pymongo import MongoClient
from bson.objectid import ObjectId

class AnimalShelter(object):
    """ CRUD operations for Animal collection in MongoDB """

    def __init__(self, USER, PASS):
        
        # Connection Variables
        #
        USER = 'aacuser'
        PASS = 'password1'
        HOST = 'nv-desktop-services.apporto.com'
        PORT = 34025
        DB = 'AAC'
        COL = 'animals'
        #
        # Initialize Connection
        #
        self.client = MongoClient('mongodb://%s:%s@%s:%d' % (USER,PASS,HOST,PORT))
        self.database = self.client['%s' % (DB)]
        self.collection = self.database['%s' % (COL)]

# Complete this create method to implement the C in CRUD.
    def create(self, data):
        if data is not None:
            insertDoc = self.database.animals.insert_one(data)  # data should be dictionary            
            if insertDoc == 0:
                return False # if no document was created, return false
            else:
                return True # return true if create was successful
        else:
            raise Exception("Nothing to save, because data parameter is empty")

# Method to implement Read.
    def read(self, readData): # readData is the key value pair input
        if readData is not None:
            cursor = self.collection.find(readData or {}) # use MongoDB cursor to iterate over results
            results = [] # list to store results of read query
            for doc in cursor:
                results.append(doc) # add each document to the list as cursor iterates through results
            return results # output the list
                                  
        else:
             raise ValueError("Query parameter empty")   
            
# Method to implement Update
    def update(self, keyValue, updateData):
        if updateData is not None:
            self.database.animals.update(keyValue, updateData)
            return True
        else:
            print("Update was unsuccessful")
            return False
    
# Method to implement Delete
    def delete(self, keyValue):
        if keyValue is not None:
            self.database.animals.remove(keyValue)
            return True
        else:
            print("Delete failed. Data not found")
            return False
