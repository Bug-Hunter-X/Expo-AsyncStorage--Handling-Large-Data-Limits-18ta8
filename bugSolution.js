// bugSolution.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydatabase.db');

// Function to insert large data into the SQLite database
const insertLargeData = async (data) => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS mytable (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT)',
      [],
      (txObj, resultSet) => {
        tx.executeSql('INSERT INTO mytable (data) VALUES (?)', [JSON.stringify(data)], (txObj, resultSet) => {
          console.log('Data inserted successfully into SQLite');
        }, (txObj, error) => {
          console.error('Error inserting data:', error);
        });
      },
      (txObj, error) => {
        console.error('Error creating table:', error);
      }
    );
  });
};

// Example usage:
const largeData = { /* ...Your large data object... */ };
insertLargeData(largeData);

// Function to retrieve data from SQLite
const retrieveData = async () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM mytable',
          [],
          (_, { rows }) => resolve(JSON.parse(rows._array[0].data)),
          (_, error) => reject(error)
        );
      });
    });
  };
